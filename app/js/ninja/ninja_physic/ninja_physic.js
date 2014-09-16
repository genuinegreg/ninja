define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function physicsFactory(state) {

        function physics(game) {
            //TODO, that's bullshit
            if(state.hasOwnProperty('bullets'))
            {
                state.bullets.forEach(function(bullet)
                {
                    bullet.physic();
                });
            }
        }

        return physics;

    }
)
