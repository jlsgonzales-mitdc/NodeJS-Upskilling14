const {View} = require('./view');
const { 
    Controls, 
    Playlist,
    NowPlaying,
    Queue
} = require('./boxes');
const {QueueSong} = require('shared');

const ui = new View();
const controls = new Controls();
const playlist = new Playlist();
const nowplaying = new NowPlaying();
const queue = new Queue();

function start() {
    ui.appendBoxes(
        controls.box,
        playlist.list,
        nowplaying.box,
        queue.list
    );
    ui.render();

    playlist.list.focus();
    ui._screen.key('tab', () => {
        ui._screen.focused !== playlist.list ? playlist.list.focus() : queue.list.focus();
    });

    playlist.events.on(QueueSong, (event) => {
        const {song} = event;
        queue.queueSong(song);
    });
}

module.exports = {
    start,
    nowplaying,
    playlist,
    ui
};