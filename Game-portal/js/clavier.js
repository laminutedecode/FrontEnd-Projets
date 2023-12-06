var Clavier = Class.extend({
	init: function(){
		this.touches = new Array();
		for(var x=0; x<=255; x++){
			this.touches[x]=false;
		}
	},
	onkeydown: function(_event){
		this.touches[_event.keyCode]=(new Date()).getTime();
	},
	onkeyup: function(_event){
		this.touches[_event.keyCode]=false;
	},
	touche: function(_num){
		return this.touches[_num];
	}
})