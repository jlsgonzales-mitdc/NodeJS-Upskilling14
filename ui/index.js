const {View} = require('./view');
const { 
    Controls, 
    Playlist,
    NowPlaying,
    Queue
} = require('./boxes');

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
        queue.box
    );
    ui.render();
}

module.exports = {
    start,
    playlist,
    ui
};