define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function physicsFactory(state) {

        function update()
        {
            if(!state.entities.players || !state.entities.bullets)
            {
                return;
            }
            state.entities.players.forEach(function(player)
            {
                state.entities.bullets.forEach(function(bullet)
                {
                    if(player.sprite.overlap(bullet.sprite))
                    {
                        player.die();
                    }
                });
            });
        }

        return {
            update : update
        };

    }
)
