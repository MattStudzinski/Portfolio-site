const modalBtn = document.querySelector('.modal-button')
const modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')
modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active')
})
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')
})

const modalBtn2 = document.querySelector('.modal-button2')
const modalBg2 = document.querySelector('.modal-bg2')
let modalClose2 = document.querySelector('.modal-close2')
modalBtn2.addEventListener('click',function(){
    modalBg2.classList.add('bg-active2')
})
modalClose2.addEventListener('click', function(){
    modalBg2.classList.remove('bg-active2')
})


const nameInput = document.querySelector("#name-input")
const emailInput = document.querySelector("#email-input")
const messageInput = document.querySelector("#message-input")
const success = document.querySelector("#success")
const errorNodes = document.querySelectorAll(".error")

function validateForm(){

    clearMessages()
    let errorFlag = false

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank"
        // nameInput.classList.add("error-border")
        errorFlag= true
    }
    if(!emailIsValid(emailInput.value)){
        errorNodes[1].innerText = "Invalid email address"
        // email.classList.add("error-border")
        errorFlag= true
    }

    if(messageInput.value.length < 1){
        errorNodes[2].innerText = "Please enter your message"
        // message.classList.add("error-border")
        errorFlag= true
    }
    if(!errorFlag){
        success.innerText= "Success"
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = ""
    }
    success.innerText = ""
    // nameInput.classList.remove("error-border")
    // emailInput.classList.remove("error-border")
    // messageInput.classList.remove("error-border")
}
function emailIsValid(emailInput){
    let pattern = /\S+@\S+\.\S+/
    return pattern.test(emailInput)
}