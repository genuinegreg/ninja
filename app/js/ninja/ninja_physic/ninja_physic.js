define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function physicsFactory(state) {

        function physics(game) {
            for (var i = 0; i < state.tiles.length; i++) {
                state.player.body.aabb.collideAABBVsTile(state.tiles[i].tile);
            }
        }

        return physics;

    }
)
