define(function assetsLoaderFactory() {
    function assetsLoader(game) {


        game.load.image('ninja', 'assets/ninja-80x115.png');

        game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);

        //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

        game.load.image('tiles', 'assets/ninja-tiles32.png');


        game.load.image('player', 'assets/ninja-white-32x45.png');


    }
    return assetsLoader;
});