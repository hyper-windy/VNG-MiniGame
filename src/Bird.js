var Bird = cc.Sprite.extend({
    ctor:function() {
        this._super("#bird1.png");
        this.x = 100;
		this.y = 0.5 * WIN_SIZE.height;
		this.anchorX = 0;
		this.anchorY = 0;
		this.setScale(0.65);
    }
});