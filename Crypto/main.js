
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

// function a (){
//      return 'hello'
// }

// const b = a()

// console.log(b);


// let a = [];

// for (let index = 0; index < 5; index++) {
//   a[index] = index + 1
// }

// console.log(a);

// let b = 0

// for (let index = 0; index < a.length; index++) {

//   b += a[index]
// }
// console.log(b);


// var a = 23

// function b (){
//   console.log(a);
//   var a = 34
// }
//   b()


// console.log(z);

//   const z = 44

// console.log('start');
// setTimeout(() => {
//    console.log('inter');
// }, 0);
// console.log('end');

for (let index = 0; index == 3; index++) {
    console.log('jay');
}