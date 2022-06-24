const { TerminalBox} = require('../shared'); 
const { Config } = require('../shared');

class Queue extends TerminalBox {
    constructor() {
        super(Config.queue);
        this.setPlaylistTips();
    }

    setPlaylistTips() {
        this.box.content = `
            3213123212
        `;
    }
    setQueueTips() {
        this.box.content = `
            test 123
            123
            123
        `;
    }
}

module.exports = Queue;
