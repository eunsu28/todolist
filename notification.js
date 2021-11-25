console.log(Notification.permission);

if(Notification.permission === "granted") {
    alert("ready");
} else if (Notification.permission === "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission)
    });
}

