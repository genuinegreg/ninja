define([
    'ninja/ninja_state/ninja_state',
    'ninja/ninja_asset/ninja_asset',
    'ninja/worldCreate',
    'ninja/gameUpdate',
    'vendors/phaser'
], function(state, assetsLoader, worldCreate, gameUpdate) {

    var game = new Phaser.Game(1280, 704, Phaser.AUTO, 'ninja-game', {
        preload: function () {
            assetsLoader(game);
        },
        create: function() {
            worldCreate(game);
        }, 
        update: function() {
            gameUpdate(game);
        }
    });

    _game = game;
    _state = state;

    

})