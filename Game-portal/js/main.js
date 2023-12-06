window.onload = function(){
	window.debug = false;

	var canvasBackground = document.getElementById('game-background');
	var ctxBackground = canvasBackground.getContext('2d');
	var canvasMain = document.getElementById('game-main');
	var ctxMain = canvasMain.getContext('2d');
	var canvasForeground = document.getElementById('game-foreground');
	var ctxForeground = canvasForeground.getContext('2d');

	var timeLastFrame = 0;
	var difTime = 0;
	var widthCanvas = 800;
	var heightCanvas = 600;

	/* Inputs Clavier */
	var clavier = new Clavier();
	window.onkeydown = function(event){
		clavier.onkeydown(event);
		return false;
	}
	window.onkeyup = function(event){
		clavier.onkeyup(event);
		return false;
	}

	var world = new World(widthCanvas,heightCanvas);
	var portal = new Portal(world, ctxMain);
	levels.level_1(world, ctxBackground, ctxMain, ctxForeground, clavier);

	function run(){
		difTime = (new Date()).getTime()-timeLastFrame;
		if(difTime>100){
			difTime = 100;
		}
		timeLastFrame = (new Date()).getTime();

		// Clear Canvas
		ctxBackground.clearRect(0,0,widthCanvas,heightCanvas);
		ctxMain.clearRect(0,0,widthCanvas,heightCanvas);
		ctxForeground.clearRect(0,0,widthCanvas,heightCanvas);

		// Boucle
		world.exeAction(difTime/10);
		world.exeDisplay(difTime/10);

		requestAnimFrame(run);
	}

	run();
}

/* Request Animation Frame */
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();