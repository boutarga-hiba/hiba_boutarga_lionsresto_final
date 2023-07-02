//& section9
let slide= document.querySelector(".slide");
let botona1 = document.querySelector("#botona1");
let botona2 = document.querySelector("#botona2");
let botona3 = document.querySelector("#botona3");
let btn4= document.querySelector("#btn4");
let btn5= document.querySelector("#btn5");
let btn6= document.querySelector("#btn6");
let btn7= document.querySelector("#btn7");
let btn8=document.querySelector("#btn8");
console.log(slide);

let img = slide.querySelectorAll("img");
console.log(img);



botona1.addEventListener("click",()=>
{
    let cpt = 0;
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
  img[2].style.border="3px solid red";
  img[2].style.transform="scale(1.2)";
  slide.style.transform="translateX(80%)";

})

botona2.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }

    img[3].style.border="3px solid red";
    img[3].style.transform="scale(1.2)";
    slide.style.transform="translateX(58%)";
})

botona3.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
    img[4].style.border="3px solid red";
    img[4].style.transform="scale(1.2)";
    slide.style.transform="translateX(35%)";
  
})

btn4.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
    img[5].style.border="3px solid red";
    img[5].style.transform="scale(1.2)";
    slide.style.transform="translateX(12%)";
})

btn5.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
    img[6].style.border="3px solid red";
    img[6].style.transform="scale(1.2)";
    slide.style.transform="translateX(-12%)";
})

btn6.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
    img[7].style.border="3px solid red";
    img[7].style.transform="scale(1.2)";
    slide.style.transform="translateX(-36%)";
})

btn7.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
    img[8].style.border="3px solid red";
    img[8].style.transform="scale(1.2)";
    slide.style.transform="translateX(-59%)";
})

btn8.addEventListener("click",()=>
{
    for (let i = 0; i < 12; i++) {
        let element = img[i];
        element.style="none"
    }
    img[9].style.border="3px solid red";
    img[9].style.transform="scale(1.2)";
    slide.style.transform="translateX(-84%)";
});





// *media mobile




    if(window.matchMedia("(min-width:375px) and (max-width:426px)").matches)
    {
        botona1.addEventListener("click",()=>
        {
            let cpt = 0;
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
          img[2].style.border="3px solid red";
          img[2].style.transform="scale(1.2)";
          slide.style.transform="translateX(235%)";
          console.log("ha");
        })
        
        botona2.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
        
            img[3].style.border="3px solid red";
            img[3].style.transform="scale(1.2)";
            slide.style.transform="translateX(168%)";
        })
        
        botona3.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[4].style.border="3px solid red";
            img[4].style.transform="scale(1.2)";
            slide.style.transform="translateX(100%)";
          
        })
        
        btn4.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[5].style.border="3px solid red";
            img[5].style.transform="scale(1.2)";
            slide.style.transform="translateX(33%)";
        })
        
        btn5.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[6].style.border="3px solid red";
            img[6].style.transform="scale(1.2)";
            slide.style.transform="translateX(-33%)";
        })
        
        btn6.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[7].style.border="3px solid red";
            img[7].style.transform="scale(1.2)";
            slide.style.transform="translateX(-101%)";
        })
        
        btn7.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[8].style.border="3px solid red";
            img[8].style.transform="scale(1.2)";
            slide.style.transform="translateX(-168%)";
        })
        
        btn8.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[9].style.border="3px solid red";
            img[9].style.transform="scale(1.2)";
            slide.style.transform="translateX(-236%)";
        })
          
    }

// let mobile = window.matchMedia("(min-width:375px) and (max-width:426px)")

// mobile_2(mobile);
// mobile.addEventListener(mobile_2);


// // *mobile L
// let mobileL=window.matchMedia("(min-width:400px) and (max-width:475px)")

// function mobilel (mobileL)
// {
//     if(mobileL.matches)
//     {
//         botona1.addEventListener("click",()=>
//         {
//             let cpt = 0;
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//           img[2].style.border="3px solid red";
//           img[2].style.transform="scale(1.2)";
//           slide.style.transform="translateX(358%)";
//           console.log("ha");
//         })
        
//         botona2.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
        
//             img[3].style.border="3px solid red";
//             img[3].style.transform="scale(1.2)";
//             slide.style.transform="translateX(192%)";
//         })
        
//         botona3.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//             img[4].style.border="3px solid red";
//             img[4].style.transform="scale(1.2)";
//             slide.style.transform="translateX(115%)";
          
//         })
        
//         btn4.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//             img[5].style.border="3px solid red";
//             img[5].style.transform="scale(1.2)";
//             slide.style.transform="translateX(38%)";
//         })
        
//         btn5.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//             img[6].style.border="3px solid red";
//             img[6].style.transform="scale(1.2)";
//             slide.style.transform="translateX(-39%)";
//         })
        
//         btn6.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//             img[7].style.border="3px solid red";
//             img[7].style.transform="scale(1.2)";
//             slide.style.transform="translateX(-115%)";
//         })
        
//         btn7.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//             img[8].style.border="3px solid red";
//             img[8].style.transform="scale(1.2)";
//             slide.style.transform="translateX(-192%)";
//         })
        
//         btn8.addEventListener("click",()=>
//         {
//             for (let i = 0; i < 12; i++) {
//                 let element = img[i];
//                 element.style="none"
//             }
//             img[9].style.border="3px solid red";
//             img[9].style.transform="scale(1.2)";
//             slide.style.transform="translateX(-270%)";
//         })
//     }
// }
// mobilel(mobileL);
// mobileL.addEventListener(mobilel);





//* media query tablette 


    if(window.matchMedia("(min-width:766px) and (max-width:790px)").matches)
    {
        botona1.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
          img[2].style.border="3px solid red";
          img[2].style.transform="scale(1.2)";
          slide.style.transform="translateX(119%)";
            console.log("ja");
        })
        
        botona2.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
        
            img[3].style.border="3px solid red";
            img[3].style.transform="scale(1.2)";
            slide.style.transform="translateX(85%)";
        })
        
        botona3.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[4].style.border="3px solid red";
            img[4].style.transform="scale(1.2)";
            slide.style.transform="translateX(51%)";
          
        })
        
        btn4.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[5].style.border="3px solid red";
            img[5].style.transform="scale(1.2)";
            slide.style.transform="translateX(17%)";
        })
        
        btn5.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[6].style.border="3px solid red";
            img[6].style.transform="scale(1.2)";
            slide.style.transform="translateX(-16%)";
        })
        
        btn6.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[7].style.border="3px solid red";
            img[7].style.transform="scale(1.2)";
            slide.style.transform="translateX(-51%)";
        })
        
        btn7.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[8].style.border="3px solid red";
            img[8].style.transform="scale(1.2)";
            slide.style.transform="translateX(-85%)";
        })
        
        btn8.addEventListener("click",()=>
        {
            for (let i = 0; i < 12; i++) {
                let element = img[i];
                element.style="none"
            }
            img[9].style.border="3px solid red";
            img[9].style.transform="scale(1.2)";
            slide.style.transform="translateX(-120%)";
        })
          
    }

// let tablette = window.matchMedia("(min-width:766px) and (max-width:790px)");

// tabletta(tablette);
// tablette.addEventListener(tabletta);