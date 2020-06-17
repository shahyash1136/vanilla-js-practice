// color flip with hexadecimal color
/* const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
document.querySelector('.btn').addEventListener('click',function(){
    let hexColor = '#'; 
    for (let i = 0; i < 6; i++) {
        hexColor += hex[random()];
    }
    document.body.style.backgroundColor = `${hexColor}`;
});
const random = () => Math.floor(Math.random() * hex.length ); */

// color flip with RGB
document.querySelector('.btn').addEventListener('click',function(){

    let R = Math.floor(Math.random() * 256 );
    let G = Math.floor(Math.random() * 256 );
    let B = Math.floor(Math.random() * 256 );
    let color = `rgb(${R},${G},${B})`
    document.body.style.backgroundColor = `${color}`;
});