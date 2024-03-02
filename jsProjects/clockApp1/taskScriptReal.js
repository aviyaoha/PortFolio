const taskArea = document.getElementById("tasksDiv")
const theAddButton = document.getElementById("addButton")
const inputEl = document.querySelector(".theInput")
const formEl = document.querySelector(".formContainer")

let sec = 1000
let min = sec * 60
let hour = min * 60
let day = hour * 24
let timer
let num = 0

theAddButton.addEventListener('click', () => {
    formEl.innerHTML = getFormHTML()
    let plusButtonEl = document.querySelector(".addTaskButton")
    plusButtonEl.addEventListener('click', () => {
        if (document.querySelector(".userTask").value == '') {
            alert("You must write something!")
        } else {

            taskArea.innerHTML += `<div class="task">
                <h1 id="title${num}"></h1>
                <h3> Countdown:</h3>
                <div class="timercontainer">
                    <span class="days${num}"></span>
                    <span class="hours${num}"></span>
                    <span class="minutes${num}"></span>
                    <span class="seconds${num}"></span>
                </div>

            </div>`
            let titleID = `title${num}`
            let taskTitle = document.getElementById(titleID)
            taskTitle.innerText = document.querySelector(".userTask").value
            let CountdownEdnding = new Date(document.querySelector(".userDate").value)
            let daysclass = `.days${num}`
            let hoursclass = `.hours${num}`
            let minutesclass = `.minutes${num}`
            let secondsclass = `.seconds${num}`

            setInterval(() => {
                let now = new Date()
                let remaining = CountdownEdnding - now
                if (remaining < 0) {
                    clearInterval(timer)
                    document.querySelector(".timercontainer").innerHTML = `EXPIRED!`
                    return
                }

                let days = Math.floor(remaining / day)
                let hours = Math.floor((remaining % day) / hour)
                let minutes = Math.floor((remaining % hour) / min)
                let seconds = Math.floor((remaining % min) / sec)

                document.querySelector(daysclass).innerHTML = '<span>Days:</span> ' + days;
                document.querySelector(hoursclass).innerHTML = '<span>Hours:</span> ' + hours;
                document.querySelector(minutesclass).innerHTML = '<span>Minutes:</span> ' + minutes;
                document.querySelector(secondsclass).innerHTML = '<span>Seconds:</span> ' + seconds;

            }, 1000)
            num += 1

            clearDiv()

        }

    })

})


function clearDiv() {
    formEl.innerHTML = ``
}

// function getTaskHTML() {
//     return
// }

function getFormHTML() {
    return `
    <div class="formContainer1">
                <form action="">
                    <input type="text" class="userTask" placeholder="Write your task here">
                    <p>Choose dead-line</p>
                    <input type="date" class="userDate">
                </form>
                <button class="addTaskButton"></button>
                </div>
                    `
}

