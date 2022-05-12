// js实现简单的用户登陆验证功能
var phoneNum = document.getElementById("phoneNum")
var phone = phoneNum.value
var passNum = document.getElementById("passNum")
var password = passNum.value

var loginBtn = document.getElementById("loginBtn")
var cleatBtn = document.getElementById("clearInput")

function loginVale(){
    
    // 首先验证input是否输入了内容
    if(phone == "" || password == ""){
        alert("手机号或者密码不能为空!")
        phone.value = ""
        password.value = ""
    }
    
    
}