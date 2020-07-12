let displayArea = document.querySelector('.calculator__display');
let keyArea = document.querySelector('.calculator__keys');

keyArea.addEventListener('click', function (event) {
    //console.log(event);
    if (event.target.className === 'btn') {
        var keys = event.target
        var actions = keys.dataset.action;
        var keyContent = keys.textContent;
        var displayNum = displayArea.textContent; 

    }
    if (!actions) {
        if (displayNum === '0') {
            displayArea = keyContent;
        }else{
            displayArea = displayNum + keyContent;
        }
    }
    if (actions === 'add' || actions === 'minus' || actions === 'mulitply' || actions === 'divide') {
        console.log('action key!');
    }
    if (actions === 'decimal') {
        console.log('decimal key!');
    }
    if (actions === 'clear') {
        console.log('clear key!');
    }
    if (actions === 'calculate') {
        console.log('calculate key!');
    }
});