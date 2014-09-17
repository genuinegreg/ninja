define(
    
	[
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_map/ninja_map',
        'ninja/ninja_player/ninja_player'
    ],
    function (state, map, player) 
    {
        function World()
        {
            var map1 = map.createMap();
            
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
        }
        
        return {
            createWorld : function(){return new World();}  
        };
        
    }
);