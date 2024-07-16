const clock = document.getElementById("clock");

setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}, 1000);
