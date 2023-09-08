const calcScreen = document.querySelector(".screen")
const numButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operations]")
const equalsButton = document.querySelector("[data-equals]")
const delButton = document.querySelector("[data-delete]")
const clearButton = document.querySelector("[data-clear]")
let num = "";
let result = 0
let operationValue = undefined

equalsButton.addEventListener("click",()=>{
   switch(operationValue){
      case "+":
         result += num
         break
      case "-":
         result -= num
         break
      case "/":
         result /= num
         break
      case "X":
         result *= num
   }
})

calcScreen.


calcScreen.addEventListener(num !== undefined,()=>{

})

numButtons.forEach(button=>{
   button.addEventListener("click",()=>{
      num += button.textContent
      num = parseInt(num)
   })
})

operationButton.forEach(operation =>{
   operation.addEventListener("click",()=>{
      operationValue = operation.textContent
      result += num
      num = ""
   })
})

clearButton.addEventListener("click",()=>{
   num = "";
   result = 0;
   operationValue = undefined
})








