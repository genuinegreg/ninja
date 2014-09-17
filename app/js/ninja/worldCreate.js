define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function worldCreateFactory(state) {
        'use strict';

        function worldCreate(game) 
        {
            state.game = game;
            
            // This has to be done before any require because we need physic and game for some modules
            game.stage.backgroundColor = 0x000000;
            game.physics.startSystem(Phaser.Physics.P2JS);
            game.physics.p2.updateBoundsCollisionGroup();
            game.physics.p2.setImpactEvents(true);
            game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
            game.stage.disableVisibilityChange = true;
            
            require(['ninja/ninja_world/ninja_world'], function(world)
            {
                var world = world.createWorld();
            });
        }

    return worldCreate;
    
    }
);