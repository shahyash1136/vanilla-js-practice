let date, month, year, day, newDate, monthArray, dayArray;

monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'];
newDate = new Date();

date = newDate.getDate();
month = monthArray[newDate.getMonth()];
year = newDate.getFullYear();
day = dayArray[newDate.getDay()];

document.querySelector('.dateBox').innerHTML = `<span class="date">${date}</span><span class="month">${month}</span><span class="year">${year}</span><span class="day">${day}</span>`;


document.querySelector('.btnAdd').addEventListener('click', add);
document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 && event.which === 13) {
        add();
    }
});

/* document.querySelector('.toDo__list').addEventListener('click', function (event) {
    let checkBox, itemId, Id, IdNum, element;

    checkBox = event.target.checked;

    checkBox === true ? event.target.parentNode.parentNode.classList.add('done') : event.target.parentNode.parentNode.classList.remove('done')

    itemId = event.target.parentNode.parentNode.id;
    if (itemId) {
        Id = itemId.split('-');
        IdNum = parseInt(Id[1]);

        //delete Item from UI
        element = document.getElementById(itemId);
        element.parentNode.removeChild(element);
    }

}); */



//To focus on input text after entering data
let Focus = () => {
    document.querySelector('.inputText').value = '';
    document.querySelector('.inputText').focus();
}

function add() {
    let text, id, todo, markUp;

    //Get input value
    text = document.querySelector('.inputText').value;
    //Set Id with date
    id = Date.now();

    //store ID and text inside Todo Obj
    todo = {
        id: id,
        text: text,
    }

    // check if localstorage is null or not
    if (window.localStorage.getItem('todoList') === null) {
        //create blank Array;
        var todoArr = [];
        //store objects in blank Array
        todoArr.push(todo);
        window.localStorage.setItem('todoList', JSON.stringify(todoArr));
    } else {
        var todoArr = JSON.parse(window.localStorage.getItem('todoList'));
        todoArr.push(todo);
        window.localStorage.setItem('todoList', JSON.stringify(todoArr));
    }

    var todoContent = JSON.parse(window.localStorage.getItem('todoList'));

    for (let i = 0; i < todoContent.length; i++) {
        markUp = `<div class="toDo__item" id="list-${todoContent[i].id}"><div class="left"><input type="checkbox" name="" id="${todoContent[i].id}"><span>${todoContent[i].text}</span></div><div class="right"><span class="delete"></span></div></div>`
    }
    document.querySelector('.toDo__list').innerHTML += markUp;


}