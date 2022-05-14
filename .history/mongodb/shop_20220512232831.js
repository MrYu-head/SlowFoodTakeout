// shop.js保存shopSchema
const { call } = require("body-parser")
const express = require("express")
const { MongoClient } = require("mongodb")
const db = require("../db")
const router = express.Router()
const Schema = MongoClient.Schema


// 商家表规则
var shopSchema = new Schema({
    shopName : {type : Text,require:true},
    shopAddress : {type:Text,require:true},
    distance : {type:String,require:true},
    minPrice : {type:Number,require:true},
    timeout : {type:Number,require:true}
})



var shop = MongoClient.model("shop",shopSchema)

const shopDao = function(){}
shopDao.prototype.save = fucntion(obj,callback){
    var instance = new shop(obj)
    instance.save(function(err){
        callback()
    })
}

module.exports = shop;
