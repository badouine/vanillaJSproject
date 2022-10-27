// ======= Fonction predefini generateur de nombre
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')
let score = JSON.parse(localStorage.getItem('score'))


if (!score) {
    score = 0
}

// ======== verify if result equal to correct answer
scoreEl.innerText = `score: ${score}`
questionEl.innerText = `Que font ${num1} x ${num2} ?`
const correctAns = num1 * num2 


// increase score if answer is correct or decrease if false
formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})


//  stock & set the value score in local application storage
function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}