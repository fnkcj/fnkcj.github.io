const color1 = generateColor();
const color2 = generateColor();

let start = Math.random() * 360;
//let increment = 2;
//let rate = 50;

const body = document.getElementsByTagName("body")[0];
body.style.background = "linear-gradient(" + start + "deg, " + color1 + ", " + color2 + ")";
body.style.backgroundAttachment = "fixed";

//setInterval(changeRotation, rate);

/*
function changeRotation() {
    start = start + increment;
    let gradient = "linear-gradient(" + start.toString() + "deg, " + color1 + ", " + color2 + ")";
    body.style.background = gradient;
}
*/

function generateColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return "rgba(" + r + ", " + g + ", " + b + ", 1)"
}