const {View} = require('./view');
const { 
    Controls, 
    Library,
    NowPlaying,
    Queue
} = require('./boxes');
const {QueueSong} = require('shared');

const ui = new View();
const controls = new Controls();
const library = new Library();
const nowplaying = new NowPlaying();
const queue = new Queue();

function start() {
    ui.appendBoxes(
        controls.box,
        library.list,
        nowplaying.box,
        queue.list
    );
    ui.render();

    library.list.focus();
    ui._screen.key('tab', () => {
        ui._screen.focused !== library.list ? library.list.focus() : queue.list.focus();
    });

    library.events.on(QueueSong, (event) => {
        const {song} = event;
        queue.queueSong(song);
    });
}

module.exports = {
    start,
    nowplaying,
    library,
    ui
};