const { EventEmitter } = require('events');
const { DequeueSong } = require('shared');
const { TerminalList } = require('../shared'); 
const { Config } = require('../shared');

class Queue extends TerminalList {
    constructor() {
        super(Config.queue);
        this.addListeners();
        this.events = new EventEmitter();
    }

    queueSong(...songs) {
        for(const song of songs){
            this.list.add(song);
        }
        this.list.parent.render();
    }

    addListeners(){
        this.list.key('down', () => this.list.down(1));
        this.list.key('up', () => this.list.up(1));
        this.list.key('delete', () => {
            this.events.emit(DequeueSong, new DequeueSong(this.list.selected));
            this.list.removeItem(this.list.selected); 
            this.list.parent.render();
        });
    }
}

module.exports = Queue;
