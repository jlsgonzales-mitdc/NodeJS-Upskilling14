const { TerminalBox} = require('../shared'); 
const { Config } = require('../shared');

class NowPlaying extends TerminalBox {
    constructor() {
        super(Config.nowplaying);
    }
    
    displaySong(song){
        this.box.content = song;
    }
}

module.exports = NowPlaying;
