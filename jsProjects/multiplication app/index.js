const num1 = Math.ceil(Math.random() * 10)
console.log(num1)
const num2 = Math.ceil(Math.random() * 10)
console.log(num2)

const qstnEl = document.getElementById("qstn")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

const scoreEl = document.getElementById("score")

// let score = 0

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0
}
// ! at the right of the word means 'not exist'

scoreEl.innerText = 'score : ' + score

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        localStorageUpdate()
    } else {
        score--;
        localStorageUpdate()
    }
})

qstnEl.innerText = 'What is ' + num1
    + ' multiply by ' + num2 + '?';

// when the user will press 'submit" itll run the whole code all over again and set the score to 0 again (line 14). In order to prevent this from happening- we will save the score at the browzer srorage:

function localStorageUpdate() {
    localStorage.setItem("score", JSON.stringify(score))
    // the browzer security will not allow us to save numbers on the local file so we need to stringify it.
}
//  after we did it, we set the  score again as the local storage item (line 16) and mark the first score setting as a comment (//)
// now we want to prevent errors in case the user didnt answer anything yet, so we add the if sntc at line 18


