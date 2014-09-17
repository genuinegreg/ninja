define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        state.bullets = [];
        
        state.collisionGroups.bullet = state.game.physics.p2.createCollisionGroup();
        
        function collideWithMap (body, shapeA, shapeB, equation) {
            console.log(body);
            console.log(shapeA);
            console.log(shapeB);
            console.log(equation);
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
            this.sprite.body.collides([state.collisionGroups.player, state.collisionGroups.map]);
            this.sprite.body.moveRight(1000);
            //this.sprite.body.onBeginContact.add(collideWithMap, this);
            
            state.bullets.push(this);
        }
        
        return {
            createBullet : function(x, y, dx, dy){return new Bullet(x, y); }
        };
        
    }  
);