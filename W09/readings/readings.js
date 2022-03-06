const popup = window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');
document.write('<h3>Display Popup Window</h3>');
window.setTimeout( () => alert("Time's Up!"), 3000);

const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

