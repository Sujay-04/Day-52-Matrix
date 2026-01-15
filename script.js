// const para = document.querySelector('p');
// const charachters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"
// const text = para.innerText

// let iteration=0;
// let interval=null; 
// let isRunning=false;

// para.addEventListener('mouseenter',()=>{
//     if (isRunning=false) return;
//     isRunning=true;
//     iteration=0;
    
//     setInterval(interval);
//     setInterval(()=>{
//         const str =text.split('').map((char,idx)=>{
//             if(idx<iteration){
//                 return char;
//             }
//             return charachters.split("")[Math.floor(Math.random()*charachters.length)]
//         }).join("")
//         iteration+= 0.25
//         para.innerText=str;

//          if (iteration >= text.length) {
//       clearInterval(interval);
//       isRunning=false;
//     }
//     },30)
// })


const para = document.querySelector('p');
const para2 = document.querySelector('h1');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;
const text2 = para2.innerText
let iteration = 0;
let interval = null;
let isRunning = false;

para.addEventListener('mouseenter', () => {

  if (isRunning) return;  

  isRunning = true;
  iteration = 0;

  clearInterval(interval); 

  interval = setInterval(() => {

    const str = text.split('').map((char, idx) => {
      if (idx < iteration) {
        return char;
      }
      return characters[Math.floor(Math.random() * characters.length)];
    }).join('');

    para.innerText= str;
    iteration += 0.25;

    if (iteration >= text.length) {
      clearInterval(interval);
      isRunning = false;   
    }

  }, 30);
});

let iteration2 = 0;
let interval2 = null;
let isRunning2 = false;

para2.addEventListener('mouseenter', () => {

  if (isRunning2) return;  

  isRunning2 = true;
  iteration2 = 0;

  clearInterval(interval2); 

  interval2 = setInterval(() => {

    const str2 = text2.split('').map((char2, idx2) => {
      if (idx2 < iteration2) {
        return char2;
      }
      return characters[Math.floor(Math.random() * characters.length)];
    }).join('');

    para2.innerText= str2;
    iteration2 += 0.25;

    if (iteration2 >= text.length) {
      clearInterval(interval2);
      isRunning2 = false;   
    }

  }, 30);
});
