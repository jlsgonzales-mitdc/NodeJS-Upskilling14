const { EventEmitter } = require('events');
const { TerminalList} = require('../shared'); 
const { Config } = require('../shared');
const { QueueSong } = require('shared');
class Playlist extends TerminalList {
    constructor() {
        super(Config.playlist);
        this.addListener();
        this.events = new EventEmitter();
    }

    addTrack(...files) {
        for(const file of files){
            this.list.add(file);
        }
    }

    addListener(){
        this.list.key('down', () => this.list.down(1));
        this.list.key('up', () => this.list.up(1));
        this.list.key('delete', () => {
            this.list.removeItem(this.list.selected); 
            this.list.parent.render();
        });
        this.list.key('enter', () => {
            this.queueSong(this.list.ritems[this.list.selected]);
        });
    }

    queueSong(song){
        this.events.emit(QueueSong, new QueueSong(song));
    }

}

module.exports = Playlist;
