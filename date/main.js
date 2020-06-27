var eventDate = new Date('2021/06/25 14:30:00').getTime();
// Update the count down every 1 second
//var x = setInterval(function() {},1000);
let timeInterval = setInterval(() => {
    var now = new Date().getTime();
    var distance = eventDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / (1000));
    
    document.querySelector('#demo').innerHTML = `<h1 style="text-align:center">${days} days ${hrs} hrs ${min} min ${sec} sec</h1>`;

    if(distance < 0){
        clearInterval(timeInterval);
        document.querySelector('#demo').innerHTML = `Expired`
    }

},1000)


