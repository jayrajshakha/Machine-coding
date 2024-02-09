const box = document.getElementById('box');
const ul = document.getElementById('ul');

const done = () => {
      ul.innerHTML += `<li> ${box.value} <br> <br> <span id='del' >delete</span> </li>`
      localStorage.setItem('data', ul.innerHTML)
      

   
    
      box.value = ''
}

document.addEventListener('DOMContentLoaded',() => {
     ul.innerHTML = localStorage.getItem('data')
})

ul.addEventListener('click', (e) => {
      if(e.target.tagName == 'SPAN'){
         e.target.parentNode.remove()
      } 
      else if(e.target.tagName == 'LI'){
            e.target.classList.toggle('done')
      }
})