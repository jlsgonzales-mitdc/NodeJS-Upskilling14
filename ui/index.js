const {View} = require('./view');
const {Controls} = require('./boxes');
const ui = new View();
const ctrls = new Controls();

function start() {
    ui.appendBoxes(ctrls.box);
    ui.render();
}

module.exports = {
    start
};