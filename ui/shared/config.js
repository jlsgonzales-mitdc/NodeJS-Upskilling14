const style =  {
    fg: 'grey',
    bg: 'black',
    border: {
        fg: '#000000'
    }
};
const border = { type: 'line' };
const Config = {
    controls: {
        label: 'Controls',
        border,
        bottom: '0',
        right: '0',
        width: '50%',
        height: 5,
        style
    }

};

module.exports = Config;