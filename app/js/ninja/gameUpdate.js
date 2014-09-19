define(
	[
        'ninja/ninja_physic/ninja_physic',
        'ninja/ninja_control/ninja_control',
        'ninja/ninja_state/ninja_state',
    ],
    function gameUpdateFactory(physic, control, state) 
    {
       function gameUpdate(game, state) 
       {
           physic.update(game, state);
           control(game, state);
       }

       return gameUpdate;
	});