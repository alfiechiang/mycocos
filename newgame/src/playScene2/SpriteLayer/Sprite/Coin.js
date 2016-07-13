/**
 * Created by user on 2016/7/10.
 */

var coin= cc.Sprite.extend({
    SpriteLayer:null,
    money:500,
    monlabel:null,

   ctor:function (splayer,positionX,positionY) {
       this._super();
       this.SpriteLayer=splayer;
       this.SpriteLayer.addChild(this);
       this.setCoinLabel(positionX,positionY);
   },

    setCoinLabel:function (positionX,positionY) {
        var icon =new cc.Sprite(res.coin_png);
        icon.x=positionX;
        icon.y=positionY;
        icon.setScale(0.5,0.5);
        this.SpriteLayer.addChild(icon);
        
        var labelmoney= new cc.LabelTTF("x"+this.money,"Arial",36);
        labelmoney.x=positionX+50;
        labelmoney.y=positionY;
        this.SpriteLayer.addChild(labelmoney);
        this.monlabel=labelmoney;







    },
    
    increaseCoin:function (coinNumber) {
        
    },

    
    decreaseCoin:function (coinNumber) {
        
    },
    
    judgeEnoughMoney:function () {
        if(this.money-250>=0){
            this.money=this.money-250;
          this.monlabel.setString("x"+this.money);
            return true ;
        }

        else {

            return false;
        }



        
        
        
    }
    
    
    
    
});



































