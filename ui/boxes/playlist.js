const { TerminalBox, TerminalList} = require('../shared'); 
const { Config } = require('../shared');

class Playlist extends TerminalList {
    constructor() {
        super(Config.playlist);
    }

    addTrack(filename) {
        this.list.add(filename);
    }

}

module.exports = Playlist;
