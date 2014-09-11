define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    function controlsFactory(state) 
    {
        var highJump = false;

        function controls(game) {
            
            state.players.forEach(function(player)
            {
                
                if (player.cursors.up.isDown) {
                    player.body.moveUp(300);
                    highJump = !highJump;
                }


                if (player.cursors.left.isDown) {
                    player.body.moveLeft(200);
                }
                else if (player.cursors.right.isDown) {
                    player.body.moveRight(200);
                }
                
                player.sword.x = player.x + 10;
                player.sword.y = player.y - 25;
                
            });


        }

        return controls;

    }
);
