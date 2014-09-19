define(
    
	[
        'ninja/ninja_state/ninja_state'
    ],
    function (state) 
    {
        Phaser.Sprite.prototype.overlap = function(sprite)
        {
            var thisBounds = this.getBounds();
            var otherBounds = sprite.getBounds();

            return Phaser.Rectangle.intersects(thisBounds, otherBounds);
        }
    }  
);