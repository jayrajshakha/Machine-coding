const display = document.getElementById('display');

let hour = 0;
let min = 0;
let sec = 0;

const watch = () => {
    let today = new Date()

    hour = today.getHours()
    min = today.getMinutes()
    sec = today.getSeconds()

    display.innerText = `${hour} : ${min} : ${sec}`
}

setInterval(watch, 1000)



