const Fs = require('fs');
const Path = require('path');
const EventEmitter = require('events');
const { PassThrough } = require('stream');

const Throttle = require('throttle');
// const { ffprobeSync } = require('@dropb/ffprobe');

const Utils = require('../utils');
const AddedSong = require('../shared/events/AddedSong');

class Queue  { 

    constructor() {
        this._sinks = new Map(); // map of active sinks/writables
        this._songs = []; // list of queued up songs
        this._currentSong = null;
        this.stream = new EventEmitter();
        this._queue = new EventEmitter();
    }

    init() {
        this.addSong(...Utils.readSongs());
        this.loadNextSong();
    }

    loadNextSong(){
        this._currentSong = this._songs[0];
    }

    addSong(...songs){
        this._songs.push(...songs);
        this._queue.emit(AddedSong,new AddedSong(...songs));
    }

    makeResponseSink() {
        const id = Utils.generateRandomId();
        const responseSink = PassThrough();
        this._sinks.set(id, responseSink);
        return { id, responseSink };
    }

    removeResponseSink(id) {
        this._sinks.delete(id);
    }

    _broadcastToEverySink(chunk) {
        for (const [, sink] of this._sinks) {
            sink.write(chunk);
        }
    }

    _getBitRate(song) {
        try {
            //const bitRate = ffprobeSync(Path.join(process.cwd(), song)).format.bit_rate;
            const bitRate = 128000;
            return parseInt(bitRate);
        }
        catch (err) {
            return 128000; // reasonable default
        }
    }

    _playLoop() {

        this._currentSong = this._songs.length
            ? this.removeFromQueue({ fromTop: true })
            : this._currentSong;
        const bitRate = this._getBitRate(this._currentSong);

        const songReadable = Fs.createReadStream(this._currentSong);

        const throttleTransformable = new Throttle(bitRate / 8);
        throttleTransformable.on('data', (chunk) => this._broadcastToEverySink(chunk));
        throttleTransformable.on('end', () => this._playLoop());

        this.stream.emit('play', this._currentSong);
        songReadable.pipe(throttleTransformable);
    }

    startStreaming() {
        this._playLoop();
    }

    _createAndAppendToSongs(song) {
        this._songs.push(song);
    }

    createAndAppendToQueue(song) {
        this._createAndAppendToSongs(song);
    }

    _removeFromSongs(index) {
        return this._songs.splice(index, 1);
    }

    removeFromQueue({ fromTop } = {}) {

        const index = fromTop ? 1 : this._focusIndexer.get();

        // this._removeFromBoxChildren(index);
        const [song] = this._removeFromSongs(index);
        return song;
    }

}

module.exports = Queue;
