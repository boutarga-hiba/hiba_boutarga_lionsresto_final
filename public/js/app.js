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


// let cpt =1;

// setInterval(function(){

//     document.getElementById("radio" +cpt).checked=true;
//     cpt++;
//     if(cpt>3)
//     {
//         cpt=1;

//     }
// })
