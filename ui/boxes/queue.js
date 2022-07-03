const { TerminalList } = require('../shared'); 
const { Config } = require('../shared');

class Queue extends TerminalList {
    constructor() {
        super(Config.queue);
        this.list.add('1');
        this.list.add('2');
        this.list.add('3');
        this.addListeners();
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
