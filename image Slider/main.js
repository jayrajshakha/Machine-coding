const right = document.getElementById('right');
const left = document.getElementById('left');
const perentImg = document.getElementById('perentImg');
const img = document.getElementById('img');

let index = 0;


const imageData = ['https://www.imgacademy.com/sites/default/files/img-bs-img-academy-2023.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctEnUVqpWkvWnzmkpV_9lWg9DT9cU7RpKysmcXYIO02R8ACH01t9WADARpjF4Bdp8o1A&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYvs5arsp3PA8-XCi7bsP-Ms1eiikfBZzvQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfon9amK6GWb5Vr-rKBK7vBQ-LM0gVRhV0EQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHjoAoCXwzWDsE1MDo8UKO9ibzC9X-16njg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLIlNbmP7RdIoAUYU_N6H6JpVSSuulgYlqQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRol2BANU4-pI0I67oTcqBrso9KbVjwttcTvbrxy2SeIk8aEhog2cjgBWccrcv1_3eZ-Ms&usqp=CAU']


right.addEventListener('click', () => {
    index >= imageData.length - 1 ? index = 0 : index = index + 1;
    img.src = imageData[index]

    console.log(index);


})

left.addEventListener('click', () => {

    index <= 0 ? index = imageData.length - 1 : index = index - 1;
    img.src = imageData[index]

    console.log(index);


})


console.log(index);

