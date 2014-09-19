define(
    
	[
        'ninja/ninja_state/ninja_state',
        'ninja/ninja_physic/ninja_physic'
    ],
    function (state, physic) 
    {
        state.entities.bullets = [];
        
        state.collisionGroups.bullet = state.game.physics.p2.createCollisionGroup();
        
        function update(arg)
        {
            for (i = 0; i <  state.entities.players.length; i++) {
                
                var player =  state.entities.players[i];
                
                if(this.sprite.overlap(player.sprite))
                {
                    player.die();   
                }
            }
        }
        
        function Bullet(x, y)
        {
            this.sprite = state.game.add.sprite(x, y, 'bullet');
            this.sprite.name = 'bullet';
            
            state.game.physics.p2.enable(this.sprite);
            this.sprite.smoothed = false;
            this.sprite.body.fixedRotation = true;
            this.sprite.body.data.gravityScale = 0;
            this.sprite.body.setCollisionGroup(state.collisionGroups.bullet);
            this.sprite.body.collides([state.collisionGroups.map]);
            this.sprite.body.moveRight(1000);
            
            physic.physic(update, this);
            
            state.entities.bullets.push(this);
        }
        
        
        
        return {
            createBullet : function(x, y, dx, dy){return new Bullet(x, y); }
        };
        
    }  
);