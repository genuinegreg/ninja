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
                if (player.body.touching.left || player.body.touching.right) {
                    player.body.friction = 0.25;
                }
                else {
                    player.body.friction = 0.25;
                }

                if ((player.body.touching.down ||
                    player.body.touching.left || 
                    player.body.touching.right )&& 
                    (player.cursors.up.isDown)) {

                    player.body.moveUp(400);
                    highJump = !highJump;

                }


                if (player.body.touching.down) {
                    if (player.cursors.left.isDown) {
                        player.body.moveLeft(50);
                    }
                    else if (player.cursors.right.isDown) {
                        player.body.moveRight(50);
                    }
                }
                else {
                    if (player.cursors.left.isDown) {
                        player.body.moveLeft(10);
                    }
                    else if (player.cursors.right.isDown) {
                        player.body.moveRight(10);
                    }
                }
                
                player.sword.x = player.x + 10;
                player.sword.y = player.y - 25;
                
            });


        }

        return controls;

    }
);
