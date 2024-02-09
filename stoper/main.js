
const h = document.getElementById('heading');

let timer = null;

let counter = 1;
function watch() {
     counter++;
     if (counter == 11) {
          counter = 0;
     }
     h.textContent = counter;
}
function reverceWatch() {
     counter--;
     if (counter == 0) {
          counter = 10;
     }
     h.textContent = counter;
}

function start() {
     timer = setInterval(watch, 1000);

}
function stop() {
     clearInterval(timer)
}
function reverce() {
     timer = setInterval(reverceWatch, 1000);

}
