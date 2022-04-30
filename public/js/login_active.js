(!function(){
    // 登录注册按钮之间切换的动画
    function changeBox(){
        let loginbtn = document.getElementById("loginBtn")
        let registbtn = document.getElementById("registBtn")
        let loginBox = document.getElementById("login_input_main")
        let registBox = document.getElementById("regist_input_main")

        loginbtn.onclick = () => {
            loginBox.style.display = "block"
            registBox.style.display = "none"
        }
        registbtn.onclick = () => {
            registBox.style.display = "block"
            loginBox.style.display = "none"
        }

    }

    // 验证登录信息格式
    function check_username(){
        console.log(1);
        //获取用户名
        let username = document.getElementById("username").value
        //校验用户名格式
        var span = dcument.getElementById("username_msg")
        var reg = /^\w{6,12}$/
        if(reg.test(username)){
            span.className = "right"
        }else{
            span.value = "格式不正确，请重新输入"
        }
    }
    function check_phone(){
        console.log(1);
        //获取用户名
        let number = document.getElementById("number").value
        //校验用户名格式
        var span = dcument.getElementById("phone_msg")
        var reg = /^\w{6,12}$/
        if(reg.test(number)){
            span.number = "right"
        }else{
            span.value = "格式不正确，请重新输入"
        }
    }
})

