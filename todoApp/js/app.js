let date, month, year, day, newDate, monthArray, dayArray;

monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'];
newDate = new Date();

date = newDate.getDate();
month = monthArray[newDate.getMonth()];
year = newDate.getFullYear();
day = dayArray[newDate.getDay()];

document.querySelector('.dateBox').innerHTML = `<span class="date">${date}</span><span class="month">${month}</span><span class="year">${year}</span><span class="day">${day}</span>`;

let Focus = () => {
    document.querySelector('.inputText').value = '';
    document.querySelector('.inputText').focus();
}

let addData = () => {
    if (document.querySelector('.inputText').value === '' || document.querySelector('.inputText').value == null) {
        alert('Please enter a value')
    } else {
        let text = document.querySelector('.inputText').value;
        let id = Date.now()
        document.querySelector('.toDo__list').innerHTML += `<li data-id='${id }'><div class="toDo__item"><div class="left"><input type="checkbox" class="checkBox" name="" id="${id }"><span>${text}</span></div><div class="right"><span class="delete"></span></div></div></li>`;
        Focus();

        let list = document.querySelectorAll('.toDo__list li');
        let listArr = Array.prototype.slice.call(list);
        listArr.forEach(element => {
            element.children[0].children[1].children[0].addEventListener('click', function () {
                this.parentNode.parentNode.parentNode.remove();
                Focus();
            });
            checkBox = element.children[0].children[0].children[0];
            checkBox.addEventListener('click', function () {
                this.checked === true ? this.parentNode.parentNode.classList.add('done') : this.parentNode.parentNode.classList.remove('done') 

            })
        });




    }

}

document.querySelector('.btnAdd').addEventListener('click', addData);
document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        addData();
    }
});

document.querySelector('.btnClear').addEventListener('click', function (e) {
    let list = document.querySelectorAll('.toDo__list li');
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
    Focus();
});