
const counter = document.getElementById('counter');

let count = 0;

const add = () => {
    count++;
    counter.innerText = count;
}
const reset = () => {
    count = 0;
    counter.innerText = count;
}
const reduce = () => {
    count--;
    counter.innerText = count;
}