

const display = document.getElementById('display');

let hour = 0;
let min = 0;
let sec = 0;

let timer = null





function starter() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = 0
        if (min >= 60) {
            hour++;
            min = 0;
        }
    }

    display.innerText = `${hour < 10 ? '0' + hour : hour} : ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`;

}

const start = () => {
    timer = setInterval(starter, 1000);
}

const stop = () => {
    clearInterval(timer);
}

const restart = () => {

    hour = 0;
    min = 0;
    sec = 0;


}