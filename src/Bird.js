var Bird = cc.Sprite.extend({
    _speedY: null,
    _g: null,
    _dy: null,
    ctor:function() {
        this._super("#bird1.png");
        this.x = 100;
		this.y = 0.5*WIN_SIZE.height;
		this.anchorX = 0;
		this.anchorY = 0;
		this.setScale(0.65);

        this._speedY = -10;
        this._g = 900;
        this._dy = 100;

        var animFrames = [];
        for(var i = 1; i <= 3; i++){
            var bird = cc.spriteFrameCache.getSpriteFrame("bird" + i + ".png");
            animFrames.push(bird);
        }
        animFrames.push(cc.spriteFrameCache.getSpriteFrame("bird2.png"));

        var animation = new cc.Animation(animFrames, 0.1);
        var animate = cc.animate(animation);
        this.runAction(animate.repeatForever());

        this.schedule(this.updateBird, 0.01);
    },
    
    updateBird:function(dt){
        this._speedY -= this._g*dt;
        var y = this.y + this._speedY*dt;
        if (y + this.height >= WIN_SIZE.height) {
            this.y = WIN_SIZE.height - this.height;
            this._speedY = 0;
        }
        else{
            this.y = y;
        }
    },

    clicked:function(){
        // this.pause()
        // var actionTo = cc.moveBy(0.5, cc.p(0, 100));
        // this._speedY = 10;
        // this.runAction(actionTo);
        // this.y += 100;
        if (this._speedY <= 0){
            this._speedY = 250;
        }
        else{
            this._speedY += 150;
        }
    },

    getBoundingBox:function(){
        return this.getBoundingBoxToWorld();
    }
});