define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    function controlsFactory(state) 
    {
        var highJump = false;

        function controls(game) {
            //TODO : That's bullshit
            if(state.hasOwnProperty('players'))
            {
                state.players.forEach(function(player)
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

                    player.sword.x = player.x + 10;
                    player.sword.y = player.y - 25;

                });
            }
        }

        return controls;

    }
);
