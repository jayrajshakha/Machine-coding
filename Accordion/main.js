

document.body.contentEditable = 'true';

const jay = document.getElementById('jay');
const heer = document.getElementById('heer');
const veer = document.getElementById('dev');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

document.addEventListener("DOMContentLoaded", () => {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
})

jay.addEventListener("click", () => {

    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";

})

heer.addEventListener("click", () => {
    p1.style.display = "none";
    p2.style.display = "block";
    p3.style.display = "none";

})

veer.addEventListener('click', () => {

    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "block";

})