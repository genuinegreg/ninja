define(
    
	[
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_bullet/ninja_bullet'
    ],
    function (state, bullet) 
    {
        state.players = [];
        
        var fireRate = 1000;
        
        function Player(x, y)
        {
            this.sprite = state.game.add.sprite(x, y, 'player');
            this.sword = state.game.add.sprite(x, y, 'sword');
            this.cursors = state.game.input.keyboard.createCursorKeys();
            
            state.maplayer = state.map.createLayer('ninja_layer');

            state.game.physics.p2.enable(this.sprite);
            this.sprite.smoothed = false;
            this.sprite.body.fixedRotation = true;
            this.sprite.body.data.gravityScale = 1;
            
            this.nextFire = 0;
        }
 
        Player.prototype.moveRight = function(speed) {
            this.sprite.body.moveRight(speed);
        }
 
        Player.prototype.moveLeft = function(speed) {
            this.sprite.body.moveLeft(speed);
        }
        
        Player.prototype.moveUp = function(speed) {
            this.sprite.body.moveUp(speed);
        }
        
        Player.prototype.fire = function() {
            if (state.game.time.now > this.nextFire)
            {
                this.nextFire = state.game.time.now + this.fireRate;
                bullet.createBullet(this.sprite.body.x, this.sprite.body.y);
            }
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
        
        
        return {
            createPlayer : function(x, y){return new Player(x, y); }
        };
    }
);