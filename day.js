
// querySelector
const day = document.querySelector("h2#clock");
//

// get time using date
function getDay() {
    const date = new Date();
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    const year = String(date.getFullYear());
    day.innerText = (`${month}/${day}/${year}`);
}
//

//start
getDay();
setInterval(getDay, 1000);
// setInterval(function, milli second)
// set Timeout