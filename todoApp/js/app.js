let date, month, year, day, newDate, monthArray, dayArray;

monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday'];
newDate = new Date();

date = newDate.getDate();
month = monthArray[newDate.getMonth()];
year = newDate.getFullYear();
day = dayArray[newDate.getDay()];

document.querySelector('.dateBox').innerHTML = `<span class="date">${date}</span><span class="month">${month}</span><span class="year">${year}</span><span class="day">${day}</span>`;


function Todo(id, text) {
    this.id = id;
    this.text = text;
}
let data = {
    todo: [],
};

let Focus = () => {
    document.querySelector('.inputText').value = '';
    document.querySelector('.inputText').focus();
}

document.querySelector('.btnAdd').addEventListener('click', add);
document.querySelector('.btnClear').addEventListener('click', clearData);
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 && e.which === 13) {
        add();
    }
});

document.querySelector('.toDo__list').addEventListener('click', cmpletedTask);

function add() {
    let text = document.querySelector('.inputText').value;

    if (text !== '') {
        let ID;
        if (data.todo.length > 0) {
            ID = data.todo[data.todo.length - 1].id + 1;
        } else {
            ID = 0;
        }
        let item = new Todo(ID, text);
        data.todo.push(item);
        

        var html = `<div class="toDo__item" id="list-${item.id}"><div class="left"><input type="checkbox" id="${item.id}" class="check"><span>${item.text}</span></div><div class="right"><span class="delete"></span></div></div>`;

        document.querySelector('.toDo__list').insertAdjacentHTML('beforeend', html);

        Focus();
    }
}

function cmpletedTask(event) {

    var checkBox = event.target.checked;
    if (checkBox == true) {
        event.target.parentNode.parentNode.classList.add('done');
    } else if (checkBox == false) {
        event.target.parentNode.parentNode.classList.remove('done');
    }

    let itemId = event.target.parentNode.parentNode.id;
    if (itemId) {
        let splitId = itemId.split('-');
        let ID = parseInt(splitId[1]);

        var ids, index;

        ids = data.todo.map(function (cur) {
            return cur.ID;
        });
        index = ids.indexOf(ID);
        if (ID !== -1) {
            data.todo.splice(index, 1);
        }

        let element = document.getElementById(itemId);
        element.parentNode.removeChild(element);
    }


}

function clearData(event) {
    document.querySelector('.toDo__list').innerHTML = '';
    data.todo = [];
    
}