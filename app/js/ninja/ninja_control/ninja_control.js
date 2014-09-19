define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    function controlsFactory(state) 
    {
        var highJump = false;

        function controls(game) {
            //TODO : That's bullshit
            if(state.entities.hasOwnProperty('players'))
            {
                state.entities.players.forEach(function(player)
                {
                    if (player.cursors.up.isDown && player.checkJump()) {
                        player.moveUp(500);
                    }

                    if (player.cursors.left.isDown) {
                        player.moveLeft(300);
                    }
                    else if (player.cursors.right.isDown) {
                        player.moveRight(300);
                    }

                    if (player.cursors.action1.isDown) {
                        player.fire();   
                    }
                });
            }
        }

        return controls;

    }
);
