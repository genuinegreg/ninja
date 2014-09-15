define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function physicsFactory(state) {

        function physics(game) {
            state.bullets.forEach(function(bullet)
            {
                bullet.physic();
            });
        }

        return physics;

    }
)
