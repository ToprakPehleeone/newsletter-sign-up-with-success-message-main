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

function success() {
    firstSect.classList.toggle("none")
    scndSect.classList.toggle("none")
    successPage.classList.toggle("none")
    main.style.maxWidth = ("26rem")
}

function validateEmail (email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const email = input.value.trim()

    if (validateEmail(email)){
        success()
        successAdress.innerText = email
        input.value = "";
    } 
    else{
        error.style.display = ("block")
        input.classList.add("red")
    }
})

dismiss.addEventListener("click", () => {
    firstSect.classList.toggle("none")
    scndSect.classList.toggle("none")
    successPage.classList.toggle("none")
    main.style.maxWidth = ("55rem")
    error.style.display = ("none")
    input.classList.remove("red")
})





