const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        xAttempts == 1?document.querySelector(".screen2 h2")
        .innerText = `Acertou em ${xAttempts} tentativa`:document.querySelector(".screen2 h2")
        .innerText = `Acertou em ${xAttempts} tentativas`
       
    }
    inputNumber.value = ""
    xAttempts++
}

const btnTry = document.querySelector("#btnTry")
btnTry.addEventListener('click', handleTryClick) //função callback

const btnAgain = document.querySelector("#btnAgain")
btnAgain.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    randomNumber = Math.round(Math.random() * 10)
    xAttempts = 1
})

