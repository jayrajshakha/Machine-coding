
const ul = document.getElementById('option')
const ask = document.getElementById('ask')

let result = 0;
let num = 0;
const data = [
    { Question: 'whats your name ?', Answer: '4', num: 1, A: 'veer', B: 'kaan', C: 'dev', D: 'jay' },
    { Question: 'were you from ?', Answer: '2', num: 2, A: 'rajkot', B: 'gujrat', C: 'india', D: 'earth' },
    { Question: 'your age ?', Answer: '2', num: 3, A: '12', B: '22', C: '32', D: '43' },
    { Question: 'are you a devloper ?', Answer: '2', num: 4, A: 'no', B: 'yes', C: 'null', D: 'a and b ' },

]



document.addEventListener('DOMContentLoaded', function () {
    for (let index = num; index == num; index++) {
        ask.innerText = `${data[index].num}. ${data[index].Question}`
        ul.innerHTML = `<li id='1'>${data[index].A} </li> <li  id='2'>${data[index].B} </li><li  id='3'>${data[index].C} </li><li  id='4'>${data[index].D} </li>`
    }
})
function next() {
    num++

    for (let index = num; index == num; index++) {
        ask.innerText = `${data[index].num}. ${data[index].Question}`
        ul.innerHTML = `<li id='1'>${data[index].A} </li> <li  id='2'>${data[index].B} </li><li  id='3'>${data[index].C} </li><li  id='4'>${data[index].D} </li>`
    }

    if (num == data.length - 1) {
        num = -1
    }

}

ul.addEventListener('click', function (e) {
    data.forEach((i) => {
        if (e.srcElement.id == i.Answer) {
            return console.log(e.srcElement.id,  i.Answer);
        }

    })

})

