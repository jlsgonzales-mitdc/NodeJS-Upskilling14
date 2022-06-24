const { TerminalBox} = require('../shared'); 
const { Config } = require('../shared');

class NowPlaying extends TerminalBox {
    constructor() {
        super(Config.nowplaying);
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

module.exports = NowPlaying;
