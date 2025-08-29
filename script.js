// JavaScript Fundamentals Project

// Part 1: Basics 
function checkAge() {
  const age = Number(document.getElementById("ageInput").value); // variable + input
  let message = "";

  if (age >= 18) { // conditional
    message = "You are an adult. Good news you can now vote in Kenya.";
  } else {
    message = "You are a minor. Please concentrate in your education";
  }

  console.log(message); // console output
  document.getElementById("basicsOutput").textContent = message; // webpage output
}


// Part 2: Functions
function addThreeNumbers(a, b, c) { 
  return a + b + c; } // adds 3 numbers

function showSum() {
  const number_1 = Number(document.getElementById("num1").value);
  const numeber_2 = Number(document.getElementById("num2").value);
  const number_3 = Number(document.getElementById("num3").value);
  document.getElementById("functionOutput").textContent =
    `The sum is: ${addThreeNumbers(number_1, numeber_2, number_3)}`;
}


function greetUser(name) { return `Hello, ${name}! Welcome to a simple javascript page.`; }



// Part 3: Loops

//  a: for loop 
const courses = ["Computer science", "Software Engineer", "electrical engineering", "Applied Statistics", "Project management","Disaster management"];
const loopList = document.getElementById("loopList");

for (let i = 0; i < courses.length; i++) {
  const li = document.createElement("li");
  li.textContent = courses[i];
  loopList.appendChild(li);
}

// b: while loop → countdown
let countdown = 5;
const countdownList = document.getElementById("countdownList");

while (countdown > 0) {
  const li = document.createElement("li");
  li.textContent = "Countdown: " + countdown;
  countdownList.appendChild(li);
  countdown--;
}



// Part 4: DOM
const input = document.getElementById("userInput");
const greeting = document.getElementById("greeting");
input.addEventListener("input", () => {
  greeting.textContent = input.value.trim() ? greetUser(input.value) : "";
});
document.getElementById("toggle_Btn").addEventListener("click", () => {
  document.getElementById("toggle_P").classList.toggle("highlight");
});
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("You clicked the button!");
});
