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
    },
    playlist:{
        label: 'Playlist',
        border,
        style,
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
        height: 4
    },
    queue:{
        label: 'Queue',
        border,
        style,
        right: 0,
        bottom: 10,
        width: '50%',
        height: '95%-10',
    }

};

module.exports = Config;