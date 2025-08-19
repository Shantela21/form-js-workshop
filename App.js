// import NumberWork from "./numberWork.js";
// import FormControl from "./FormControl.js";

// window.start = (event) => {
//   event.preventDefault();
//   // let num = 5;
//   const num1 = new NumberWork(-5);
//   num1.displayNumber();
//   num1.pozOrNeg();

//   function submitHandler() {
//     const success = Number(this.num1);
//     alert("Form submitted successfully.");
//   }
//   const newForm = new FormControl("7");
//   newForm.submitHandler();
//   submitHandler();
// };
// window.start();

// import NumberWork from "./numberWork.js";
// import formControl1 from "./formControl.js";
// // const num1 = new NumberWork(24);
// // num1.displayNumber();
// // num1.pozOrNeg();
// const numberInput = document.getElementById("calculate");
// window.start = (event) => {
//   event.preventDefault();
//   const num = numberInput.value;
//   const form1 = new formControl1(num);
//   form1.submithandler();
// };

import FormControl from "./FormControl.js";
if(localStorage.getItem("userName")){
console.log('The username is: ' )
} else{
  alert("No username found")
}



// window.setName = ()=>{
//     event.addEventListener();
// }


window.start = (event) => {
  event.preventDefault(); // prevent page reload

  // Grab inputs
  const numInput = document.getElementById("numOne").value;
  const emailInput = document.getElementById("email").value;
  const errorMessage = document.getElementById("error-message");
  

  

  // Reset error message
  errorMessage.style.visibility = "hidden";
  errorMessage.textContent = "";

  // Validate number
  if (isNaN(numInput) || numInput === "") {
    errorMessage.textContent = "This is not a number!";
    errorMessage.style.visibility = "visible";
    return;
  }

  // Validate email (basic regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailInput)
  if (!emailPattern.test(emailInput)) {
    errorMessage.textContent = "Invalid email address!";
    errorMessage.style.visibility = "visible";
    return;
  }

  const newForm = new FormControl(4, emailInput);
  newForm.submitHandler();
  alert("Form submitted successfully.");
};

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const byeMessage = document.getElementById("byeMessage");
const form = document.getElementById("form");


// Show form when "Yes" is clicked
  yesButton.addEventListener("click", () => {
    form.style.display = "block";
    byeMessage.hidden = true;
    console.log(form.style);
  });

  // Show bye message when "No" is clicked
  noButton.addEventListener("click", () => {
    form.hidden = true;
    byeMessage.hidden = false;
  });
  
// function getName{
// document.getElementById("save").addEventListener("click", function() {
//   alert("");
// });
// }
