const listBox = document.querySelector(".box")
const userInput = document.getElementById("UserList")
const listBtn = document.getElementById("btnList")
let diferent = 0

listBtn.addEventListener('click', addItem)
function addItem(e) {
    e.preventDefault()
    if (userInput.value != '') {
        let data = userInput.value
        let list = document.createElement('li')
        let text = document.createElement('lable')
        text.textContent = data
        userInput.value = ''
        list.append(text)
        listBox.appendChild(list)

        let removeBtn = document.createElement('button')
        removeBtn.classList.add('removeBtn')
        list.append(removeBtn)
        removeBtn.addEventListener('click', () => {
            removeBtn.parentElement.remove()
        })

        let checkie = document.createElement('input')
        checkie.id = "checkieEl" + JSON.stringify(diferent)
        checkie.type = 'checkbox'
        checkie.classList.add('checkie')
        list.append(checkie)
        diferent += 1
    } else {
        alert('You Must Write Something!')
    }

}


