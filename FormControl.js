// export default class FormControl{
// constructor(num1){
//     this.num1 = num1
//     }

//     submitHandler(){
//        const success = Number(this.num1);
//        alert('success', success);
//     }

//     }
//       function checkIsNumber(value){
//        return !isNaN(value) && value !== null && value !== "";

//       }

//      export default class FormControl {
//   constructor(num1) {
//     this.num1 = num1
//     this.getName = email
//     this.getName()
//   }

//   submitHandler() {
//     if (checkIsNumber(this.num1)) {
//       alert("Success: " + this.num1 + " is a number");
//     } else {
//       alert("Error: " + this.num1 + " is NOT a number");
//     }
//   }
// }

// // Helper function to check if a value is a number
// function checkIsNumber(value) {
//     // const success = Number(this.num1);
//     return !isNaN(value) && value !== null && value !== "";
// }

// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// function validateEmail(email) {
//   return regex.test(email);
// }

// console.log(validateEmail("test@example.com")); // true
// console.log(validateEmail("bad-email@"));       // false

// getName(){
//     localStorage.setItem("firstName", "Zoe");

export default class FormControl {
  constructor(num1, email) {
    this.num1 = num1;
    this.email = email;
    // this.getName();
    console.log("This is a constructor");
  }
  // Check if it is a number
  checkIsNumber() {
    const success = Number(this.num1);
    return !isNaN(success) && this.num1 !== null && this.num1 !== "";
  }
  // Submit number validation
  submitHandler() {
    console.log("This is a submit handler");
    if (this.checkIsNumber()) {
      alert("Success: " + this.num1 + " is a number");
    } else {
      alert("Error: " + this.num1 + " is NOT a number");
    }
  }
  // Check if email is valid
  validEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(this.email)) {
      alert("Email is valid: " + this.email);
      return true;
    } else {
      alert("Please enter a valid email");
      return false;
    }
  }
  getName() {
    localStorage.setItem("fisrtName", "Zoe");
    console.log("Local storage");
  }
}
