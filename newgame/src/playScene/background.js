/**
 * Created by user on 2016/6/19.
 */
var playLayer = cc.Layer.extend({
    sprite:null,
    tile:null,
    removeMan:null,
    removeMagicBullet:null,
    collectman:null,
    obj:null,
    endX:null,
    endY:null,
    switch:false,
    ctor:function () {
   
        this._super();
        var size =cc.winSize;
        this.tile= new cc.TMXTiledMap(res.tileone_tmx);

        this.tile.x=size.width/2-400;
        this.tile.y=size.height/2-400;
        this.obj=this.tile.getObjectGroup("vb");
        this.removeMan=[];
        this.collectman=[];
        this.removeMagicBullet=[];


       this.addChild(this.tile,0);

        this.land();
       this.schedule(this.update,0.5,100,4);
       this.schedule(this.removeSprite,0.5,1000*23,2);
        this.moveAndOrientation();
        return true;
    },

    land:function () {                 //////空地
        var land=  new cc.MenuItemImage(
            res.land_png,
            res.land_png,
            function () {
               this.magicmenu();
            },
        this);
        var menu = new cc.Menu(land);


        var touch= this.tile.getObjectGroup("touch");
        var touch4=touch.getObject("touch4");
        menu.x=touch4["x"];
        menu.y=touch4["y"];
        this.addChild(menu,2);
    },

    magicmenu:function(){


      this.switch=!this.switch;
        var touch= this.tile.getObjectGroup("touch");
        var touch4=touch.getObject("touch4");
        
        var magicmenu= new cc.MenuItemImage(
            res.magic_png,
            res.magic_png,
            function(){
                  this.magichouse();
                 magicmenu.setVisible(false);
            },
            this
        );



          var menu = new cc.Menu(magicmenu);
          menu.x=touch4["x"]+80;
          menu.y=touch4["y"]+80;
          this.addChild(menu,3);
    },

    magichouse:function () {
        var touch =this.tile.getObjectGroup("touch");
        var touch4=touch.getObject("touch4");

        var magichouse = new cc.Sprite(res.magichouse_png);
        this.removeMagicBullet.push(magichouse);
        magichouse.x=touch4["x"];
        magichouse.y=touch4["y"];
        this.addChild(magichouse,2);
        this.schedule(this.magicbullet,0.5,1000*23,2);
    },



    moveAndOrientation:function(){
         cc.spriteFrameCache.addSpriteFrames(res.enemy1_plist,res.enemy1_png);
         var c1EnemyArray=[];
         for(var i=1;i<=6;i++){
             var str ="c"+i+".png";

             var frame=cc.spriteFrameCache.getSpriteFrame(str);
             c1EnemyArray.push(frame);
         }

        var fTime=1.0/15;
       var animation=cc.Animation.create(c1EnemyArray,fTime);
        var animate=cc.Animate.create(animation);

        var enemy1= new cc.Sprite(c1EnemyArray[0]);
        this.collectman.push(enemy1);
        this.removeMan.push( enemy1);




         var enemyObjects=[];
          var x=[];
          var y=[];

         enemyObjects[0]=this.obj.getObject("0");   x[0]=  enemyObjects[0]["x"];    y[0]=  enemyObjects[0]["y"];
         enemyObjects[1]=this.obj.getObject("1");   x[1]=  enemyObjects[1]["x"];    y[1]=  enemyObjects[1]["y"];
         enemyObjects[2]=this.obj.getObject("2");   x[2]=  enemyObjects[2]["x"];    y[2]=  enemyObjects[2]["y"];
         enemyObjects[3]=this.obj.getObject("3");   x[3]=  enemyObjects[3]["x"];    y[3]=  enemyObjects[3]["y"];
         enemyObjects[4]=this.obj.getObject("4");   x[4]=  enemyObjects[4]["x"];    y[4]=  enemyObjects[4]["y"];
         enemyObjects[5]=this.obj.getObject("5");   x[5]=  enemyObjects[5]["x"];    y[5]=  enemyObjects[5]["y"];
         enemyObjects[6]=this.obj.getObject("6");   x[6]=  enemyObjects[6]["x"];    y[6]=  enemyObjects[6]["y"];
         enemyObjects[7]=this.obj.getObject("7");   x[7]=  enemyObjects[7]["x"];    y[7]=  enemyObjects[7]["y"];
         enemyObjects[8]=this.obj.getObject("8");   x[8]=  enemyObjects[8]["x"];    y[8]=  enemyObjects[8]["y"];
         enemyObjects[9]=this.obj.getObject("9");   x[9]=  enemyObjects[9]["x"];    y[9]=  enemyObjects[9]["y"];
         enemyObjects[10]=this.obj.getObject("10"); x[10]=  enemyObjects[10]["x"];  y[10]=  enemyObjects[10]["y"];
         enemyObjects[11]=this.obj.getObject("11"); x[11]=  enemyObjects[11]["x"];  y[11]=  enemyObjects[11]["y"];
         enemyObjects[12]=this.obj.getObject("12"); x[12]=  enemyObjects[12]["x"];  y[12]=  enemyObjects[12]["y"];
         enemyObjects[13]=this.obj.getObject("13"); x[13]=  enemyObjects[13]["x"];  y[13]=  enemyObjects[13]["y"];
         enemyObjects[14]=this.obj.getObject("14"); x[14]=  enemyObjects[14]["x"];  y[14]=  enemyObjects[14]["y"];
         enemyObjects[15]=this.obj.getObject("15"); x[15]=  enemyObjects[15]["x"];  y[15]=  enemyObjects[15]["y"];
         enemyObjects[16]=this.obj.getObject("16"); x[16]=  enemyObjects[16]["x"];  y[16]=  enemyObjects[16]["y"];
         enemyObjects[17]=this.obj.getObject("17"); x[17]=  enemyObjects[17]["x"];  y[17]=  enemyObjects[17]["y"];
        enemyObjects[18]=this.obj.getObject("18"); x[18]=  enemyObjects[18]["x"];  y[18]=  enemyObjects[18]["y"];
        enemyObjects[19]=this.obj.getObject("19"); x[19]=  enemyObjects[19]["x"];  y[19]=  enemyObjects[19]["y"];

        enemy1.x=x[0]; enemy1.y=y[0];
        this.addChild(enemy1,1);
        var movement=[];
        for (var i=0;i<=19;i++) {
            movement[i] = cc.MoveTo.create(0.5, cc.p(x[i], y[i]));

        }

        var sequence =cc.Sequence.create(
            movement[0], movement[1], movement[2], movement[3],  movement[4],  movement[5],
            movement[6], movement[7],  movement[8],  movement[9],  movement[10],  movement[11],
            movement[12],    movement[13],  movement[14],  movement[15], movement[16],  movement[17],
            movement[18],   movement[19] );



        enemy1.runAction(sequence);
        enemy1.runAction(cc.repeatForever(animate));


    },
    update:function(){
        this.moveAndOrientation();
      //  this.removeSprite();
    },

    removeSprite:function(){

        for(var i=0;i< this.removeMan.length;i++){
        

             if(this.removeMan[i].x>815){

                 this.removeMan[i].removeFromParent();
                 this.removeMan[i]=undefined;
                 this.removeMan.splice(i,1);
                 i=i-1;
             }

        }

    },

    deleteMagicBullet:function(){

    },

    magicbullet:function(){
      
         var touch =this.tile.getObjectGroup("touch");
         var magicMapbullet=touch.getObject("magicbullet");
         var touch4=touch.getObject("touch4");
          var magicbullet = new cc.Sprite(res.magicbullet_png);


          magicbullet.x=touch4["x"];
          magicbullet.y=touch4["y"];
          this.addChild(magicbullet);
        magicbullet.runAction(cc.MoveTo.create(0.5,cc.p(this.collectman[0].x+20,this.collectman[0].y-20)));


    }






});

var playScene = cc.Scene.extend({
    layer:null,
    onEnter:function () {
        this._super();
         this.layer = new playLayer();
        this.addChild(this.layer);


    }






});
