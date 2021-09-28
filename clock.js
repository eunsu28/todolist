
// querySelector
const clock = document.querySelector("h1#clock");
//

// get time using date
function getDay() {
    const date = new Date();
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    const year = String(date.getFullYear());
    console.log("day changed")
    clock.innerText = (`${month}/${day}/${year}`);
}
//

//start
getDay();
setInterval(getDay, 86400000);
// setInterval(function, milli second)
// set Timeout