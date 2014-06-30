requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'bower_components',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../js'
    }
});

// Start the main app logic.
requirejs(['phaser/phaser', 'app/index'],
          function   (phaser, index) {
              //jQuery, canvas and the app/sub module are all
              //loaded and can be used here now.
          });