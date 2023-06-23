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

let carusel = document.querySelector(".carusel");
let isDrag = false,
  startX,
  startScrollLeft;

let slidBtn = document.querySelectorAll(".btnsslid button");


let firstWidth = document.querySelector(".card").offsetWidth;
slidBtn.forEach(btn => {
  btn.addEventListener('click',()=>{
    carusel.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;

})
});

const dragStart = (e) => {
  isDrag = true;
  carusel.classList.add("draging");
  startX = e.pageX;
  startScrollLeft = carusel.scrollLeft;
};
const draga = (e) => {
  if (!isDrag) return;
  carusel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = (e) => {
  isDrag = false;
  carusel.classList.remove("draging");
};
carusel.addEventListener("mouseover", draga);
carusel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);


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

