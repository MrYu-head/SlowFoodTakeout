// menu_action.js为点击商家或者商家菜单时进入商家详细菜单界面的逻辑


var shopBtn = document.getElementById("shop_discribe")
var shopName = document.getElementById("shopName")


// 点击任意一个商家的母div，都会触发点击事件进入详细菜单
shopBtn.onclick = () => {
    window.open(".../views/main_menu/shop_main_menu.html")
    alert(window.location)
}


