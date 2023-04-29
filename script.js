let burger = document.querySelector(".burger-bar");
let mobileMenu = document.querySelector(".ul_one");

burger.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
})