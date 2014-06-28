var game = new Phaser.Game(1280, 704, Phaser.AUTO, 'ninja-game', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('ninja', 'assets/ninja-80x115.png');

    game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);

    //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

    game.load.image('tiles', 'assets/ninja-tiles32.png');
    
    
    game.load.image('player', 'assets/ninja-white-32x45.png');
}


var map, layer, tiles, player, cursors;
function create() {
    
    game.stage.backgroundColor = 0x000000;
    
    game.physics.startSystem(Phaser.Physics.NINJA);


    //  The 'mario' key here is the Loader key given in game.load.tilemap
    map = game.add.tilemap('map');
    
    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('ninja', 'tiles');

    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    layer = map.createLayer('ninja_layer');
    
    var slopMap = [];
    for (var i = 1; i<= 34; i++) {
        slopMap[i] = i-1;   
    }
    tiles = game.physics.ninja.convertTilemap(map, layer, slopMap);
    
    
    
    
    player = game.add.sprite(75, 100, 'player');
    game.physics.ninja.enableCircle(player, player.width / 2);
    
    cursors = game.input.keyboard.createCursorKeys();
    
    

}

function update() {
    
    for (var i = 0; i < tiles.length; i++)
    {
        player.body.circle.collideCircleVsTile(tiles[i].tile);

    }

    if (cursors.left.isDown)
    {
        player.body.moveLeft(20);
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(20);
    }

    if (cursors.up.isDown)
    {
        player.body.moveUp(20);
    }
    else if (cursors.down.isDown)
    {
        player.body.moveUp(20);
    }
}