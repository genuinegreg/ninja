define(
    
	[
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_physic/ninja_physic'
    ],
    function (state, ninja_physic) 
    {
 
        
        function Player()
        {
            var player = state.game.add.sprite(75, 100, 'player');
            var sword = state.game.add.sprite(75, 100, 'sword');
            
            state.maplayer = state.map.createLayer('ninja_layer');
            
            state.game.physics.ninja.enableAABB(player);
            
            player.body.bounce = 0;
            
            state.players.push(player);
            
        }
 
        Player.prototype.methode1 = function() {
 
        }
 
 
        Player.prototype.methode2 = function() {
 
        }
        
        state.players = [];
        
        return {
            createPlayer:function(){return Player(); }
        };
    }
);