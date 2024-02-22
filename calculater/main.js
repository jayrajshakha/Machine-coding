
const buttons = document.querySelectorAll('button')
const data = document.getElementById('data')
const btnn = document.getElementById('btnn')

buttons.forEach((i) => {
     i.addEventListener("click", (e) => {

          if (e.target.innerHTML !== '=') {
               data.value += e.target.innerHTML
          }

          else {

               if (data.value.split('').reverse().at(0) === '+' || data.value.split('').reverse().at(0) === '-' || data.value.split('').reverse().at(0) === '*' || data.value.split('').reverse().at(0) === '/') {
                    data.value = 'HALF CALCUATION PLEASE DO FULLFILL'
               }
               else {
                    data.value = eval(data.value)
               }

          }

     })
})


btnn.addEventListener('click', () => {
     data.value = ''
})




