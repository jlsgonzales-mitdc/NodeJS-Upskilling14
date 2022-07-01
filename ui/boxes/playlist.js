const { TerminalList} = require('../shared'); 
const { Config } = require('../shared');

class Playlist extends TerminalList {
    constructor() {
        super(Config.playlist);
        this.addListener();
    }

    addTrack(...files) {
        for(const file of files){
            this.list.add(file);
        }
    }

    addListener(){
        this.list.key('down', () => {this.list.down(1);});
        this.list.key('up', () => {this.list.up(1);});
    }

}

module.exports = Playlist;
