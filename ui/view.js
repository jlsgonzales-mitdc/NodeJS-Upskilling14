const blessed = require('neo-blessed');
class View {
    constructor(){
        const screen = blessed.screen({ smartSCR: true });
        screen.title = 'sample screen';
        screen.key(['escape', 'C-c'],() => process.exit(0));
        this._screen = screen;
    }

    appendBoxes(...boxes){
        for( const box of boxes ){
            this._screen.append(box);
        }
    }

    render(){
        this._screen.render();
    }
}

module.exports = {View};