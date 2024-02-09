
const onePara = document.getElementById('onePara');
const twoPara = document.getElementById('twoPara');
const threePara = document.getElementById('threePara');

document.addEventListener("DOMContentLoaded", () => {
    onePara.style.display = "block";
    twoPara.style.display = "none";
    threePara.style.display = "none";
})

const one = () => {
    onePara.style.display = "block";
    twoPara.style.display = "none";
    threePara.style.display = "none";
}

const two = () => {
    twoPara.style.display = "block"
    onePara.style.display = "none";
    threePara.style.display = "none";

}
const three = () => {
    threePara.style.display = "block"
    onePara.style.display = "none";
    twoPara.style.display = "none";

}
