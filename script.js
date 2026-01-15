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
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

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

    para.innerText = str;
    iteration += 0.25;

    if (iteration >= text.length) {
      clearInterval(interval);
      isRunning = false;   
    }

  }, 30);
});

