#!/usr/bin/env node

const Hapi = require('@hapi/hapi');
const socketIO = require('socket.io');
const StaticFilePlugin = require('@hapi/inert');
const Path = require('path');
const Routes = require('./routes');
const Engine = require('./engine');
const UI = require('./ui');
const { AddedSong, PlaySong, DequeueSong } = require('shared');
const { moodService } = require('./services');

void async function startApp() {

    try {
        const server = Hapi.server({
            port: process.env.PORT || 8080,
            host: process.env.HOST || 'localhost',
            compression: false,
            routes: { files: { relativeTo: Path.join(__dirname, 'public') } }
        });
        await server.register(StaticFilePlugin);
        await server.register(Routes);

        const io = socketIO(server.listener);

        io.on('connection', (socket) => {
            socket.on('message', (a) => {
                moodService.countEmoji(a);
                moodService.events.emit('moodSent', '');
            });
        });

        moodService.events.on('moodSent',() => {
            io.emit('broadcast',moodService.getMood());
        });


        Engine.queue.stream.on(AddedSong, (event) => {
            const {songs} = event;
            UI.queue.queueSong(...songs);
        });
        Engine.queue.stream.on(PlaySong, (event) => {
            const {song} = event;
            UI.nowplaying.displaySong(song);
        });
        Engine.queue.stream.on(DequeueSong, (event) => {
            const {index} = event;
            UI.queue.dequeueSong(index);
        });

        UI.queue.events.on(DequeueSong, (e) => {
            const {index} = e;
            Engine.removeSongFromQueue(index);
        });

        UI.start();
        Engine.start();
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(`Server errored with: ${err}`);
        console.error(err.stack);
        process.exit(1);
    }
}();