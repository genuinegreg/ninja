define(function controlsFactory() {

    var highJump = false;

    function controls(player, cursors) {


        // physics tweek

        // update friction if touching left of right
        if (player.body.touching.left || player.body.touching.right) {
            player.body.friction = 0.25;
        }
        else {
            player.body.friction = 0.25;
        }



        // jump on keyup and (touching down or high jump)
        if (player.body.touching.down && 
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
    }

    return controls;

})
