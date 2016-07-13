/**
 * Created by iii-user on 2016/6/27.
 */

var checkLayer = cc.Layer.extend({
     removeMonster:null,
     magicBulletgroups:null,
    landx:null, landy:null,
    menux:null, menuy:null,
    magichousex:null,magichousey:null,
    magicBullletRangeX:null, magicBullletRangeX2:null,
    magicBullletRangeY:null, magicBullletRangeY2:null,
    magicbulletPositionX:null,magicbulletPositionY:null,
    magicBulletDamage:2,
    playerHeart:3,heartOne:null,heartTwo:null,heartThree:null,
    bb:null,
    animate:null,
    explosionArray:null,
    explosionAnimate:null,
    explosionSprite:null,
    MonsterTwoGroup:null,
    MonsterTag:null,
    times:null,
    monsterTwoExplosion:null,
    tt:1,

    ctor:function () {
        this._super();

        var size =cc.winSize;
        var background=  new cc.Sprite(res.playview_png);
        this.MonsterTag=0;
        background.x=size.width/2;
        background.y=size.height/2;
        this.addChild(background);
         this.bulletAnimation();    //////////////子彈動畫

        this.times=0;


        cc.eventManager.addListener({
            event:cc.EventListener.MOUSE,
            onMouseDown:function(event){

                cc.log(event.getLocationX()+":"+event.getLocationY());
            }



        },this);


           //var board= new loseMenu(this);

          // this.schedule(this.produceEnemy2,4,10,0.1);
           this.bb=[];this.MonsterTwoGroup=[];
           this.de(); this.land1();this.land2();this.land3();this.heartSprite();
      // this.monsterAction();
       this.schedule(this.monsterAction,2,20,2);
        this.schedule(this.produceNextLevelBoard,1,100000*10000,2);
       this.schedule(this.removeMonsterSprite,0.5,100*100000,0.1);
       this.schedule(this.collide,0.5,100*100000,0.1);


        return true ;
    },

    produceEnemy2:function(){
       
        var Monster2= new enemy2(this,this.MonsterTag);
        this.MonsterTwoGroup.push(Monster2);
        this.MonsterTag=this.MonsterTag+1;

    },

    produceNextLevelBoard:function () {
   
        if(this.MonsterTag==11&&this.MonsterTwoGroup[0]==null){

           var board=new cc.MenuItemImage(
              res.Greenarrow_png,
              res.Greenarrow_png,
              function () {
                  cc.director.runScene(new cc.TransitionFade(1.2,new mapScene(1)));
              } ,
               
               this
           );
            var menu=new cc.Menu(board);
            menu.x=891;
            menu.y=104;
            this.addChild(menu);
            
        }


    },




    saveMagicToEnemy2:function () {
        if(this.MonsterTwoGroup[0]!=null) {
            for (var i = 0; i < this.MonsterTwoGroup.length; i++) {
                this.MonsterTwoGroup[i].saveMagicBulletData( this.magicBulletgroups);
            }
        }

    },


     de:function(){
         this.landx=[]; this.landx.push(695);this.landx.push(425);this.landx.push(286);
         this.landy=[]; this.landy.push(329);this.landy.push(336);this.landy.push(465);


         this.menux=[]; this.menux.push(743);this.menux.push(473);this.menux.push(334);
         this.menuy=[]; this.menuy.push(403);this.menuy.push(410);this.menuy.push(539);


         this.magichousex=[];this.magichousex.push(695);this.magichousex.push(425);this.magichousex.push(286);
         this.magichousey=[];this.magichousey.push(329);this.magichousey.push(336);this.magichousey.push(465);


         this. magicBullletRangeX=[];this.magicBullletRangeX.push(595);this.magicBullletRangeX.push(325);this.magicBullletRangeX.push(186);
         this.magicBullletRangeX2=[];this.magicBullletRangeX2.push(795);this.magicBullletRangeX2.push(525);this.magicBullletRangeX2.push(386);

         this.magicBullletRangeY=[]; this.magicBullletRangeY.push(229);this.magicBullletRangeY.push(236);this.magicBullletRangeY.push(365);
         this.magicBullletRangeY2=[]; this.magicBullletRangeY2.push(429);this.magicBullletRangeY2.push(436);this.magicBullletRangeY2.push(565);

         this.magicbulletPositionX=[];  this.magicbulletPositionX.push(723);this.magicbulletPositionX.push(453);this.magicbulletPositionX.push(314);


         this.magicbulletPositionY=[];  this.magicbulletPositionY.push(361);this.magicbulletPositionY.push(368);this.magicbulletPositionY.push(497);


         this.magicBulletgroups=[];
         this.removeMonster=[];
     },

     heartSprite:function(){

         this.heartOne= new cc.Sprite(res.heart_png);
         this.heartOne.x=22;this.heartOne.y=619;this.addChild( this.heartOne);

         this.heartTwo= new cc.Sprite(res.heart_png);
         this.heartTwo.x=56;this.heartTwo.y=619;this.addChild( this.heartTwo);

         this.heartThree= new cc.Sprite(res.heart_png);
         this.heartThree.x=90;this.heartThree.y=619;this.addChild( this.heartThree);

     },


    Times:function () {
        this.times=this.times+1;
        if(this.times==21){
            this.schedule(this.produceEnemy2,4,10,0.1);
        }
    },


    monsterAction:function () {
         this.Times();
        cc.spriteFrameCache.addSpriteFrames(res.enemy1_plist,res.enemy1_png);
        var c1EnemyArray=[];
        for(var i=1;i<=6;i++){
            var str ="c"+i+".png";

            var frame=cc.spriteFrameCache.getSpriteFrame(str);
            c1EnemyArray.push(frame);
        }

        var fTime=1.0/15;
        var animation=cc.Animation.create(c1EnemyArray,fTime);
        var animate=cc.animate(animation);

        var enemy= new enemy1(c1EnemyArray[0]);
        this.removeMonster.push(enemy);
        //this.collectman.push(enemy1);
        //this.removeMan.push( enemy1);

        var x=[]; x[0]=447;x[1]=374;x[2]=222;x[3]=183;x[4]=236;x[5]=718;x[6]=786;x[7]=708;x[8]=624;x[9]=637;x[10]=1000;
        var y=[]; y[0]=591;y[1]=530;y[2]=527;y[3]=456;y[4]=401;y[5]=397;y[6]=320;y[7]=232;y[8]=197;y[9]=132;y[10]=99;

        enemy.x=x[0]; enemy.y=y[0];


        this.addChild(enemy,1);
        var movement=[];
        for (var i=1;i<=10;i++) {


                movement[i] = cc.MoveTo.create(1, cc.p(x[i], y[i]));


        }
        movement[5] = cc.moveTo(4, cc.p(x[5], y[5]));
        movement[10] = cc.moveTo(4, cc.p(x[10], y[10]));
        var sequence =cc.sequence(
             movement[1], movement[2], movement[3],  movement[4],  movement[5],
            movement[6], movement[7],  movement[8],  movement[9],  movement[10] );



        enemy.runAction(sequence);
        enemy.runAction(cc.repeatForever(animate));


    },

    removeMonsterSprite:function(){

        for(var i=0;i< this.removeMonster.length;i++){

               if(this.removeMonster[i]!=null) {
                   if (this.removeMonster[i].x > 950) {

                       this.removeMonster[i].removeFromParent();
                       this.removeMonster[i] = undefined;
                       this.removeMonster.splice(i, 1);
                       this.disappearHeart();

                   }
               }
        }

    },

    disappearHeart:function () {
        if(this.playerHeart==3){
            this.heartThree.setVisible(false);
            this.playerHeart=this.playerHeart-1;
        }

        else if(this.playerHeart==2){
            this.heartTwo.setVisible(false);
            this.playerHeart=this.playerHeart-1;
        }

       else if(this.playerHeart==1){
            this.heartOne.setVisible(false);
            this.playerHeart=this.playerHeart-1;
        }
    },


    land1:function () {                 //////空地
        var land1=0;

        var land=  new cc.MenuItemImage(
            res.land_png,
            res.land_png,
            function () {
                    this.magicmenu(land1);

            },
            this);
        var menu = new cc.Menu(land);
        
        menu.x=this.landx[land1];
        menu.y=this.landy[land1];
        this.addChild(menu,2);


    },
    land2:function () {                 //////空地
        var land2=1;

        var land=  new cc.MenuItemImage(
            res.land_png,
            res.land_png,
            function () {
                this.magicmenu( land2);

            },
            this);
        var menu = new cc.Menu(land);

        menu.x=this.landx[land2];
        menu.y=this.landy[land2];
        this.addChild(menu,2);

    },

    land3:function () {                 //////空地
        var land3=2;

        var land=  new cc.MenuItemImage(
            res.land_png,
            res.land_png,
            function () {
                this.magicmenu(land3);

            },
            this);
        var menu = new cc.Menu(land);

        menu.x=this.landx[land3];
        menu.y=this.landy[land3];
        this.addChild(menu,2);

    },


    magicmenu:function(tag){

       var label=tag;


        var magicmenu= new cc.MenuItemImage(
            res.magic_png,
            res.magic_png,
            function(){
                this.magichouse(label);
                magicmenu.setVisible(false);
            },
            this
        );



        var menu = new cc.Menu(magicmenu);
        menu.x=this.menux[label];
        menu.y=this.menuy[label];
        this.addChild(menu,3);

    },

    magichouse:function (label) {
        var tag=label;

        var magichouse = new cc.Sprite(res.magichouse_png);

        magichouse.x=this.magichousex[tag];
        magichouse.y=this.magichousey[tag];

        this.addChild(magichouse,2);
        this.schedule(function nothing() {
            this. magicbullet(tag);
        },1,1000*23,2);
    },

    magicbullet:function(tag){
          var label=tag;
         this.magicbullet2(tag);
        if(this.removeMonster[0]!=null) {



            for(var i=0;i<this.removeMonster.length;i++) {

                     if (
                         this.removeMonster[i].x > this.magicBullletRangeX[label] && this.removeMonster[i].x < this.magicBullletRangeX2[label]
                         && this.removeMonster[i].y > this.magicBullletRangeY[label] && this.removeMonster[i].y < this.magicBullletRangeY2[label]
                     ) {

                         var magicbullet = new cc.Sprite(this.bb[0]);
                         this.magicBulletgroups.push(magicbullet);
                         magicbullet.x = this.magicbulletPositionX[label];
                         magicbullet.y = this.magicbulletPositionY[label];
                         this.addChild(magicbullet);

                        magicbullet.runAction(this.animate.repeatForever());
                         magicbullet.runAction(cc.MoveTo.create(0.1, this.removeMonster[i].x, this.removeMonster[i].y));
                         cc.audioEngine.playMusic(res.archmage_explosion_mp3);
                         break;/////抓地一個攻擊
                     }

            }


        }

    },
            ////////////////////偵查以下這一塊
    magicbullet2:function(tag){
        var label=tag;
        if(this.MonsterTwoGroup[0]!=null) {



            for(var i=0;i<this.MonsterTwoGroup.length;i++) {

                if (
                    this.MonsterTwoGroup[i].x > this.magicBullletRangeX[label] && this.MonsterTwoGroup[i].x < this.magicBullletRangeX2[label]
                    && this.MonsterTwoGroup[i].y > this.magicBullletRangeY[label] && this.MonsterTwoGroup[i].y < this.magicBullletRangeY2[label]
                ) {

                    var magicbullet = new cc.Sprite(this.bb[0]);
                    this.magicBulletgroups.push(magicbullet);
                    this.saveMagicToEnemy2();
                    magicbullet.x = this.magicbulletPositionX[label];
                    magicbullet.y = this.magicbulletPositionY[label];
                    this.addChild(magicbullet);
                    cc.audioEngine.playMusic(res.archmage_explosion_mp3);
                    magicbullet.runAction(this.animate.repeatForever());
                    magicbullet.runAction(cc.MoveTo.create(0.1, this.MonsterTwoGroup[i].x, this.MonsterTwoGroup[i].y));

                    break;/////抓地一個攻擊
                }

            }


        }
    },

    bulletAnimation:function(){
        cc.spriteFrameCache.addSpriteFrames(res.ert_plist,res.ert_png);

         this.bb = [];
        for (var i = 1; i < 6; i++) {
            var str = "DarterEffectTeleport_" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            this.bb.push(frame);
        }
        var fTime = 1.0 / 15;
        var animation = cc.Animation.create(this.bb, fTime);
         this.animate = cc.animate(animation);
    },



    collide:function(){

      if(this.removeMonster[0]!=null){
          if(this.magicBulletgroups[0]!=null){
              this.compare()
      }
      }


    },

  compare:function(){

    for(var i=0;i<this.removeMonster.length;i++){

          var enemy=this.removeMonster[i];
           var eBox=enemy.getBoundingBox();
        for(j in this.magicBulletgroups){//遍历所有子弹

            var bullet=this.magicBulletgroups[j];
            var bBox=bullet.getBoundingBox();//子弹碰撞框
            if(cc.rectIntersectsRect(bBox,eBox)) {//判断子弹与敌人是否发生碰撞


                this.magicBulletgroups.splice(j, 1);//从子弹数组中删除子弹
                this.removeChild(bullet, true);//移除子弹
                this.removeMonster[i].blood = this.removeMonster[i].blood - this.magicBulletDamage;
                if (this.removeMonster[i].blood < 2) {
                var x= this.removeMonster[i].x;
                 var y=this.removeMonster[i].y;

                this.removeMonster[i].removeFromParent();
                this.removeMonster[i] = undefined;
                this.removeMonster.splice(i, 1);
                   i = i - 1;
                   cc.audioEngine.playEffect(res.explosion_mp3);
                   this.exAnimation(x,y);
                }



            }
        }

    }


  },

    exAnimation:function (ox,oy) {
          var x=ox;
         var y=oy;

          cc.spriteFrameCache.addSpriteFrames(res.ee_plist,res.ee_png);
           this.explosionArray=[];
          for(var i=1;i<13;i++){
              var str="e_"+i+".png";
              var frame=cc.spriteFrameCache.getSpriteFrame(str);
              this.explosionArray.push(frame);
          }


          var fTime=1.0/15;
         var animation= cc.Animation.create(this.explosionArray,fTime);
         this.explosionAnimate=cc.animate(animation);
       this.explosionSprite =new cc.Sprite(this.explosionArray[0]);////////成功了
        var size =cc.winSize;
        this.explosionSprite.x=x;
        this.explosionSprite.y=y+80;


        this.addChild(this.explosionSprite);

        var callback=cc.callFunc(this.exAnimationCallback,this);
        var sequence=cc.sequence(this.explosionAnimate,callback);
        this.explosionSprite.runAction(sequence);



    },

    exAnimationCallback:function(){

        this.removeChild(this.explosionSprite,true);
    },






    removeMonsterTwo:function (enemy,tag) {
              var Monster =enemy;
              var tag=tag;
              var x=Monster.x;
              var y=Monster.y;
              Monster.removeFromParent();
              Monster=undefined;
        this.MonsterTwoGroup.splice(0, 1);
        this.monsterTwoExplosionAnimate(x,y);

    },

    monsterTwoExplosionAnimate:function (x,y) {
    
        var x=x;
        var y=y;

        this.monsterTwoExplosion = new cc.Sprite(this.explosionArray[0]);
        var size=cc.winSize;
        this.monsterTwoExplosion.x=x;
        this.monsterTwoExplosion.y=y+80;
        this.addChild(this.monsterTwoExplosion );
        var callback=cc.callFunc(this.removemonsterTwoExplosionAnimate,this);
        var sequence=cc.sequence(this.explosionAnimate,callback);
        this.monsterTwoExplosion.runAction(sequence);
        cc.audioEngine.playEffect(res.explosion_mp3);
    },
    removemonsterTwoExplosionAnimate:function(){
        this.removeChild( this.monsterTwoExplosion,true);
    }


});


var checkScene =cc.Scene.extend({


  onEnter:function () {
   this._super();
     var layer = new checkLayer();
      this.addChild(layer);
  }




});


