const { EventEmitter } = require('events');

let _happyCount = 0;
const events = new EventEmitter();

function countEmoji(mood){
    if(mood === 'Happy'){
        _happyCount++;
    }
}

function resetCounter(){
    _happyCount = 0;
}

function getMood() {
    if(_happyCount >= 10){
        resetCounter();
        return 'party';
    } else if (_happyCount >= 7) {
        return 'dance';
    } else if (_happyCount >= 5) {
        return 'listen';
    } else {
        return 'received';
    }
}

module.exports = {
    events,
    getMood,
    countEmoji,
    resetCounter
};