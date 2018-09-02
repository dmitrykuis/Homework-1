function clickedButton() {
    window.location = 'pages/вторая страница.html';
}

function createElementWithClassName(tag, className) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }

    return element;
}

function changeStyle() {
    document.body.style.backgroundColor = "#4c7aaf";
    var red, green, yellow;
    red = document.body.children[1];
    red.style.cssText = "color: red; \
        border-color: #f44336; "
    green = document.body.children[2];
    green.style.cssText = "color: green; \
        border-color: #4CAF50; "
    yellow = document.body.children[3];
    yellow.style.cssText = "color: orange; \
    border-color: #ff9800;"
}

function deleteContent() {
    document.body.innerHTML = "";
    renderTable();
}

function templateTable() {
    return (`<div></div><div></div><div></div><div></div><div></div><div></div><div></div>`)
}

function renderTable(elements) {
    const flex = createElementWithClassName('div', 'container');
    flex.style.display = 'flex';
    document.body.appendChild(flex);
    flex.innerHTML = templateTable();
}