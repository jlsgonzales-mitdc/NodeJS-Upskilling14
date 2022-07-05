const Queue = require('./queue');

const queue = new Queue();

const start = () => {
    queue.init();
    queue.startStreaming();
};

function removeSongFromQueue(index){
    queue._removeFromSongs(index);
}

module.exports = {
    start,
    removeSongFromQueue,
    queue,
    Queue
};
