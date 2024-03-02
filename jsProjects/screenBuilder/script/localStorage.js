const whiteSpaceInner = document.getElementById('whiteSpaceInner');

export function save() {
    const children = whiteSpaceInner.children;

    // create new dataBase
    const elementsData = [];

    // check every time 
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        const elementData = {
            tag: element.tagName,
            content: element.textContent,
            style: {
                width: element.style.width,
                height: element.style.height,
                border: element.style.border,
                borderRadius: element.style.borderRadius,
                backgroundColor: element.style.backgroundColor,
                fontSize: element.style.fontSize,
                color: element.style.color,
                padding: element.style.padding,
                margin: element.style.margin
            }
        };
        elementsData.push(elementData);
    }
    localStorage.setItem("savedElements", JSON.stringify(elementsData));
}


export function loadElements() {
    // const whiteSpaceInner = document.getElementById('editSpaceInner');   
    const localStorageData = localStorage.getItem('savedElements');

    if (localStorageData) {
        const elementsData = JSON.parse(localStorageData);
        /* whiteSpaceInner.innerHTML = ''; */
        elementsData.forEach(elementData => {
            const newElement = document.createElement(elementData.tag);
            newElement.textContent = elementData.content;
            Object.assign(newElement.style, elementData.style);
            whiteSpaceInner.appendChild(newElement);
        });
    }
};