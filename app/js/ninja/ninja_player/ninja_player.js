define(
    
	[
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_physic/ninja_physic'
    ],
    function (state, ninja_physic) 
    {
        
        function Player(x, y)
        {
            this.sprite = state.game.add.sprite(x, y, 'player');
            this.sword = state.game.add.sprite(x, y, 'sword');
            this.cursors = state.game.input.keyboard.createCursorKeys();            
            
            state.maplayer = state.map.createLayer('ninja_layer');

            state.game.physics.p2.enable(this.sprite);
            
            this.sprite.smoothed = false;
            this.sprite.body.fixedRotation = true;
            
        }
 
        Player.prototype.methode1 = function() {
 
        }
 
 
        Player.prototype.methode2 = function() {
 
        }
        
        Player.prototype.checkJump = function() {
            
            var yAxis = p2.vec2.fromValues(0, 1);
            var result = false;

            for (var i = 0; i < state.game.physics.p2.world.narrowphase.contactEquations.length; i++)
            {
                var c = state.game.physics.p2.world.narrowphase.contactEquations[i];

                if (c.bodyA === this.sprite.body.data || c.bodyB === this.sprite.body.data)
                {
                    var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
                    if (c.bodyA === this.sprite.body.data) d *= -1;
                    if (d > 0.5) result = true;
                }
            }
    
            return result;            
        }
        
        state.players = [];
        
        return {
            createPlayer : function(x, y){return new Player(x, y); }
        };
    }
);