const express = require("express")
const router = express.Router()

app.get('/login',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})

