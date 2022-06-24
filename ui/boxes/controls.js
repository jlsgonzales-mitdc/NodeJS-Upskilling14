const { TerminalBox} = require('../shared'); 
const { Config } = require('../shared');

class Controls extends TerminalBox {
    constructor() {
        super(Config.controls);
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

module.exports = {Controls};
