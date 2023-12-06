var Sprite = Class.extend({
	init: function(_url, _nbW, _nbH){
		this.url=_url;
		this.nbW=_nbW;
		this.nbH=_nbH;
		this.img = new Image();
		this.img.src = this.url;
		this.width = this.img.width/this.nbW;
		this.height = this.img.height/this.nbH;
	},
	draw: function(_ctx, _x, _y, _num){
		var sy = Math.ceil(_num/this.nbW);
		var sx = _num-((sy-1)*this.nbW);
		_ctx.drawImage(this.img, (sx-1)*this.width, (sy-1)*this.height, this.width, this.height, _x, _y, this.width, this.height);
	}
})