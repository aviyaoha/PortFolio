// Function create an element
export function createDiv() {
    // In html - "select option"
    const someElement = document.getElementById('someElement').value;
    if (someElement) {

        const newElement = document.createElement(someElement);
    
        // DIV
        let bgColor = document.getElementById('bg-color').value;
        let width = document.getElementById('div-width').value;
        let height = document.getElementById('div-height').value;
        let borderWidth = document.getElementById('div-border-width').value;
        let bordeColor = document.getElementById('div-border-color').value;
        let borderRadius = document.getElementById('div-border-radius').value;
        let divPadding = document.getElementById('div-padding').value;
        let DivMargin = document.getElementById('div-margin').value;
    
        // TEXT
        let textArea = document.getElementById('div-textArea').value;
        let fontSize = document.getElementById('div-font-size').value;
        let fontColor = document.getElementById('div-font-color').value;
        
        // DIV
        newElement.className = "myDiv";
        newElement.style.width = `${width}%`;
        newElement.style.height = `${height}px`;
        newElement.style.padding = `${divPadding}px`;
        newElement.style.border = `${borderWidth}px solid ${bordeColor}`;
        newElement.style.borderRadius = `${borderRadius}px`;
        newElement.style.padding = `${divPadding}px`;
        newElement.style.margin = `${DivMargin}px`;
        
        // TEXT
        newElement.style.backgroundColor = bgColor;
        newElement.textContent = textArea;
        newElement.style.fontSize = `${fontSize}px`;
        newElement.style.color = fontColor;
        
        document.getElementById('whiteSpaceInner').appendChild(newElement);
    } else return;
};
