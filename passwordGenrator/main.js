
const box = document.getElementById('box');
const btn = document.getElementById('btn');

let password = '';

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
let lowercase = 'abcdefghijklmnopqrstuvwxyz' ;
let num = "0123456789" ;
let symbol = '~`!@#$%^&*()_-+=|}]{[:;/.>,<=>?' ;

let allChar = uppercase + lowercase + symbol + num ;

let lengthh = 12

const genrate = () => {

    password += uppercase[Math.floor(Math.random() * lowercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)] ;
    password += num[Math.floor(Math.random() * num.length)] ;
    password += symbol[Math.floor(Math.random() * symbol.length)] ;

  while(password.length < lengthh){
       password += allChar[Math.floor(Math.random() * allChar.length)] ;
  }

    box.value = password
    
 console.log(password);
     
}

const save = () => {
    box.select()
    document.execCommand('copy')
}
const reset = () => {
    password.length = 0
     box.value = '';
}