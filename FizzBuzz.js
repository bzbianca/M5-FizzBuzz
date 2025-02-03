// TODO: Define constants for the form and the result display area
const inputUser = document.getElementById("userInput")
const buttonSub = document.getElementById("buttonSubmit")
const displayResult = document.getElementById("result")

// TODO: Add the first line of the event listener to handle form submission
    // Prevent the form from refreshing the page
buttonSub.addEventListener('click', function(event){
    event.preventDefault();
    // TODO: Get the number from the form input
    let i;
    i = inputUser.value;
    i = Number(i);
    // TODO: Write FizzBuzz logic here
    // If divisible by both 3 and 5, set the output to "FizzBuzz"
    // If divisible by 3, set the output to "Fizz"
    // If divisible by 5, set the output to "Buzz"
    // Otherwise, set the output to the number itself
    if (i % 3 === 0 && i % 5 === 0) {
        output = "FizzBuzz";
    } else if (i % 3 === 0) {
        output = "Fizz";
    } else if (i % 5 === 0) {
        output = "Buzz";
    } else {
        output = i
    }
    // Display the result on the page
    result.textContent = output;
});
    