

const ol = document.getElementById('ol');

document.addEventListener('DOMContentLoaded',fetcher)


async function  fetcher  () {
     let res = await fetch('https://dummyjson.com/products')
     let data =  await res.json();

     data.products?.forEach((i) => {
        ol.innerHTML += `<li> ${i.title}</li>`;

  })
}

