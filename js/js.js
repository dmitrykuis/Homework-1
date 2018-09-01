function clickedButton () {
    window.location='pages/вторая страница.html';
}

function changeStyle () {
    document.body.style.backgroundColor = "#4c7aaf";
    var red, green, yellow;
    red = document.body.children [1];
    red.style.cssText ="color: red; \
        border-color: #f44336; "
    green = document.body.children [2];
    green.style.cssText ="color: green; \
        border-color: #4CAF50; "
    yellow = document.body.children [3];
    yellow.style.cssText = "color: orange; \
    border-color: #ff9800;"
}

function deleteContent () {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "#ffffff";
    
}