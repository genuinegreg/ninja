define(
    [
        'ninja/ninja_state/ninja_state'
    ],
    
    function physicsFactory(state) {

        var callbacks = [];
        
        function update()
        {
            if(callbacks.length > 0)
            {
                for (i = 0; i < callbacks.length; i++) {
                    //TODO is it ok?
                    callbacks[i].fn.call(null, callbacks[i].args);
                }
            }
        }
        
        function physic(fn, args)
        {
            callbacks.push({fn : fn, args : args});
        }

        return {
            update : update,
            physic : physic
        };

    }
)
