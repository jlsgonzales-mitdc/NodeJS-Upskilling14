const { TerminalBox} = require('../shared'); 
const { Config } = require('../shared');

class Playlist extends TerminalBox {
    constructor() {
        super(Config.playlist);
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

module.exports = Playlist;
