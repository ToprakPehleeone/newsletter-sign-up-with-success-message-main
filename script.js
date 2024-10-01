const form = document.querySelector("#submit_form");
const error = document.querySelector(".error");
const input = document.querySelector("#e-mail");
const btn = document.querySelector(".button");
const successPage = document.querySelector(".success_section");
const successAdress = document.querySelector(".success_adress");
const firstSect = document.querySelector(".first_section");
const scndSect = document.querySelector(".second_section");
const main = document.querySelector("main");
const dismiss = document.querySelector(".button_dismiss");

// let email = input.value;

// function validateEmail (email){
//     const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return pattern.test(email);
// }

btn.addEventListener("click", (e) => {
    e.preventDefault();
   if (input.value !==""){
    firstSect.classList.toggle("none");
    scndSect.classList.toggle("none");
    successPage.classList.toggle("none");
    main.style.maxWidth = "30rem"
   }
   else {
    error.classList.toggle("none");
    input.classList.toggle("red");
   }
})

dismiss.addEventListener("click", () => {
    firstSect.classList.toggle("none");
    scndSect.classList.toggle("none");
    successPage.classList.toggle("none");
    main.style.maxWidth = "55rem"
    input.value = "";
    error.classList.toggle("none");
    input.classList.toggle("red");
})


