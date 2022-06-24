const neoBlessed = require('neo-blessed');
class TerminalBox {
    constructor(config){
        this.box = neoBlessed.box(config);
    }
}


module.exports = TerminalBox;