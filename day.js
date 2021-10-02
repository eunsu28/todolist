
// querySelector
const MDY = document.querySelector("h2#day");
//

// get date
function getDay() {
    const date = new Date();
    const month = String((date.getMonth()) + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    MDY.innerText = (`${month}/${day}/${year}`);
    
}
//

//start
getDay();
setInterval(getDay, 100000);
// setInterval(function, milli second)
// set Timeout