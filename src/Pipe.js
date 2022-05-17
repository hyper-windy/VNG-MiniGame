var Pipe = cc.Node.extend({
    _top_pipe: null,
    _bottom_pipe: null,
    _top_pipe2: null,
    _bottom_pipe2: null,

    ctor:function(x,y) {
        this._super();
        this._top_pipe = new cc.Sprite("#top_pipe.png");
        this._bottom_pipe = new cc.Sprite("#bottom_pipe.png");
        this._top_pipe.y = this._bottom_pipe.y + 1050;
        // this.x = 100;
		// this.y = 0.5 * WIN_SIZE.height;
		// this.anchorX = 0;
		// this.anchorY = 0;
		// this.setScale(0.65);
        this.addChild(this._top_pipe);
        this.addChild(this._bottom_pipe);
        this.x = x;
        this.y = y
        this.setScale(0.6);
        this.zIndex = 0;
    }
    
});