const hoursEl = document.getElementById('hours') 
const minutesEl = document.getElementById('minutes') 
const secondsEl = document.getElementById('seconds') 
const ampmEl = document.getElementById('ampm') 


//  ====== instance Date function 
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

/// ========  change PM by AM if < 12
    if (h > 12){
        h = h - 12
        ampm = "PM"
    }

    // ======== transform one number format to double format in date parameters
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hoursEl.innerText = h
    minutesEl.innerText = m 
    secondsEl.innerText = s
    ampmEl, (innerText = ampm)
// update on live universal time in your location
setTimeout(()=> {
    updateClock()
}, 1000)

}

// call the function
updateClock()