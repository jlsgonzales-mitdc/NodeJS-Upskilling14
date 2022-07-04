const { TerminalList} = require('../shared'); 
const { Config } = require('../shared');

class Library extends TerminalList {
    constructor() {
        super(Config.library);
        this.addListener();
    }

    addTrack(...files) {
        for(const file of files){
            this.list.add(file);
        }
    }

    addListener(){
        this.list.key('down', () => this.list.down(1));
        this.list.key('up', () => this.list.up(1));
        this.list.key('delete', () => {
            this.list.removeItem(this.list.selected); 
            this.list.parent.render();
        });
    }

}

module.exports = Library;
