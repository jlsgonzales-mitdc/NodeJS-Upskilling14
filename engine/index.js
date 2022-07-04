const Queue = require('./queue');

const queue = new Queue();

const start = () => {
    queue.init();
    queue.startStreaming();
};

module.exports = {
    start,
    queue,
    Queue,
};
