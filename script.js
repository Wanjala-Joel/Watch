// Select the DOM elements

let time = document.getElementById('time');
let date = document.getElementById('time-zone');


// Time function
function showTime(){
    let today = new Date();

    // 1. Set the time
    let hour = today.getHours();
    let minute = today.getMinutes();
    let sec = today.getSeconds();

    // 2. Change the text content
    time.textContent = `${hour}:${addZero(minute)}:${addZero(sec)}`;

    // 3. Set time out function
    setTimeout(showTime, 1000);

}

// Date function

const showDate = function() {
    let today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // 1. Set the time of the day
    let dateCur = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    // 2. Display to the UI
    date.textContent = `${dateCur} ${months[month]}, ${year}`;
}

// Add zero function
function addZero(n){
    return(parseInt(n, 10) < 10 ? '0' : '') + n; 
}

// Run
showTime();
showDate();