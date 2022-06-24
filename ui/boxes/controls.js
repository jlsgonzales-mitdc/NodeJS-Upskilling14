const { TerminalBox} = require('../shared'); 
const { Config, Keys } = require('../shared');

class Controls extends TerminalBox {
    constructor() {
        super(Config.controls);
        this.setPlaylistTips();
    }

    setPlaylistTips() {
        this.box.content = `
            ${Keys.FOCUS_QUEUE} - focus queue | ${Keys.SCROLL_UP} - go up
            ${Keys.QUEUE_ADD} - enqueue song | ${Keys.SCROLL_DOWN} - go down
        `;
    }
    setQueueTips() {
        this.box.content = `
            ${Keys.MOVE_UP} - move song up | ${Keys.SCROLL_UP}-go up
            ${Keys.MOVE_DOWN} - move song down | ${Keys.SCROLL_DOWN}-go down
            ${Keys.FOCUS_PLAYLIST} - focus playlist | ${Keys.QUEUE_REMOVE} - dequeue son
        `;
    }
}

module.exports = Controls;
