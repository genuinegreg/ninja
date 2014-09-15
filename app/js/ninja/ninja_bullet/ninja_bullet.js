define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        state.bullets = [];
        
        function Bullet(x, y, dx, dy)
        {
            this.sprite = state.game.add.sprite(x, y, 'bullet');
            
            state.game.physics.p2.enable(this.sprite);
            this.sprite.smoothed = false;
            this.sprite.body.fixedRotation = true;
            this.sprite.body.data.gravityScale = 1;
            
            this.dx = dx;
            this.dy = dy;
            
            state.bullets.push(this);
        }
        
        Bullet.prototype.physic = function()
        {
            this.sprite.body.moveRight(200);
            
        }
        
        return {
            createBullet : function(x, y, dx, dy){return new Bullet(x, y); }
        };
        
    }  
);