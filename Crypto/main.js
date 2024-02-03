
let data = [];
const perentEle = document.getElementsByClassName('container')[0];

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            data = res.products


            for (let index = 0; index < data.length; index++) {
                perentEle.innerHTML += `
                <div class="box">
                <div>
                  <img
                    id="img"
                    src=${data[index].images[0]}
                    alt=""
                  />
                </div>
                <div>
                  <h1 id="name">${data[index].title}</h1>
                  <h6 class="price">$ ${data[index].price}</h6>
                </div>
              </div>
                `
            }
        })
})






