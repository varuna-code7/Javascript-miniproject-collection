let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
 let random=Math.ceil(Math.random() *100);
 console.log(random);
function checkGuess() {
   let guessNumber=parseInt(userInput.value);
   if(guessNumber>random)
   {
       gameResult.textContent="it's too high! try Again";
       gameResult.style.backgroundColor="#1e217c";
   }
   else if(guessNumber< random)
   {
       gameResult.textContent="it's too Low! try Again";
       gameResult.style.backgroundColor="#1e217c";
   }
   else if(guessNumber===random)
   {
       gameResult.textContent="Congratulations! You got it right.";
       gameResult.style.backgroundColor="green";
   }
   else{
         gameResult.textContent="Invalid Input! Provide Proper Input.";
         gameResult.style.backgroundColor="red";
   }
}
