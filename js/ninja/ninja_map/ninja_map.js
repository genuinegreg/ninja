define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        
        function Map()
        {
            state.map = state.game.add.tilemap('map');
            state.map.addTilesetImage('ninja', 'tiles');
            
            state.entities.tiles = [];

            var mapCollisionGroup = state.game.physics.p2.createCollisionGroup();
            var tiles = state.game.physics.p2.convertCollisionObjects(state.map, 'colision');
            tiles.forEach(function(tile)
            {
                tile.setCollisionGroup(mapCollisionGroup);
                // TODO This should not be here
                tile.collides([state.collisionGroups.player, state.collisionGroups.bullet]);
                state.entities.tiles.push(tile);
            });
            state.collisionGroups.map = mapCollisionGroup;
            
            
            state.game.physics.p2.restitution = 0;
            state.game.physics.p2.gravity.y = 1000;
        }
        
        return {
            createMap : function(){return new Map();}  
        };
        
    }
);