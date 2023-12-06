var Character = Collider.extend({
	init : function(_id, _sprite, _clavier, _vitesse, _centerX, _centerY, _collider, _posX, _posY){
		this._super(_id, _sprite, _centerX, _centerY, _collider, _posX, _posY);
		this.clavier = _clavier;
		this.vitesse = _vitesse;
		this.entityType.character = true;
		this.etat = "none";
		this.orient = "down";
		var animTab = {
			init : {boucle : [2] ,init : [2]},
			walk_right : {boucle : [10,11,12] ,init : [11]},
			walk_left : {boucle : [7,8,9] ,init : [8]},
			walk_up : {boucle : [4,5,6] ,init : [5]},
			walk_down : {boucle : [1,2,3] ,init : [2]},
		};
		this.setAnimTab(animTab);
	},
	action: function(_difTime){
		this._super(_difTime);
		var touches = new Array();
		if(this.clavier.touche(37)){
			touches.push({etat : 'walk_left', value : this.clavier.touche(37)});
		}
		if(this.clavier.touche(38)){
			touches.push({etat : 'walk_up', value : this.clavier.touche(38)});
		}
		if(this.clavier.touche(39)){
			touches.push({etat : 'walk_right', value : this.clavier.touche(39)});
		}
		if(this.clavier.touche(40)){
			touches.push({etat : 'walk_down', value : this.clavier.touche(40)});
		}

		if(touches.length){
			touches.sort(function(a,b){
				return (a.value)-(b.value);
			}).reverse();
			this.etat = touches[0].etat;
		}
		else{
			this.etat = "none";
		}

		var self = this;
		function deplacement(_x, _y){
			var collision = false;
			var tile = [false, false, false, false];
			var noTile = true;
			var entities = self.world.getEntities();
			for(entity in entities){
				if(entities[entity].entity.id!=self.id){
					if(entities[entity].entity.entityType.collider){
						collision = collision || self.collide(entities[entity].entity, _x, _y);
					}
					if(entities[entity].entity.entityType.tile){
						noTile = false;
						tile = entities[entity].entity.tileCollide(self, _x, _y, tile);
					}
				}
			}
			if(!collision && (noTile||(tile[0]&&tile[1]&&tile[2]&&tile[3]))){
				self.posX += _x;
				self.posY += _y;
			}
		}

		switch(this.etat){
			case 'walk_left':
				deplacement(parseInt(-_difTime*this.vitesse), 0);
				this.orient = "left";
			break;
			case 'walk_right':
				deplacement(parseInt(_difTime*this.vitesse), 0);
				this.orient = "right";
			break;
			case 'walk_up':
				deplacement(0, parseInt(-_difTime*this.vitesse));
				this.orient = "up";
			break;
			case 'walk_down':
				deplacement(0, parseInt(_difTime*this.vitesse));
				this.orient = "down";
			break;
		}

		// Portal Shoot
		if(this.clavier.touche(87) || this.clavier.touche(88)){ /* W et X */
			var portalX = this.posX;
			var portalY = this.posY;
			switch(this.orient){
				case 'left':
					portalX -= 64;
					break;
				case 'right':
					portalX += 64;
					break;
				case 'up':
					portalY -= 64;
					break;
				case 'down':
					portalY += 64;
					break;
			}
			if(this.world.portal){
				if(this.clavier.touche(87)){
					this.world.portal.addPortal('blue', portalX, portalY);
				}
				else{
					this.world.portal.addPortal('orange', portalX, portalY);
				}
			}
		}
	},
})