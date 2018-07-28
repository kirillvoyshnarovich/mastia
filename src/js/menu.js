//Burger menu//
var body = document.querySelector("body");
var buttonBurgerOpen = document.querySelector(".menu-button-label");
var buttonBurgerClose = document.querySelector(".menu-buttom-close");
var navigationListen = document.querySelector(".header__menu-navigation");
                    
                            
buttonBurgerOpen.addEventListener("click", function() {
    navigationListen.classList.add("header__menu-navigation_visible");
    body.style.left="-200px";
    console.log(this);
    this.classList.add('menu-button-label_hidden');
})

                            
buttonBurgerClose.addEventListener("click", function() {
    body.style.left="0px";
    buttonBurgerOpen.classList.remove('menu-button-label_hidden');
})


buttonBurgerClose.addEventListener("click", function() {
    navigationListen.classList.remove("header__menu-navigation_visible")
})
