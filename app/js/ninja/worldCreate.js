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

            //  The 'mario' key here is the Loader key given in game.load.tilemap
            state.map = game.add.tilemap('map');

            //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
            //  The second parameter maps this name to the Phaser.Cache key 'tiles'
            state.map.addTilesetImage('ninja', 'tiles');

            state.collisionGroups = {};
            var mapCollisionGroup = game.physics.p2.createCollisionGroup();
            var tiles = game.physics.p2.convertCollisionObjects(state.map, 'colision');
            tiles.forEach(function(tile)
            {
                tile.setCollisionGroup(mapCollisionGroup);
            });
            state.collisionGroups.map = mapCollisionGroup;
            
            state.game.physics.p2.restitution = 0;
            state.game.physics.p2.gravity.y = 1000;

            require(
            [
                'ninja/ninja_player/ninja_player'
            ],
            function (player)
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