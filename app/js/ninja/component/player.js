define(
    
	[
        'ninja/logic/physics',
        'ninja/logic/controls'
    ],
    function (physics, controls) 
    {
        
        function createPlayer()
        {
            return {};   
        }
        
        
        return 
        {
            createPlayer : createPlayer   
        }
    }
);