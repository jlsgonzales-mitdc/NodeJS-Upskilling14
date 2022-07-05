const style =  {
    fg: 'grey',
    bg: 'black',
    border: {
        fg: '#000000'
    }
};
const border = { type: 'line' };
const focus = {
    border: {
        fg: 'blue'
    }
};
const Config = {
    controls: {
        label: 'Controls',
        border,
        bottom: '0',
        right: '0',
        width: '50%',
        height: 5,
        style
    },
    library:{
        label: 'Library',
        border,
        style: {
            fg: 'grey',
            bg: 'black',
            border: {
                fg: '#000000'
            },
            focus
        },
        left: 0,
        bottom: 0,
        width: '50%',
        height: '95%'
    },
    nowplaying:{
        label: 'Now Playing',
        border,
        style,
        right: 0,
        bottom: 6,
        width: '50%',
        height: 5,
        tags: true
    },
    queue:{
        label: 'Queue',
        border,
        style: {
            fg: 'grey',
            bg: 'black',
            border: {
                fg: '#000000'
            },
            focus
        },
        right: 0,
        bottom: 11,
        width: '50%',
        height: '95%-11'
    }

};

module.exports = Config;