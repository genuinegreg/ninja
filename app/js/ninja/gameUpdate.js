define(
	[
        'ninja/logic/physics',
        'ninja/logic/controls'
    ],
    function gameUpdateFactory(physics, controls) 
    {
       function gameUpdate(game, state) 
       {
           physics(game, state);
           controls(game, state);
       }

       return gameUpdate;
	});