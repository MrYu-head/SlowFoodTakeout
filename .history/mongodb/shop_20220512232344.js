// shop.js保存shopSchema
const express = require("express")
const db = require("../db")
const router = express.Router()
const Schema = mongodb


// 商家表规则
var shopSchema = new Schema({
    shopName : {type : Text,require:true},
    shopAddress : {type:Text,require:true},
    distance : {type:String,require:true},
    minPrice : {type:Number,require:true},

})



var shop = mongoose.model("shop",shopSchema)
module.exports = shop;
