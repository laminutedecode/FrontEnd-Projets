var Entity = Class.extend({
	init: function(_id, _sprite, _centerX, _centerY, _posX, _posY){
		this.id = _id;
		this.sprite = _sprite;
		this.centerX = typeof _centerX !== 'undefined' ? _centerX : 0;
		this.centerY = typeof _centerY !== 'undefined' ? _centerY : 0;
		this.posX = typeof _posX !== 'undefined' ? _posX : 0;
		this.posY = typeof _posY !== 'undefined' ? _posY : 0;
		this.world = null;
		this.entityType = new Array();
		this.entityType.entity = true;
		this.animTab = null;
		this.anim = null;
		this.animFrame = null;
		this.numSprite = 1;
		this.etat = "none";
	},
	setWorld: function(_world){
		this.world = _world;
	},
	action: function(_difTime){

	},
	exeAction: function(_difTime){
		this.action(_difTime);
	},
	setAnimTab: function(_animTab){
		this.animTab = _animTab;
		this.anim = this.animTab['init'];
	},
	setAnim: function(_anim){
		this.anim = this.animTab[_anim];
	},
	exeAnim: function(_difTime){
		var boucle;
		if(this.etat=="none"){
			boucle = this.anim.init;
		}
		else{
			this.anim = this.animTab[this.etat];
			boucle = this.anim.boucle;
		}

		this.animFrame += _difTime/24;

		if(boucle.length==1){
			this.numSprite = boucle[0];
		}
		else{
			if(this.animFrame>=boucle.length){
				this.animFrame = 0;
			}
			this.numSprite = boucle[parseInt(this.animFrame)];
		}
	},
	draw: function(_ctx, _difTime){
		if(this.anim){
			this.exeAnim(_difTime);
		}
		var canvasPosX = this.world ? this.world.getCanvasPosX()+this.posX : this.posX;
		var canvasPosY = this.world ? this.world.getCanvasPosY()+this.posY : this.posY;
		this.sprite.draw(_ctx, canvasPosX-this.centerX, canvasPosY-this.centerY, this.numSprite);
		if(debug){
			_ctx.fillStyle = "red";
			_ctx.fillRect(canvasPosX-1, canvasPosY-1, 2, 2);
		}
	}
})