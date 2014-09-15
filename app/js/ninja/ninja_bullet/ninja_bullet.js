define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        
        function Bullet(x, y)
        {
            this.sprite = state.game.add.sprite(x, y, 'bullet');
            
            state.game.physics.p2.enable(this.sprite);
            this.sprite.smoothed = false;
            this.sprite.body.fixedRotation = true;
            this.sprite.body.data.gravityScale = 1;
        }
        
        return {
            createBullet : function(x, y){return new Bullet(x, y); }
        };
        
    }  
);