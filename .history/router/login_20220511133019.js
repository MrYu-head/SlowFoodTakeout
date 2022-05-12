const express = require("express")
const router = express.Router()

router.get('/login',function(req,res){
    res.sendFile(__dirname + '/' + 'login.html')
})

module.exports = router;