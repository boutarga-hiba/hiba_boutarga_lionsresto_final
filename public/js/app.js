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

let video = document.querySelector("#watchvideo");
console.log(video);

video.addEventListener("click",()=>
{
    // div.innerHTML
    // video.appendChild(div);
    
    //     video.innerHTML=`  <iframe class="frame-vd" width="70%" height="65%" src="https://www.youtube.com/embed/V5w1OGknhlc"
    //     title="YouTube video player" frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen>
    // </iframe>`
    
    let div = document.createElement("div");
    div.setAttribute("class","video");


}
)
// function first()
// {
//     document.getElementById("slideimage").src="./public/img/events-2.jpg"
// }
// function second()
// {
//     document.getElementById("slideimage").src="./public/img/events-3.jpg"
// }
// function third()
// {
//     document.getElementById("slideimage").src="./public/img/events-1.jpg"
// }
// setInterval(first,2000)
// setInterval(second,4000)
// setInterval(third,6000)

// let carusel = document.querySelector(".carusel");
// let isDrag = false,
//   startX,
//   startScrollLeft;

// let slidBtn = document.querySelectorAll(".btnsslid button");


// let firstWidth = document.querySelector(".card").offsetWidth;
// slidBtn.forEach(btn => {
//   btn.addEventListener('click',()=>{
//     carusel.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;

// })
// });

// const dragStart = (e) => {
//   isDrag = true;
//   carusel.classList.add("draging");
//   startX = e.pageX;
//   startScrollLeft = carusel.scrollLeft;
// };
// const draga = (e) => {
//   if (!isDrag) return;
//   carusel.scrollLeft = startScrollLeft - (e.pageX - startX);
// };
// const dragStop = (e) => {
//   isDrag = false;
//   carusel.classList.remove("draging");
// };
// carusel.addEventListener("mouseover", draga);
// carusel.addEventListener("mousedown", dragStart);
// document.addEventListener("mouseup", dragStop);


const openVideo=()=>
{
contenu.classList.add("show");
}

const closeVideo=()=>
{
contenu.classList.remove("show");
}


let watchvideo= document.querySelector("#watchvideo");
let contenu =document.querySelector(".video_f");
let ferme = document.querySelector(".btn-close-vd");
watchvideo.addEventListener("click",openVideo)
ferme.addEventListener("click",closeVideo)



let icone_y = document.querySelector("#btn");
// icone_y.addEventListener("click",openVideo)
icone_y.addEventListener("click",()=>
{
  contenu.classList.add("show");
})



// icone_y.addEventListener("click",()=>
// {
//   contenu.classList.remove("show");
// })


// * recuperer btn connexion 

// let connexion = document.querySelector(".btn_nav");
// console.log(connexion);
// let section = document.querySelector(".section1");
// connexion.addEventListener("click",()=>
// {

//   let div = document.createElement("div");
//   div.setAttribute("class","connecter");

//   let div1= document.createElement("div");
//   div1.setAttribute("class","mini");

//   div1.innerHTML=`<p>ahhahahahha</p>`
//   section.appendChild(div);
//   div.appendChild(div1)
//   console.log("ha");

//   div1.classList.add("connecter")

// })


let up = document.querySelector(".up")
window.onscroll = function () {
    if (this.scrollY >= 500) {
        up.classList.add("show")
    } else {
        up.classList.remove("show")

    }
}
up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})




// carousel1
// * tableau contenir tt les liens des images
// let imagesarray=["./public/img/events-1.jpg",
// "./public/img/events-2.jpg",
// "./public/img/events-3.jpg"];

// dom
// let slider = document.querySelectorAll(".slider");
// let indicateurs = document.querySelector(".slide_indicateurs");

// // * insertion image dynamiquement 

// for (let i = 0; i < slider.length; i++) {
//   let element = slider[i];
//   console.log(i);
// }


let slider = document.querySelector(".slider1");

let slider2 = document.querySelector(".slider2");
let slider3 = document.querySelector(".slider3");


let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click",()=>
{
  slider.style.transform="translateX(0px)";

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");

})


btn2.addEventListener("click",()=>
{
  slider.style.transform="translateX(-31%)";

  // slider.style.display="none";
  // slider2.style.display="flex";
  // slider2.style.width="100%";
  // slider3.style.display="none"
  btn1.classList.remove("active");
  btn3.classList.remove("active");

})


btn3.addEventListener("click",()=>
{
  // slider2.style.display="none";
  // slider3.style.display="flex"
  // slider.style.display="none";
  btn2.classList.remove("active");
  btn1.classList.remove("active");
  slider.style.transform="translateX(-61%)";
})

// * media query 
let x = window.matchMedia("(min-width:760px) and (max-width:1000px)");

function myfunction(x)
{
  if(x.matches){

    
btn1.addEventListener("click",()=>
{
  slider.style.transform="translateX(0px)";

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");

})


btn2.addEventListener("click",()=>
{
  slider.style.transform="translateX(-102%)";

  // slider.style.display="none";
  // slider2.style.display="flex";
  // slider2.style.width="100%";
  // slider3.style.display="none"
  btn1.classList.remove("active");
  btn3.classList.remove("active");

})


btn3.addEventListener("click",()=>
{
  // slider2.style.display="none";
  // slider3.style.display="flex"
  // slider.style.display="none";
  btn2.classList.remove("active");
  btn1.classList.remove("active");
  slider.style.transform="translateX(-202%)";
})

  }
}

myfunction(x);
x.addEventListener(myfunction);


let smartphone = window.matchMedia("(min-width:325px) and (max-width:426px)")

function function_phone(smartphone)
{
  if(smartphone.matches)
  {

btn1.addEventListener("click",()=>
{
  slider.style.transform="translateX(0px)";

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");

})


btn2.addEventListener("click",()=>
{
  slider.style.transform="translateX(-100%)";

  // slider.style.display="none";
  // slider2.style.display="flex";
  // slider2.style.width="100%";
  // slider3.style.display="none"
  btn1.classList.remove("active");
  btn3.classList.remove("active");

})


btn3.addEventListener("click",()=>
{
  // slider2.style.display="none";
  // slider3.style.display="flex"
  // slider.style.display="none";
  btn2.classList.remove("active");
  btn1.classList.remove("active");
  slider.style.transform="translateX(-200%)";
})
  }
}

function_phone(smartphone);
smartphone.addEventListener(function_phone);





