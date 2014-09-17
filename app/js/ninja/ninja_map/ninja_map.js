define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        
        function Map()
        {
            state.map = game.add.tilemap('map');
            state.map.addTilesetImage('ninja', 'tiles');

            state.collisionGroups = {};
            var mapCollisionGroup = game.physics.p2.createCollisionGroup();
            var tiles = game.physics.p2.convertCollisionObjects(state.map, 'colision');
            tiles.forEach(function(tile)
            {
                tile.setCollisionGroup(mapCollisionGroup);
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