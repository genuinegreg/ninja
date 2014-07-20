define(function gameUpdateFactory() {
    function gameUpdate(game, state) {
        
        for (var i = 0; i < state.tiles.length; i++)
        {
            state.player.body.aabb.collideAABBVsTile(state.tiles[i].tile);

        }

        if (state.cursors.left.isDown)
        {
            state.player.body.moveLeft(20);
        }
        else if (state.cursors.right.isDown)
        {
            state.player.body.moveRight(20);
        }

        if (state.cursors.up.isDown)
        {
            state.player.body.moveUp(20);
        }
        else if (state.cursors.down.isDown)
        {
            state.player.body.moveUp(20);
        }
    }
    
    return gameUpdate;
})