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
                if (player.cursors.up.isDown && player.checkJump()) {
                    player.moveUp(300);
                }

                if (player.cursors.left.isDown) {
                    player.moveLeft(200);
                }
                else if (player.cursors.right.isDown) {
                    player.moveRight(200);
                }
                
                if (player.cursors.fire.isDown) {
                    player.fire();   
                }
                
                player.sword.x = player.x + 10;
                player.sword.y = player.y - 25;
                
            });


        }

        return controls;

    }
);
