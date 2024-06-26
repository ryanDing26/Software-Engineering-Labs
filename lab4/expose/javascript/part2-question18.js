// No timeout was specified, so no timeout was added.
function time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let interval = setInterval(time, 1000); // Second parameter is delay, but in ms (1000ms=1s)
// clearInterval(interval); // This line is used to stop the interval from running if need be.
