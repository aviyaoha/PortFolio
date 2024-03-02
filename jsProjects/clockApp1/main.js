import timer from "./timerScript.js"

if (".timer") {
    new timer(
        document.querySelector(".timer")
    )
}

const headerEl = document.getElementById("header")
headerEl.style.display = "grid"