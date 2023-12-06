var World = Class.extend({
	init: function(_sizeX, _sizeY){
		this.sizeX = _sizeX;
		this.sizeY = _sizeY;
		this.entities = new Array();
		this.posX = 0;
		this.posY = 0;
		this.follow = null;
		this.portal = null;
	},
	getCanvasPosX: function(){
		return (this.sizeX/2)-this.posX;
	},
	getCanvasPosY: function(){
		return (this.sizeY/2)-this.posY;
	},
	addEntity: function(_entity, _ctx, _layer){
		_layer = typeof _layer !== 'undefined' ? _layer : 0;
		this.entities.push({entity : _entity ,ctx : _ctx ,layer : _layer});
		_entity.setWorld(this);
	},
	getEntities: function(){
		return this.entities;
	},
	getEntity: function(_id){
		var value = null;
		for(entity in this.entities){
			if(this.entities[entity].id==_id){
				value = this.entities[entity].entity;
			}
		}
		return value;
	},
	exeAction: function(_difTime){
		for(entity in this.entities){
			this.entities[entity].entity.exeAction(_difTime);
		}
		// sort sprite
		this.entities.sort(function(a,b){
			if(a.layer!=b.layer){
				return (a.layer)-(b.layer);
			}
			return (a.entity.posY)-(b.entity.posY);
		})
	},
	exeDisplay: function(_difTime){
		if(this.follow){
			this.posX = this.follow.posX;
			this.posY = this.follow.posY;
		}
		for(entity in this.entities){
			this.entities[entity].entity.draw(this.entities[entity].ctx, _difTime);
		}
	}
})