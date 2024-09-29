const validate = document.querySelector("#e-mail");
const send = document.querySelector("#send-btn");
const error = document.querySelector(".error")
let address = validate.value;

send.addEventListener("click", () => {
    if (validate === true){
        console.log(address)
    }
    else{
        error.classList.toggle("none")
       
    }
})