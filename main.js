const NavLinkContainer = document.querySelector(".nav_links");
const NavMenu = document.querySelector(".nav_menu");

NavMenu.addEventListener("click",() => {
    NavLinkContainer.classList.toggle("open");
    if(NavMenu.classList.contains("close")){
        NavMenu.classList.remove("close");
        NavMenu.classList.add("open");
    }
    else{
        NavMenu.classList.remove("open");
        NavMenu.classList.add("close");
    }
})