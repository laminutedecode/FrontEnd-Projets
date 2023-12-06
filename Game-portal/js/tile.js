var Tile = Collider.extend({
	init: function(_id, _sprite, _centerX, _centerY, _collider, _posX, _posY){
		this._super(_id, _sprite, _centerX, _centerY, _collider, _posX, _posY);
		this.entityType.tile = true;
		this.entityType.collider = false;
	},
	tileCollide: function(_collider, _x, _y, _collision){
		var xS = typeof _x !== 'undefined' ? _collider.posX+_x+_collider.collider[0] : _collider.posX+_collider.collider[0];
		var xI = typeof _x !== 'undefined' ? _collider.posX+_x+_collider.collider[1] : _collider.posX+_collider.collider[1];
		var yS = typeof _y !== 'undefined' ? _collider.posY+_y+_collider.collider[2] : _collider.posY+_collider.collider[2];
		var yI = typeof _y !== 'undefined' ? _collider.posY+_y+_collider.collider[3] : _collider.posY+_collider.collider[3];

		if((xS <= this.posX+this.collider[1])
			&&(xS >= this.posX+this.collider[0])
			&&(yS <= this.posY+this.collider[3])
			&&(yS >= this.posY+this.collider[2])){
				_collision[0]=true;
		}

		if((xI <= this.posX+this.collider[1])
			&&(xI >= this.posX+this.collider[0])
			&&(yS <= this.posY+this.collider[3])
			&&(yS >= this.posY+this.collider[2])){
				_collision[1]=true;
		}

		if((xS <= this.posX+this.collider[1])
			&&(xS >= this.posX+this.collider[0])
			&&(yI <= this.posY+this.collider[3])
			&&(yI >= this.posY+this.collider[2])){
				_collision[2]=true;
		}

		if((xI <= this.posX+this.collider[1])
			&&(xI >= this.posX+this.collider[0])
			&&(yI <= this.posY+this.collider[3])
			&&(yI >= this.posY+this.collider[2])){
				_collision[3]=true;
		}

		return _collision;
	}
})