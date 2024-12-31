//Getting the input button
const textInput = document.getElementById("text-input")
// Getting the check Button
const checkBtn = document.getElementById("check-btn");
//Getting the result div for appending the innerHTML
const result = document.getElementById('result');
// Function for getting the value of the input
checkBtn.addEventListener('click', () =>{
  const textValue = textInput.value;
  console.log(textValue);
  // Passing the textValue in the palindrome Checker
  palindromeChecker(textValue);
})

function palindromeChecker(val){
  if(val.length <  1){
    alert('Please input a value');
  }
  if(val.length === 1){
    result.innerHTML += `<h2 style="margin-top: 20px; padding: 5px">${val} is a palindrome</h2>`;
  }
  // Changing every character into lower case
  const lower = val.toLowerCase();
  // Using replace function
  const newWord = lower.replace(/[^a-z0-9]/gi, "");
  // Turing the string into the array
  const array = newWord.split("");
  //Reversing the array 
  const reversedArray = array.reverse();
  // Join the array 
  const finalArray = reversedArray.join("");

  // Conditionals
  const palindrome =
    newWord === finalArray && finalArray.length > 1
      ? (result.innerHTML += `<h2 style="margin-top: 20px; padding: 5px">${val} is a palindrome.</h2>`)
      : `<h2 style="margin-top: 20px; padding: 5px">${val} is not a palindrome</h2>`;
}

