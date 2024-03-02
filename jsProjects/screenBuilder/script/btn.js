// Clear Botton
export function clearFunc() {
    document.getElementById('massage').style.display = "block";
};

// if the user want to delete all - than the paper resets
export function yesFunc() {
    document.getElementById('whiteSpaceInner').innerHTML = "";
    document.getElementById('bg-color').value = "";
    document.getElementById('div-width').value = "";
    document.getElementById('div-height').value = "";
    document.getElementById('div-border-width').value = "";
    document.getElementById('div-border-color').value = "";
    document.getElementById('div-border-radius').value = "";
    document.getElementById('div-padding').value = "";
    document.getElementById('div-margin').value = "";
    document.getElementById('div-textArea').value = "";
    document.getElementById('div-font-size').value = "";
    document.getElementById('div-font-color').value = "";
    document.getElementById('massage').style.display = "none";
    localStorage.clear();
};

export function noFunc () {
    document.getElementById('massage').style.display = "none";
};
