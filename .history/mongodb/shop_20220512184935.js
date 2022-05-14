// shop.js保存shopSchema


// 商家表规则

var shopSchema = new Schema({
    shopName : {type : Text,require:true},
    shopAddress : {type:Text,require:true},
    distance : {type:String,require:true},
    minPrice : {type:Number,require:true},

})