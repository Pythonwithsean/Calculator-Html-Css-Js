const button = document.querySelectorAll(".grid_container > button");
const calcScreen = document.querySelector(".screen")

for(let i = 0; i < button.length; i++){
   button[i].addEventListener("click",()=>{
      calcScreen.innerHTML += button[i].textContent;
   })
}
