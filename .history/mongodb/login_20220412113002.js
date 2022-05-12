// login.js为登陆验证

const express = require("express")
const app = express()
const mongoose = require("mongoose");
require("./connect.js");
require("./modle.js");

// User为model的name
const User = mongoose.model("user")
// 由于mongoose的默认promise
mongoose.Promise = global.Promise
