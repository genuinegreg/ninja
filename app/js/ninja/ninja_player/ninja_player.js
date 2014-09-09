define(
    
	[
        'ninja/ninja_physic/ninja_physic',
        'ninja/ninja_control/ninja_control'
    ],
    function (physic, control) 
    {
 
        
        function Player()
        {
            // contructeur   
        }
 
        Player.prototype.methode1 = function() {
 
        }
 
 
        Player.prototype.methode2 = function() {
 
        }
        
        
        return 
        {
            createPlayer : function() { return new Player() }
        }
    }
);