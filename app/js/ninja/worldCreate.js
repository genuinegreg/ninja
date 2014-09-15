define(
    [
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_player/ninja_player'
    ],
    
    function worldCreateFactory(state, player) {
        'use strict';

        function worldCreate(game) {
            game.stage.backgroundColor = 0x000000;
            game.physics.startSystem(Phaser.Physics.P2JS);
            game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            state.game = game;

            //  The 'mario' key here is the Loader key given in game.load.tilemap
            state.map = game.add.tilemap('map');

            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
            state.map.addTilesetImage('ninja', 'tiles');


            console.log(state.map);


            state.tiles = game.physics.p2.convertCollisionObjects(state.map, 'colision');


            state.game.physics.p2.restitution = 0;
            state.game.physics.p2.gravity.y = 1000;

            var player1 = player.createPlayer(75, 100);
            var player2 = player.createPlayer(100, 200);
            
            state.players.push(player1);
            state.players.push(player2);
            
            var Z = state.game.input.keyboard.addKey(Phaser.Keyboard.Z);
            var S = state.game.input.keyboard.addKey(Phaser.Keyboard.S);
            var D = state.game.input.keyboard.addKey(Phaser.Keyboard.D);
            var Q = state.game.input.keyboard.addKey(Phaser.Keyboard.Q);
            
            player2.cursors.up = Z;
            player2.cursors.down = S;
            player2.cursors.left = Q;
            player2.cursors.right = D;
        }

    return worldCreate;
    
    }
);