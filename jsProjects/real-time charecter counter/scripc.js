const textareaEl = document.getElementById("textarea")
const totalEl = document.getElementById("totalCounter")
const remainingEl = document.getElementById("remainingCounter")
// keyup is the event handeler that will arrous the func- every time the user will press a letter itll trigger it all over again
textareaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    totalEl.innerText = textareaEl.value.length

    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}