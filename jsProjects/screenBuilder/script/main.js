import { createDiv } from "./createEl.js";
import { clearFunc, yesFunc, noFunc } from "./btn.js";
import { save } from "./localStoragefunc.js";
import { loadElements } from "./localStoragefunc.js";

// When the user click the button - the element created
document.getElementById('createBtn').addEventListener('click', createDiv);
// Clear Botton
document.getElementById('clearBtn').addEventListener('click', clearFunc);
// If the user want to delete all - than the paper resets
document.getElementById('yes').addEventListener('click', yesFunc);
// If the user dosn't want to delete all - than the bow disppear
document.getElementById('no').addEventListener('click', noFunc);
// If the user click on the SAVE BTN
document.getElementById('saveBtn').addEventListener('click', save);

function showFromLs () {
    if (localStorage.getItem("savedElements") !== null) {
        loadElements();
    } else return;
}
showFromLs();


const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const btnBox = document.getElementById('btnBox');
const editSpaceInner = document.getElementById('editSpaceInner');
hideBtn.style.display = "none";
btnBox.style.display = "none";

hideBtn.addEventListener('click', evt => {
    editSpaceInner.style.display = "none";
    btnBox.style.display = "none";
    editSpaceInner.classList.remove("show");
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
})
showBtn.addEventListener('click', evt => {
    editSpaceInner.style.display = "block";
    btnBox.style.display = "block";
    editSpaceInner.classList.add("show");
    hideBtn.style.display = "block";
    showBtn.style.display = "none";
})

