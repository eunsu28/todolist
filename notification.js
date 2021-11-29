const time = document.querySelector("#clock")

function showNotification(){
    const notification = new Notification("check your todo list", {
        body: "holololo"
    })
}

console.log(Notification.permission);

if(Notification.permission === "granted") {
    setInterval(showNotification, "100000000")
} else if (Notification.permission === "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission)
    });
}

