const features = document.querySelector(".feats")
const menuFeats = document.querySelector(".menu-feats")
const FeatsarrowDown = document.querySelector(".feats img")

const menucompany = document.querySelector(".menu-cpny")
const cpnyarrowDown = document.querySelector(".cpny img")
const cpny = document.querySelector(".cpny")

let index = true
features.addEventListener("click",()=>{
    if(index){
        menuFeats.style.visibility = "inherit"
        FeatsarrowDown.src = "images/icon-arrow-up.svg"
        index= false
    }
    else{
        closeFeatsMenu()
    }

})

function closeFeatsMenu(){
    menuFeats.style.visibility = "hidden"
    FeatsarrowDown.src = "images/icon-arrow-down.svg"
    index = true

}


cpny.addEventListener("click",()=>{
    if(index){
        menucompany.style.visibility = "inherit"
        cpnyarrowDown.src = "images/icon-arrow-up.svg"
        index=false
    }
    else{
        closeCompanyMenu()

    }

})

function closeCompanyMenu(){
    menucompany.style.visibility = "hidden"
    cpnyarrowDown.src = "images/icon-arrow-down.svg"
    index = true

}

const menu = document.querySelector(".menu")
const hamburger = document.querySelector('header>img')
const closeMenu = document.querySelector(".menu>img")

const container = document.querySelector(".global-container")

hamburger.addEventListener("click",()=>{
    menu.style.display = "block"
    menu.classList.add("animated")
    container.classList.add("opacity")
})

closeMenu.addEventListener("click",()=>{
    menu.style.display = "none"
    container.classList.remove("opacity")
})

const mobile1 = document.querySelector(".features-mobile .feats")

const MenufeatsMobile = document.querySelector(".features-mobile .menu-feats")
const down1 = document.querySelector(".features-mobile .feats img")
const featsrow = document.querySelector("features-mobile .row")
let j = true;
mobile1.addEventListener("click",()=>{
    if(j === true){
        MenufeatsMobile.style.display = "block"
        MenufeatsMobile.style.marginbottom = "30px"
        down1.src = "images/icon-arrow-up.svg"  
       j = false;
    }
    else{
        close1()
    }
})
function close1(){
    MenufeatsMobile.style.display = "none"
    down1.src = "images/icon-arrow-down.svg"
    j = true

}

const cpnyMobile = document.querySelector(".menu .company-mobile .cpny")
const cpnyOpen = document.querySelector(".menu .menu-cpny")
const down2 = document.querySelector(".company-mobile img")
let i = true
cpnyMobile.addEventListener("click",()=>{
   if(i){
    cpnyOpen.style.display = "block"
    down2.src = "images/icon-arrow-up.svg"
    i = false
   }
   else{
    close2()
   }

})


function close2(){
    cpnyOpen.style.display = "none"
    down2.src = "images/icon-arrow-down.svg"
    i = true
}