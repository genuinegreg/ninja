define(function physicsFactory() {

    function physics(game, state) {
        for (var i = 0; i < state.tiles.length; i++) {
            state.player.body.aabb.collideAABBVsTile(state.tiles[i].tile);
        }
    }

    return physics;

})
