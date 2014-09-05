requirejs.config({
    baseUrl: 'js',
    paths: {
        lib: '../bower_components',
        vendors: '../vendors'
    }
});

// Start the main app logic.
requirejs(
    ['ninja/index'],
    function   (phaser, index) {
    });