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
                    callbacks[i].fn.call(callbacks[i].context, callbacks[i].args);
                }
            }
        }
        
        function physic(fn, context, args)
        {
            callbacks.push({fn : fn, context : context, args : args});
        }

        return {
            update : update,
            physic : physic
        };

    }
)
