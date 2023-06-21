let ouvre = document.querySelector(".icone");
let menu = document.querySelector(".menu");
let fermer = document.querySelector(".close");

ouvre.addEventListener("click",()=>
{
menu.classList.add("open");
})


fermer.addEventListener("click",()=>
{
    menu.classList.remove("open");
})
