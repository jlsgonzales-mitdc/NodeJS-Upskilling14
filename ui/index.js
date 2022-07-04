const {View} = require('./view');
const { 
    Controls, 
    Library,
    NowPlaying,
    Queue
} = require('./boxes');
const {QueueSong} = require('shared');

const view = new View();
const controls = new Controls();
const library = new Library();
const nowplaying = new NowPlaying();
const queue = new Queue();

function start() {
    view.appendBoxes(
        controls.box,
        library.list,
        nowplaying.box,
        queue.list
    );
    view.render();

    library.list.focus();
    view._screen.key('tab', () => {
        view._screen.focused !== library.list ? library.list.focus() : queue.list.focus();
    });

    library.events.on(QueueSong, (event) => {
        const {song} = event;
        queue.queueSong(song);
    });
}

function removeSongFromQueue(song,index){
    queue.dequeueSong(song,index);
    view.render();
}

module.exports = {
    start,
    removeSongFromQueue,
    nowplaying,
    library,
    queue,
    view
};