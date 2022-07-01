const { TerminalList} = require('../shared'); 
const { Config } = require('../shared');

class Playlist extends TerminalList {
    constructor() {
        super(Config.playlist);
    }

    addTrack(...files) {
        for(const file of files){
            this.list.add(file);
        }
    }

}

module.exports = Playlist;
