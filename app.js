#!/usr/bin/env node

const Hapi = require('@hapi/hapi');
const StaticFilePlugin = require('@hapi/inert');
const Path = require('path');
const Routes = require('./routes');
const Engine = require('./engine');
const UI = require('./ui');
const { AddedSong, PlaySong } = require('shared');

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

        Engine.queue.stream.on(AddedSong, (event) => {
            const {songs} = event;
            UI.library.addTrack(...songs);
            UI.ui.render();
        });
        Engine.queue.stream.on(PlaySong, (event) => {
            const {song} = event;
            UI.nowplaying.displaySong(song);
            UI.ui.render();
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