
const express = require("express")
const path = require("path")

let app = express()
app.listen(3333)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use.use(express.static(path.join(__dirname,"/static")))

app.post("/login",(req,res) => {
    req.bo
})




