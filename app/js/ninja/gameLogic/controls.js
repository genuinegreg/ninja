define(function controlsFactory() {

    var jump = false;
    var leftJump = false;
    var rightJump = false;

    function controls(game, state) {

        var cursors = game.input.keyboard.createCursorKeys();

        var player = state.player;
        var sword = state.sword;


        player.body.friction = 0;

        // global control
        if (cursors.left.isDown && !cursors.right.isDown && !rightJump) {
            player.body.moveLeft(30);
            console.log('move left', rightJump);
        }
        else if (cursors.right.isDown && !cursors.left.isDown && !leftJump) {
            player.body.moveRight(30);
        }

        if (player.body.touching.down) {
            //player on the ground

            jump = false;

            if (cursors.up.justPressed()) {
                jump = true;
            }

            // if no side input
            if (!cursors.left.isDown && !cursors.right.isDown) {
                player.body.setZeroVelocity();
            }
        }
        else if (player.body.touching.left || player.body.touching.right) {

            if (!jump) {
                player.body.friction = 0.3;
            }

            // wall stuff
            if (cursors.up.justPressed()) {
                jump = true;

                leftJump = player.body.touching.right;
                rightJump = player.body.touching.left;

            }
        }
        else {
            // up in the air

            // set jump direction
            if (cursors.left.isDown && !cursors.right.isDown) {
                player.body.moveLeft(30);
            }
            else if (cursors.right.isDown && !cursors.left.isDown) {
                player.body.moveRight(30);
            }
        }


        if (jump && (cursors.up.justPressed(200) || cursors.up.justReleased(100 - cursors.up.duration))) {
            player.body.moveUp(120);
        }
        else {
            jump = false;
        }

        if (leftJump && (cursors.up.justPressed(100) || cursors.up.justReleased(50 - cursors.up.duration))) {
            player.body.moveLeft(100);
        }
        else if (jump && rightJump && (cursors.up.justPressed(100) || cursors.up.justReleased(50 - cursors.up.duration))) {
            player.body.moveRight(100);
            console.log('rightJump', cursors.up.duration);
        }
        else {
            leftJump = false;
            rightJump = false;
        }

//        console.log(rightJump, cursors.up.justPressed(100), cursors.up.justReleased(100 - cursors.up.duration));


//        if (player.body.touching.down) {
//            if (cursors.left.isDown) {
//                player.body.moveLeft(50);
//            }
//            else if (cursors.right.isDown) {
//                player.body.moveRight(50);
//            }
//        }
//        else {
//            if (cursors.left.isDown) {
//                player.body.moveLeft(10);
//            }
//            else if (cursors.right.isDown) {
//                player.body.moveRight(10);
//            }
//        }

        if (game.input.activePointer.isDown) {
            sword.rotation = 0;
            sword.x = player.x + 10;
            sword.y = player.y - 25;
        }
        else {
            sword.rotation = -50;
            sword.x = player.x + 10;
            sword.y = player.y - 25;
        }

//        console.log(player.body.speed);
//        console.log(player.body.facing);


//        console.log(player.body.touching);


    }

    return controls;

})
