const sketchPadContainer = document.getElementById("sketchPadContainer");
const makeThingGoButton = document.getElementById("makeThingGoButton");

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
            column.appendChild(cell).className = "sketchpadCell";
        }
    }
}

function changeCellToActive() {
    if (EventTarget.matches("sketchPadCell")) {
        EventTarget.addAttribute("class", "active");
    }
}

makeThingGoButton.addEventListener("click", resetSketchPad, false);
makeThingGoButton.addEventListener("click", setSketchPadDimensions, false);

sketchPadContainer.addEventListener("mouseover", changeCellToActive, false);