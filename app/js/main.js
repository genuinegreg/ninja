requirejs.config({
    baseUrl: 'js',
    paths: {
        lib: '../bower_components'
    }
});

// Start the main app logic.
requirejs(
    ['lib/phaser/phaser', 
     'ninja/index'],
    function   (phaser, index) {
    });