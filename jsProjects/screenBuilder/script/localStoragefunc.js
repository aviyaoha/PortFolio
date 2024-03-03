const whiteSpaceInner = document.getElementById('whiteSpaceInner');

export function save() {
    const children = whiteSpaceInner.children;

    // create new dataBase
    const elementsData = [];

    // check every time 
    for (let i = 0; i < children.length; i++) {
        const El = children[i];
        const elementData = {
            tag: El.tagName,
            content: El.textContent,
            style: {
                width: El.style.width,
                height: El.style.height,
                border: El.style.border,
                borderRadius: El.style.borderRadius,
                backgroundColor: El.style.backgroundColor,
                fontSize: El.style.fontSize,
                color: El.style.color,
                padding: El.style.padding,
                margin: El.style.margin
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
