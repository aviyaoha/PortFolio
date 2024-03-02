const inputBox = document.getElementById("inputBox")
const ListContainer = document.getElementById("listContainer")
const AdditionEl = document.querySelector(".addTask")

AdditionEl.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("You must write something!")
    } else {
        let theDeadLine = prompt("When should it be done? (enter date in this tamplate only:dd/mm/yyyy)")
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        ListContainer.appendChild(li)
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        span1.innerHTML = "\u00d7"
        span2.innerHTML = countDown(theDeadLine)
        li.appendChild(span2)
        li.appendChild(span1)
    }
    inputBox.value = ''
    saveData()

})

function countDown(date) {

}

ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML)
}

function showTask() {
    ListContainer.innerHTML = localStorage.getItem("data")
}

showTask()

