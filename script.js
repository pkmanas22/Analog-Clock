let h = document.getElementById('hour')
let m = document.getElementById('min')
let s = document.getElementById('sec')

setInterval(() => {
    let current_time = new Date()
    
    let hour = current_time.getHours()
    let min = current_time.getMinutes()
    let sec = current_time.getSeconds()

    // console.log(hour, min, sec)

    h_rotate = (30 * hour) + (0.5 * min)
    m_rotate = (min * 6)
    s_rotate = sec * 6

    h.style.transform = `rotate(${h_rotate}deg)`
    m.style.transform = `rotate(${m_rotate}deg)`
    s.style.transform = `rotate(${s_rotate}deg)`
}, 1000);

