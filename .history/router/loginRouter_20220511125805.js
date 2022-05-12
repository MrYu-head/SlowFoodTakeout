const express = require("express")
const router = express.Router()

router.app.get('/login',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})