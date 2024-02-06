

const input = document.getElementById('input');
const ul = document.getElementById('data')
const addBtn = document.getElementById('btn')






let todos = []

const add = () => {
    if (input.value != '') {

        todos = input.value

    }

    console.log(todos);

    ul.innerHTML += `<li class ='li'> ${todos}  <span class = 'btn'> Delete </span> </li>`


    input.value = ''

    save()
}

ul.addEventListener('click', (e) => {
    if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        save()
    }
    else if (e.target.tagName == 'LI') {
        e.target.classList.toggle('done')
        save()
    }


})


function save() {
    localStorage.setItem('data', ul.innerHTML)
}

function showData() {
    ul.innerHTML = localStorage.getItem('data')
}
showData()