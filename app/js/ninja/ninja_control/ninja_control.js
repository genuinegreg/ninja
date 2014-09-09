define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    function controlsFactory(state) 
    {
        var highJump = false;

        function controls(game) {

            var cursors = game.input.keyboard.createCursorKeys();
            
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
                    (cursors.up.isDown)) {

                    player.body.moveUp(400);
                    highJump = !highJump;

                }


                if (player.body.touching.down) {
                    if (cursors.left.isDown) {
                        player.body.moveLeft(50);
                    }
                    else if (cursors.right.isDown) {
                        player.body.moveRight(50);
                    }
                }
                else {
                    if (cursors.left.isDown) {
                        player.body.moveLeft(10);
                    }
                    else if (cursors.right.isDown) {
                        player.body.moveRight(10);
                    }
                }

                /*
                if (game.input.activePointer.isDown)
                {
                    sword.rotation = 0;
                    sword.x = player.x + 10;
                    sword.y = player.y - 25;
                }
                else
                {
                    sword.rotation = -50;
                    sword.x = player.x + 10;
                    sword.y = player.y - 25;
                }
                */
                
            });


        }

        return controls;

    }
);
