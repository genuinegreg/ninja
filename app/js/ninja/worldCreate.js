define(
    [
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_player/ninja_player'
    ],
    
    function worldCreateFactory(state, player) {
        'use strict';

        function worldCreate(game) {
            game.stage.backgroundColor = 0x000000;
            game.physics.startSystem(Phaser.Physics.NINJA);
            game.physics.ninja.gravity = 0.5;
            game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            state.game = game;

            //  The 'mario' key here is the Loader key given in game.load.tilemap
            state.map = game.add.tilemap('map');

            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
            state.map.addTilesetImage('ninja', 'tiles');

            var slopMap = [];
            for (var i = 1; i<= 34; i++) {
                slopMap[i] = i-1;   
            }
            state.tiles = game.physics.ninja.convertTilemap(state.map, state.layer, slopMap);
            
            player.createPlayer();
        }

    return worldCreate;
    
    }
);