
var PlayGroundScene = cc.Scene.extend({
	
	ctor:function () 
	{
        this._super();
		
        var main_layer = new PlayGround();
		
		this.addChild(main_layer);
    },
	
});

var PlayGround = cc.Layer.extend({
    
	_test_node: null,
	
	_sprite_grossini: null,
	
	_sprite_race_horse: null,
	
	_test_ui: null,
	
	_shop_ui: null,
	
    ctor:function () 
	{
        this._super();
		
        this.init();
    },
	
    init:function () 
	{
		// //set name for this instance
		// this.setName("PlayGroundLayer_" + "abc");
		
		// //add welcome label
		// var label_welcome = new cc.LabelTTF("Welcome to GSN !!!", play_ground_scene_res.paint_boy_font, 32);
		// label_welcome.x = WIN_SIZE.width >> 1;
        // label_welcome.y = WIN_SIZE.height - 300;
		// label_welcome.anchorX = 0.5;
        // this.addChild(label_welcome);
		
        // //new sprite from img file
		// var sprite_cow = new cc.Sprite(play_ground_scene_res.cow_png);
		// sprite_cow.x = 300;
		// sprite_cow.y = 300;
		// sprite_cow.anchorX = 0.5;
		// sprite_cow.anchorY = 0.5;
		// sprite_cow.setScale(0.5);
		// //sprite_cow.setRotation(30);
		// this.addChild(sprite_cow);
		
		// var sprite_cow_2 = new cc.Sprite(play_ground_scene_res.cow_png);
		// sprite_cow_2.x = 300;
		// sprite_cow_2.y = 300;
		// sprite_cow_2.anchorX = 0.5;
		// sprite_cow_2.anchorY = 0.5;
		// sprite_cow_2.setScale(0.5);
		// //sprite_cow_2.setRotation(30);
		// sprite_cow.addChild(sprite_cow_2);

		// cc.spriteFrameCache.addSpriteFrames(res.flappy_plist, res.flappy_png);
		// var bg = new cc.Sprite("#background.png.png");
		// this.addChild(bg)
		
		//new sprite from sprite frame info

		cc.spriteFrameCache.addSpriteFrames(res.flappy_plist, res.flappy_png);

		var bg = new cc.Sprite("#background.png");
		bg.x = 0;
		bg.y = 0;
		bg.anchorX = 0;
		bg.anchorY = 0;

		var ground = new cc.Sprite("#ground.png");
		ground.x = 0;
		ground.y = -50;
		ground.anchorX = 0;
		ground.anchorY = 0;
		ground.zIndex = 100;
		this.addChild(bg);
		this.addChild(ground);
		// bottom = ground.y + ground.height;
		// log(bottom);


		// var bird = new cc.Sprite("#bird1.png");
		// bird.x = 100;
		// bird.y = 0.5 * WIN_SIZE.height;
		// bird.anchorX = 0;
		// bird.anchorY = 0;
		// bird.setScale(0.65)
		// this.addChild(bird);

		var bird = new Bird();
		this.addChild(bird);

		var pipe = new Pipe(400, 500);
		log(pipe.width);
		this.addChild(pipe);



		
		//uncomment to test UI node and GUI editor
		/*
		var json_test = ccs.load(play_ground_scene_res.ui_test_scene_json);
		this._test_ui = json_test.node;
		this._test_ui.x = WIN_SIZE.width >> 1;
		this._test_ui.y = WIN_SIZE.height >> 1;
		this._test_ui.anchorX = 0.5;
		this._test_ui.anchorY = 1;
		this._test_ui.setScale(0.5);
		this.addChild(this._test_ui);
		*/
		
		//uncomment to test shop GUI
		/*
		var json_shop = ccs.load(play_ground_scene_res.ui_shop_json);
		this._shop_ui = json_shop.node;
		this._shop_ui.x = WIN_SIZE.width >> 1;
		this._shop_ui.y = WIN_SIZE.height >> 1;
		this._shop_ui.anchorX = 0.5;
		this._shop_ui.anchorY = 1;
		this.addChild(this._shop_ui);
		*/
		
		//uncomment to test event listener
		/*
		var btn_back = ccui.helper.seekWidgetByName(this._shop_ui, "back_Button");
		//btn_back.addClickEventListener(this.onButtonBackClicked.bind(this));
		btn_back.addClickEventListener(this.onButtonBackClickedDontBindThis);
		*/
			
		//uncomment to test event listener series
		/*
		var scrollview_shop = ccui.helper.seekWidgetByName(this._shop_ui, "shop_ScrollView");
		var all_shop_items = scrollview_shop.getChildren();
		for (var i = 0; i < all_shop_items.length; i++) 
		{
			var panel_item_i = all_shop_items[i];
			var btn_buy_i = ccui.helper.seekWidgetByName(panel_item_i, "buy_Button");
			
			//add button property
			btn_buy_i._item_name = panel_item_i.getName();
			
			btn_buy_i.addClickEventListener(this.onButtonBuyShopItemClicked.bind(this));
		}
		
		var scrollview_ranking = ccui.helper.seekWidgetByName(this._shop_ui, "ranking_ScrollView");
		var all_ranking_items = scrollview_ranking.getChildren();
		for (var i = 0; i < all_ranking_items.length; i++) 
		{
			var panel_item_i = all_ranking_items[i];
			var btn_buy_i = ccui.helper.seekWidgetByName(panel_item_i, "buy_Button");
			
			//add button property
			btn_buy_i._item_name = panel_item_i.getName();
			
			btn_buy_i.addClickEventListener(this.onButtonBuyRankingItemClicked.bind(this));
		}
		*/
		
		//uncomment to test frame animation
		/*
		cc.spriteFrameCache.addSpriteFrames(play_ground_scene_res.race_horse_movie_plist, play_ground_scene_res.race_horse_movie_png);
		this._sprite_race_horse = new cc.Sprite("#race_horse_movie_1.png");
		this._sprite_race_horse.x = WIN_SIZE.width >> 1;
		this._sprite_race_horse.y = WIN_SIZE.height >> 1;
		this._sprite_race_horse.anchorX = 0.5;
		this._sprite_race_horse.anchorY = 0.5;
		this.addChild(this._sprite_race_horse);
		
		//load anim info from plist file
		cc.animationCache.addAnimations(play_ground_scene_res.race_horse_movie_anim);
		//get anim by name: "race_horse_movie"
		var race_horse_movie_animation_1 = cc.animationCache.getAnimation("race_horse_movie");
		//set loop forever
		race_horse_movie_animation_1.setLoops(-1);
		//create animate action
		var action_animate_1 = cc.animate(race_horse_movie_animation_1);
		//run action
		this._sprite_race_horse.runAction(action_animate_1);
		*/
		
        //manual animation
		/*
        var race_horse_movie_animation_2 = new cc.Animation();
        for (var i = 1; i <= 15; i++) 
		{
            var frame_name = "race_horse_movie_" + i + ".png";
						
            race_horse_movie_animation_2.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame(frame_name));
        }
        race_horse_movie_animation_2.setDelayPerUnit(0.05);
        race_horse_movie_animation_2.setRestoreOriginalFrame(true);
        race_horse_movie_animation_2.setLoops(-1);

        var action_animate_2 = cc.animate(race_horse_movie_animation_2);
		this._sprite_race_horse.runAction(action_animate_2);
		*/
		
		
		//uncomment to test native object
		/*
		this._test_node = new cc.Node();
		*/
		
		//uncomment to test Scale9Sprite
		/*
		var frame_decor_sprite = new cc.Sprite(play_ground_scene_res.frame_decor_png);
		frame_decor_sprite.setPosition((WIN_SIZE.width >> 1), (WIN_SIZE.height >> 1) - 200);
		frame_decor_sprite.setScale(1.6, 0.794);
		this.addChild(frame_decor_sprite);
		
		var frame_decor_sprite_scale9 = new cc.Scale9Sprite(play_ground_scene_res.frame_decor_png);
		frame_decor_sprite_scale9.setPosition((WIN_SIZE.width >> 1), (WIN_SIZE.height >> 1) - 320);
		frame_decor_sprite_scale9.setContentSize(cc.size(200,100));
		this.addChild(frame_decor_sprite_scale9);
		*/
		
		
		//uncomment to test draw call
		/*
		var cube_w = 115;
		var cube_h = 125;
		var cube_margin_x = (WIN_SIZE.width - (cube_w*4))/5;
		var cube_x = cube_margin_x;
		var cube_y = 0;
		for (var i = 0; i < cube_id_to_name.length*2; i++)
		{
			if (i%4 == 0)
			{
				cube_x = cube_margin_x;
				cube_y += cube_h + 25;
			}
			
			var cube_index = i%cube_id_to_name.length;
			
			var cube_i = new cc.Sprite(cube_id_to_name[cube_index]);
			cube_i.anchorX = 0;
			cube_i.setPosition(cube_x, cube_y);
			
			this.addChild(cube_i);
			
			cube_x += cube_w + cube_margin_x;
		}
		*/
		
		/*
		//load sprite frame from file
		cc.spriteFrameCache.addSpriteFrames(play_ground_scene_res.cube_all_plist, play_ground_scene_res.cube_all_png);
		//create sprite batch node for texture "cube_all_png"
		var sprite_batch = new cc.SpriteBatchNode(play_ground_scene_res.cube_all_png);
		//add sprite batch node to main_layer
		this.addChild(sprite_batch);
		for (var i = 0; i < cube_id_to_frame.length*2; i++)
		{
			if (i%4 == 0)
			{
				cube_x = cube_margin_x;
				cube_y += cube_h + 25;
			}
			
			var cube_index = i%cube_id_to_frame.length;
			
			var cube_i = new cc.Sprite(cc.spriteFrameCache.getSpriteFrame(cube_id_to_frame[cube_index]));
			
			cube_i.anchorX = 0;
			cube_i.setPosition(cube_x, cube_y);
			
			//add cube to sprite batch node
			sprite_batch.addChild(cube_i);
			
			cube_x += cube_w + cube_margin_x;
		}
		*/
		
		//uncomment to test Spine anim
		/*
		var spine_raptor = new sp.SkeletonAnimation(play_ground_scene_res.raptor_spine_json, play_ground_scene_res.raptor_spine_atlas);
		spine_raptor.setPosition(cc.p(WIN_SIZE.width >> 1, (WIN_SIZE.height >> 1) - 300));
        spine_raptor.setAnimation(0, 'walk', true);
        spine_raptor.setScale(0.3);
        this.addChild(spine_raptor);
		*/
		
    },
	
	onEnter: function()
	{
		//WARNING: must call this._super() !!!
		this._super();
		
		cc.log("PlayGround - onEnter()");
		
		//schedule call function update() each frame
		this.scheduleUpdate();
	},

    update:function (dt)
	{
       //cc.log("PlayGround - update()");
	   
	   //uncomment to test native object
	   //this._test_node.update(dt);
	   
    },
	
	onExit: function()
	{
		//WARNING: must call this._super() !!!
		this._super();
		
		cc.log("PlayGround - onExit()");
		
	},
	
	onButtonBackClicked: function (sender)
	{
		cc.log("onButtonBackClicked()");
		
		cc.log("sender = " + sender.getName());
		cc.log("this = " + this.getName());
	},
   
	onButtonBackClickedDontBindThis: function (sender)
	{
		cc.log("onButtonBackClickedDontBindThis()");
		
		cc.log("sender = " + sender.getName());
		cc.log("this = " + this.getName());
	},
	
	onButtonBuyShopItemClicked: function (sender)
	{
		cc.log("onButtonBuyShopItemClicked() - item name = " + sender._item_name);
	},
	
	onButtonBuyRankingItemClicked: function (sender)
	{
		cc.log("onButtonBuyRankingItemClicked() - item name = " + sender._item_name);
	},
});

