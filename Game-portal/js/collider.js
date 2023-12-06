var Collider = Entity.extend({
	init: function(_id, _sprite, _centerX, _centerY, _collider, _posX, _posY){
		this._super(_id, _sprite, _centerX, _centerY, _posX, _posY);
		this.collider = _collider;
		this.entityType.collider = true;
	},
	draw: function(_ctx, _difTime){
		this._super(_ctx, _difTime);
		if(debug){
			var canvasPosX = this.world ? this.world.getCanvasPosX()+this.posX : this.posX;
			var canvasPosY = this.world ? this.world.getCanvasPosY()+this.posY : this.posY;
			_ctx.strokeStyle = "green";
			_ctx.strokeRect(canvasPosX+this.collider[0], canvasPosY+this.collider[2], -this.collider[0]+this.collider[1], -this.collider[2]+this.collider[3]);
		}
	},
	collide: function(_collider, _x, _y){
		var x = typeof _x !== 'undefined' ? this.posX+_x : this.posX;
		var y = typeof _y !== 'undefined' ? this.posY+_y : this.posY;
		if(x+this.collider[0] <= _collider.posX+_collider.collider[1]){
			if(x+this.collider[1] >= _collider.posX+_collider.collider[0]){
				if(y+this.collider[2] <= _collider.posY+_collider.collider[3]){
					if(y+this.collider[3] >= _collider.posY+_collider.collider[2]){
						return true;
					}
					else{
						return false;
					}
				}
				else{
					return false;
				}
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	},
})