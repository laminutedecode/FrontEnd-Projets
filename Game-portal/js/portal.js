var Portal = Class.extend({
	init: function(_world, _ctx){
		this.world = _world;
		this.ctx = _ctx;
		this.world.portal = this;
		this.portalBlue = null;
		this.portalOrange = null;
		this.animPortal = {
			blue : {
				init : {boucle : [1,2], init : [1,2]},
			},
			orange : {
				init : {boucle : [3,4], init : [3,4]},
			}
		}
	},
	addPortal: function(_color, _x, _y){
		var collision = false;
		var tile = [false, false, false, false];
		var noTile = true;
		var entities = this.world.getEntities();
		var fakePortal = new Collider(_color == 'blue' ? 'portalBlue' : 'portalOrange', sprites.portal, 25, 35, [-15,15,-20,20], _x, _y);
		for(entity in entities){
			if(entities[entity].entity.id!=fakePortal.id){
				if(entities[entity].entity.entityType.collider){
					collision = collision || fakePortal.collide(entities[entity].entity, 0, 0);
				}
				if(entities[entity].entity.entityType.portal){
					collision = collision || fakePortal.collide(entities[entity].entity, 0, 0);
				}
				if(entities[entity].entity.entityType.tile){
					noTile = false;
					tile = entities[entity].entity.tileCollide(fakePortal, 0, 0, tile);
				}
			}
		}
		if(!collision && (noTile||(tile[0]&&tile[1]&&tile[2]&&tile[3]))){

			if(_color == 'blue'){
				if(this.portalBlue){
					this.portalBlue.posX = _x;
					this.portalBlue.posY = _y;
				}
				else{
					this.portalBlue = new Collider('portalBlue', sprites.portal, 25, 35, [-15,15,-20,20], _x, _y);
					this.world.addEntity(this.portalBlue, this.ctx, -1);
					this.portalBlue.setAnimTab(this.animPortal.blue);
					this.portalBlue.entityType.portal = true;
					this.portalBlue.entityType.collider = false;
					var self = this;
					this.portalBlue.action = function(_diftime){
						var portalOrange = self.portalOrange;
						if(portalOrange){
							var entities = this.world.getEntities();
							for(entity in entities){
								if(entities[entity].entity.id!=this.id){
									if(entities[entity].entity.entityType.collider){
										if(entities[entity].entity.portalBlue){
											if(!this.collide(entities[entity].entity)){
												entities[entity].entity.portalBlue=false;
											}
										}
										else{
											if(this.collide(entities[entity].entity)){
												entities[entity].entity.posX = portalOrange.posX;
												entities[entity].entity.posY = portalOrange.posY;
												entities[entity].entity.portalOrange = true;
											}
										}
									}
								}
							}
						}
					}
				}
			}

			else{
				if(this.portalOrange){
					this.portalOrange.posX = _x;
					this.portalOrange.posY = _y;
				}
				else{
					this.portalOrange = new Collider('portalOrange', sprites.portal, 25, 35, [-15,15,-20,20], _x, _y);
					this.world.addEntity(this.portalOrange, this.ctx, -1);
					this.portalOrange.setAnimTab(this.animPortal.orange);
					this.portalOrange.entityType.portal = true;
					this.portalOrange.entityType.collider = false;
					var self = this;
					this.portalOrange.action = function(_diftime){
						var portalBlue = self.portalBlue;
						if(portalBlue){
							var entities = this.world.getEntities();
							for(entity in entities){
								if(entities[entity].entity.id!=this.id){
									if(entities[entity].entity.entityType.collider){
										if(entities[entity].entity.portalOrange){
											if(!this.collide(entities[entity].entity)){
												entities[entity].entity.portalOrange=false;
											}
										}
										else{
											if(this.collide(entities[entity].entity)){
												entities[entity].entity.posX = portalBlue.posX;
												entities[entity].entity.posY = portalBlue.posY;
												entities[entity].entity.portalBlue = true;
											}
										}
									}
								}
							}
						}
					}
				}
			}


		}
	},
})