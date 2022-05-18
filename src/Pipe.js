var Pipe = cc.Node.extend({
    _top_pipe: null,
    _bottom_pipe: null,
    _top_pipe2: null,
    _bottom_pipe2: null,

    ctor:function(x,y) {
        this._super();
        this._top_pipe = new cc.Sprite("#top_pipe.png");
        this._bottom_pipe = new cc.Sprite("#bottom_pipe.png");
        this._top_pipe2 = new cc.Sprite("#top_pipe.png");
        this._bottom_pipe2 = new cc.Sprite("#bottom_pipe.png");
        this._top_pipe.y = this._bottom_pipe.y + 1050;

        this._top_pipe2.y = this._bottom_pipe.y - 500;
        this._bottom_pipe2.y = this._top_pipe.y + 500;

        this.addChild(this._top_pipe);
        this.addChild(this._bottom_pipe);
        this.addChild(this._top_pipe2);
        this.addChild(this._bottom_pipe2);
        this.setPosition(x, y);

        this.setScale(0.6);
        this.zIndex = 0;

        // this.scheduleUpdate();
    },

    // update:function(dt) {
    //     this.x = this.x - 100*dt;
    // },
    getListBoundingBox: function(){
        var b1 = this._top_pipe.getBoundingBoxToWorld();
        var b2 = this._bottom_pipe.getBoundingBoxToWorld();
        var b3 = this._top_pipe2.getBoundingBoxToWorld();
        var b4 = this._bottom_pipe2.getBoundingBoxToWorld();
        return [b1, b2, b3, b4];
    }

});