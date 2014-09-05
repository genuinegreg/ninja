define(
	[
		'ninja/gameLogic/physics',
        'ninja/gameLogic/controls'
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