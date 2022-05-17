var Background = cc.Sprite.extend({
    _ground: null,
    ctor:function(){
        this._super("#background.png");
        this._ground = new cc.Sprite("#ground.png");
        this.addChild(this._ground);
        // this.width = WIN_SIZE.width;
        // this.height = WIN_SIZE.height;
        this.x = 0;
        this.y = 0;
        this.anchorX = 0;
        this.anchorY = 0;
        
        this._ground.x = 0;
        this._ground.y = 0;
        this._ground.anchorX = 0;
        this._ground.anchorY = 0;
        this._ground.tag = 100;
    }
});