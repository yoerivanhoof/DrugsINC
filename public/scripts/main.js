
// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'socketio': {
            exports: 'io'
        },
        'lodash': {
            exports: '_'
        },
    },
    paths: {
        socketio: '/socket.io/socket.io',
        lodash: './utils/lodash',
        phaser: "./utils/phaser.min"
    }
});

define([
    'socketio',
    'lodash',
    'phaser',
    'game',
], function( io, _, Phaser, Game ) {

    Game.start();




});