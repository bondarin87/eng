'use strict';

let verb = {
    0:['have','tener'],
    1:['do','hacer'],
    2:['get','obtener'],
    3:['make','hacer']
}
let arr1 = ['have','do','get','make','know','take','see','come','think','look','want','give','use','find','tell','ask','work','call','try','need','feel','become','leave'];
let arr2 = ['tener','hacer','obtener','hacer','saber/conocer','tomar','ver','venir','pensar','mirar','querer','dar','usar','encontrar','contar','preguntar','trabajar','llamar','intentar/probar','necesitar','sentir','convertirse','dejar']

let elem = document.querySelector('.elem');
let elem1 = document.querySelector('elem1');
let card = document.querySelector('.card');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');


//elem.textContent = arr1[randomNumber];
elem.textContent = arr1[0];


let i=0;

prev.addEventListener('click', function() {
    if (i>0) {
        i--;
    }else {
        i=arr1.length-1;
    }
    elem.textContent = arr1[i];
})
next.addEventListener('click', function() {
    if (i<arr1.length-1) {
        i++;
    }else{
        i=0;
    }
    elem.textContent = arr1[i];
})
card.addEventListener('click', function() {
    elem.textContent = arr2[i];   
 })







