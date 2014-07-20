define(function worldCreateFactory() {
    'use strict';

    function worldCreate(game, state) {
        game.stage.backgroundColor = 0x000000;

        game.physics.startSystem(Phaser.Physics.NINJA);


        //  The 'mario' key here is the Loader key given in game.load.tilemap
        state.map = game.add.tilemap('map');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        state.map.addTilesetImage('ninja', 'tiles');

        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        state.maplayer = state.map.createLayer('ninja_layer');

        var slopMap = [];
        for (var i = 1; i<= 34; i++) {
            slopMap[i] = i-1;   
        }
        state.tiles = game.physics.ninja.convertTilemap(state.map, state.layer, slopMap);




        state.player = game.add.sprite(75, 100, 'player');
        game.physics.ninja.enableAABB(state.player);

        state.cursors = game.input.keyboard.createCursorKeys();
    }

    return worldCreate;
    
});