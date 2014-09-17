define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        state.bullets = [];
        
        state.collisionGroups.bullet = state.game.physics.p2.createCollisionGroup();
        
        function Bullet(x, y)
        {
            this.sprite = state.game.add.sprite(x, y, 'bullet');
            
            state.game.physics.p2.enable(this.sprite);
            this.sprite.smoothed = false;
            this.sprite.body.fixedRotation = true;
            this.sprite.body.data.gravityScale = 0;
            this.sprite.body.setCollisionGroup(state.collisionGroups.bullet);
            
            this.sprite.body.collides(state.collisionGroups.player);
            this.sprite.body.moveRight(1000);
            
            state.bullets.push(this);
        }
        
        Bullet.prototype.physic = function()
        {
            //this.sprite.body.moveRight(200);
        }
        
        return {
            createBullet : function(x, y, dx, dy){return new Bullet(x, y); }
        };
        
    }  
);