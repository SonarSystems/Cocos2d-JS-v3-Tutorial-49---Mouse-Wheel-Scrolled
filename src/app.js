
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);

        if (cc.sys.capabilities.hasOwnProperty('mouse'))
        {
        	cc.eventManager.addListener(
        	{
        		event: cc.EventListener.MOUSE,

        		onMouseDown: function(event)
        		{
        			if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
        			{
        				cc.log("Left mmouse button pressed at " + event.getLocationX());
        			}
        		},

        		onMouseUp: function(event)
        		{
        			if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
        			{
        				cc.log("Left mouse button released at " + event.getLocationX());
        			}
        		},

        		onMouseMove: function(event)
        		{
        			cc.log("Mouse Moved: " + event.getLocationX());
        		},

        		onMouseScroll: function(event)
        		{
        			cc.log("Scroll: " + event.getLocationX());
        		}
        	}, this);
        }

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

