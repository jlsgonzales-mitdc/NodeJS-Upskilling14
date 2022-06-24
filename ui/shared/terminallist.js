const neoBlessed = require('neo-blessed');
class TerminalList {
    constructor(config){
        this.list = neoBlessed.list(config);
    }
}


module.exports = TerminalList;