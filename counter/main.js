let count = 0;
let value = document.querySelector('.value');
let btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let style = e.currentTarget.classList
        if (style.contains('increase')) {
            count++;
        } else if (style.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        } 
         if (count < 0) {
            value.style.color = 'red';
        } 
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});



/* document.querySelector('.reset').addEventListener('click', function () {
    value.textContent = 0;
    value.classList.remove('red');
    value.classList.remove('green');
});
document.querySelector('.increase').addEventListener('click', function () {
    value.textContent++;
    if (parseInt(value.textContent) > 0) {
        value.classList.add('green');
        value.classList.remove('red');
    } else if (parseInt(value.textContent) === 0) {
        value.classList.remove('red');
        value.classList.remove('green');
    }
});
document.querySelector('.decrease').addEventListener('click', function () {
    value.textContent--;
    if (parseInt(value.textContent) < 0) {
        value.classList.add('red');
        value.classList.remove('green');
    } else if (parseInt(value.textContent) === 0) {
        value.classList.remove('red');
        value.classList.remove('green');
    }
}); */