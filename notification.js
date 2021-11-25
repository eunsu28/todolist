const time = document.querySelector("#clock")

function showNotification(){
    const notification = new Notification("와우", {
        body: "holololo"

    })
}

console.log(Notification.permission);

if(Notification.permission === "granted") {
    if(time.innerText === "06:00:00") {
        showNotification()
    }
} else if (Notification.permission === "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission)
    });
}

