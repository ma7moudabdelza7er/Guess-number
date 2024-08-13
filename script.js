let btn = document.querySelector(".btn");
let input = document.querySelector(".input-field input");
let chances = document.querySelector(".chances");
let text = document.querySelector(".text");

let N = 10;
// given random number from 1 to 100
randomNum = Math.floor(Math.random() * 100) + 1;

window.addEventListener("load",function(){
    input.focus()
})

btn.addEventListener("click",function(){
    chances.textContent = --N;
    // if user enter empty value
            if(input.value == ""){
                text.style.color = "red";
                text.textContent = "enter a number";
                // if user enter number greater than 100 and less than 1
            }else if(input.value > 100 || input.value < 1){
                    text.style.color = "red";
                    text.textContent = "invalid number";
                    input.value = "";
                    // if user enter correct value
                }else if(input.value == randomNum){
                    text.style.color = "green";
                    text.textContent = "Congratulations!!😎";
                    btn.textContent = "Play Again";
                    input.disabled = true;
                    chances.textContent = "";
                    // if user play again
                    btn.addEventListener("click",function(){
                        window.location.reload();
                    })
                    // if user enter wrong value greater  coorect number
                }else if(input.value > randomNum){
                    text.style.color = "green";
                    text.textContent = "Your num is high";
                    input.value = "";
                    
                    // if user enter wrong value less  coorect number
            }else if(input.value < randomNum){
                text.style.color = "green";
                text.textContent = "Your Num is Low";
                    input.value =""
            }
            // if number of chance 0 
            if(N == 0){
                text.textContent = "Bad Luck Try Again";
                btn.textContent = "Reply";
                input.disabled = true;
                input.value = ""
            }
        // if user need to play again
            if(N < 0){
                window.location.reload();
            }

   })