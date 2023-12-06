window.levels = {
	level_1: function(_world, _ctxBackground, _ctxMain, _ctxForeground, _clavier){
		var mainCharacter = new Character('perso', sprites.perso, _clavier, 2, 29, 56, [-11,11,-15,0], 0, 0);
		_world.addEntity(mainCharacter, _ctxMain);
		_world.follow = mainCharacter;
		_world.addEntity(new Collider('cube_1', sprites.cube, 11, 32, [-11,11,-18,-0], 168, 56), _ctxMain);
		_world.addEntity(new Collider('cube_2', sprites.cube, 11, 32, [-11,11,-18,-0], -18, -48), _ctxMain);
		_world.addEntity(new Collider('cube_3', sprites.cube, 11, 32, [-11,11,-18,-0], -68, 28), _ctxMain);
		_world.addEntity(new Collider('arbre_1', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, 58), _ctxMain);
		_world.addEntity(new Collider('arbre_2', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, 110), _ctxMain);
		_world.addEntity(new Collider('arbre_3', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, -0), _ctxMain);
		_world.addEntity(new Collider('arbre_4', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, -50), _ctxMain);
		_world.addEntity(new Collider('arbre_5', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, 110), _ctxMain);
		_world.addEntity(new Collider('arbre_6', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, -100), _ctxMain);
		_world.addEntity(new Collider('arbre_7', sprites.arbre, 32, 32, [-11,11,-18,-0], -220, -150), _ctxMain);
		_world.addEntity(new Collider('maison_1', sprites.maison, 25, 25, [-11,11,-18,-0], -10, -200), _ctxMain);

		_world.addEntity(new Tile('dalle_1', sprites.dalle, 32, 32, [-32,32,-32,32], -160, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_2', sprites.dalle, 32, 32, [-32,32,-32,32], -160, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_3', sprites.dalle, 32, 32, [-32,32,-32,32], -160, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_4', sprites.dalle, 32, 32, [-32,32,-32,32], -160, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_5', sprites.dalle, 32, 32, [-32,32,-32,32], -160, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_6', sprites.dalle, 32, 32, [-32,32,-32,32], -160, 160), _ctxBackground, -1);
		
		_world.addEntity(new Tile('dalle_7', sprites.dalle, 32, 32, [-32,32,-32,32], -96, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_8', sprites.dalle, 32, 32, [-32,32,-32,32], -96, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_9', sprites.dalle, 32, 32, [-32,32,-32,32], -96, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_10', sprites.dalle, 32, 32, [-32,32,-32,32], -96, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_11', sprites.dalle, 32, 32, [-32,32,-32,32], -96, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_12', sprites.dalle, 32, 32, [-32,32,-32,32], -96, 160), _ctxBackground, -1);

		_world.addEntity(new Tile('dalle_13', sprites.dalle, 32, 32, [-32,32,-32,32], -32, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_14', sprites.dalle, 32, 32, [-32,32,-32,32], -32, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_15', sprites.dalle, 32, 32, [-32,32,-32,32], -32, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_16', sprites.dalle, 32, 32, [-32,32,-32,32], -32, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_17', sprites.dalle, 32, 32, [-32,32,-32,32], -32, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_18', sprites.dalle, 32, 32, [-32,32,-32,32], -32, 160), _ctxBackground, -1);
		
		// _world.addEntity(new Tile('dalle_19', sprites.dalle, 32, 32, [-32,32,-32,32], 32, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_20', sprites.dalle, 32, 32, [-32,32,-32,32], 32, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_21', sprites.dalle, 32, 32, [-32,32,-32,32], 32, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_22', sprites.dalle, 32, 32, [-32,32,-32,32], 32, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_23', sprites.dalle, 32, 32, [-32,32,-32,32], 32, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_24', sprites.dalle, 32, 32, [-32,32,-32,32], 32, 160), _ctxBackground, -1);

		_world.addEntity(new Tile('dalle_25', sprites.dalle, 32, 32, [-32,32,-32,32], 96, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_26', sprites.dalle, 32, 32, [-32,32,-32,32], 96, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_27', sprites.dalle, 32, 32, [-32,32,-32,32], 96, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_28', sprites.dalle, 32, 32, [-32,32,-32,32], 96, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_29', sprites.dalle, 32, 32, [-32,32,-32,32], 96, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_30', sprites.dalle, 32, 32, [-32,32,-32,32], 96, 160), _ctxBackground, -1);
		
		_world.addEntity(new Tile('dalle_31', sprites.dalle, 32, 32, [-32,32,-32,32], 160, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_32', sprites.dalle, 32, 32, [-32,32,-32,32], 160, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_33', sprites.dalle, 32, 32, [-32,32,-32,32], 160, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_34', sprites.dalle, 32, 32, [-32,32,-32,32], 160, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_35', sprites.dalle, 32, 32, [-32,32,-32,32], 160, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_36', sprites.dalle, 32, 32, [-32,32,-32,32], 160, 160), _ctxBackground, -1);

		_world.addEntity(new Tile('dalle_37', sprites.dalle, 32, 32, [-32,32,-32,32], 224, -160), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_38', sprites.dalle, 32, 32, [-32,32,-32,32], 224, -96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_39', sprites.dalle, 32, 32, [-32,32,-32,32], 224, -32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_40', sprites.dalle, 32, 32, [-32,32,-32,32], 224, 32), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_41', sprites.dalle, 32, 32, [-32,32,-32,32], 224, 96), _ctxBackground, -1);
		_world.addEntity(new Tile('dalle_42', sprites.dalle, 32, 32, [-32,32,-32,32], 224, 160), _ctxBackground, -1);
		
	},
	level_2: function(_world, _ctxBackground, _ctxMain, _ctxForeground, _clavier){
		_world.addEntity(new Character('perso', sprites.perso, _clavier, 2, 29, 56, [-11,11,-15,0], 0, 0), _ctxMain);
		_world.addEntity(new Collider('cube_1', sprites.cube, 11, 32, [-11,11,-18,-0], 32, 32), _ctxMain);
		_world.addEntity(new Collider('cube_2', sprites.cube, 11, 32, [-11,11,-18,-0], -32, -32), _ctxMain);

		_world.addEntity(new Entity('dalle_1', sprites.dalle, 32, 32, 32, 32), _ctxBackground, -1);
		_world.addEntity(new Entity('dalle_2', sprites.dalle, 32, 32, 96, 32), _ctxBackground, -1);

	
	},
}