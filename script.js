const form = document.querySelector(".send");
const input = document.querySelector("#e-mail");
const submit = document.querySelector("#send-btn");
const error = document.querySelector(".error");


function validateEmail(email){
    const reg = /\S+@\S+\.\S+$/;
    return reg.test(email);
}
 
form.addEventListener("submit", (e) => {
    if (input.value ==='' || input.value == null){
        error.classList.toggle("none")
        e.preventDefault();
    }
    
})


