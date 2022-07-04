const { TerminalList } = require('../shared'); 
const { Config } = require('../shared');

class Queue extends TerminalList {
    constructor() {
        super(Config.queue);
        this.addListeners();
    }

    queueSong(song) {
        this.list.add(song);
        this.list.parent.render();
    }

    addListeners(){
        this.list.key('down', () => this.list.down(1));
        this.list.key('up', () => this.list.up(1));
        this.list.key('delete', () => {
            this.list.removeItem(this.list.selected); 
            this.list.parent.render();
        });
    }
}

module.exports = Queue;
