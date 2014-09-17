define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function worldCreateFactory(state) {
        'use strict';

        function worldCreate(game) 
        {
            state.game = game;
            
            // This has to be done before any require because we need physic and game for some modules
            game.stage.backgroundColor = 0x000000;
            game.physics.startSystem(Phaser.Physics.P2JS);
            game.physics.p2.updateBoundsCollisionGroup();
            game.physics.p2.setImpactEvents(true);
            game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            
            require(['ninja/ninja_map/ninja_map'],function (map)
            {
                map.createMap();
            });

            require(['ninja/ninja_player/ninja_player'],function (player)
            {
                var player1 = player.createPlayer(75, 100);
                var player2 = player.createPlayer(100, 200);

                var Z = state.game.input.keyboard.addKey(Phaser.Keyboard.Z);
                var S = state.game.input.keyboard.addKey(Phaser.Keyboard.S);
                var D = state.game.input.keyboard.addKey(Phaser.Keyboard.D);
                var Q = state.game.input.keyboard.addKey(Phaser.Keyboard.Q);
                var I = state.game.input.keyboard.addKey(Phaser.Keyboard.I);

                player2.cursors.up = Z;
                player2.cursors.down = S;
                player2.cursors.left = Q;
                player2.cursors.right = D;
                player2.cursors.fire = I;
            });
        }

    return worldCreate;
    
    }
);