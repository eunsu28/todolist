// querySelector
const clock = document.querySelector("h2#clock");
//

// get time using data.getHours / getMinutes / getSeconds
function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
//

//start
getTime();
setInterval(getTime, 1000);
// setInterval(function, milli second)
// set Timeout