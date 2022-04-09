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