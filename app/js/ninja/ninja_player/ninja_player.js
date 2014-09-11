define(
    
	[
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_physic/ninja_physic'
    ],
    function (state, ninja_physic) 
    {
 
        
        function Player(x, y)
        {
            var player = state.game.add.sprite(x, y, 'player');
            player.sword = state.game.add.sprite(x, y, 'sword');
            player.cursors = state.game.input.keyboard.createCursorKeys();
            
            
            
            
            state.maplayer = state.map.createLayer('ninja_layer');

            state.game.physics.p2.enable(player);
            
            player.smoothed = false;
            player.body.fixedRotation = true;
            
            state.players.push(player);
            
            return player;
            
        }
 
        Player.prototype.methode1 = function() {
 
        }
 
 
        Player.prototype.methode2 = function() {
 
        }
        
        state.players = [];
        
        return {
            createPlayer : function(x, y){return Player(x, y); }
        };
    }
);