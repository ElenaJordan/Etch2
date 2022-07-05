const sketchPadContainer = document.getElementById("sketchPadContainer");
const makeThingGoButton = document.getElementById("makeThingGoButton");
const styleSwitcherButton = document.getElementById("styleSwitcherButton");
var togglerVariable = "black";

function resetSketchPad() {
    while (sketchPadContainer.hasChildNodes()) {
        sketchPadContainer.removeChild(sketchPadContainer.firstChild);
    }
}

function setSketchPadDimensions() {
    var x = document.getElementById("gridSizeInput").value;
    makeSketchPad(x,x);
}

function makeSketchPad(colCounter, cellCounter) {
    for (x = 0; x < colCounter; x++) {
        let column = document.createElement("div");
        sketchPadContainer.appendChild(column).className = "sketchpadColumn";
        for (y = 0; y < cellCounter; y++) {
            let cell = document.createElement("div");
            cell.id = "sketchpadCell";
            column.appendChild(cell).className = "sketchpadCell";
        }
    }
}

makeThingGoButton.addEventListener("click", resetSketchPad, false);
makeThingGoButton.addEventListener("click", setSketchPadDimensions, false);


sketchPadContainer.addEventListener("mouseover", function (e) {
    if (e.target.matches(".sketchpadCell")) {
        //e.target.classList.add("active");
        e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});