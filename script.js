const ps = document.getElementsByClassName("second-hand");
const pm = document.getElementsByClassName("min-hand");
const ph = document.getElementsByClassName("hour-hand");


function showTime() { 
const date = new Date(); // horario agora
const h = date.getHours(); // horas
const m = date.getMinutes();  // minutos
const s = date.getSeconds(); // segundos


const hands = document.querySelectorAll('.hand');
const hDeg = ((h/12) * 360) + 90; // ponteiro de horas rotação em graus
const mDeg = ((m / 60) * 360) + 90; // ponteiro de minutos rotação em graus
const sDeg = ((s / 60) * 360) + 90; // ponteiro em minutos rotação em graus

 hands.forEach(hand => {
        if (hand.classList.contains('hour-hand')) {
            hand.style.transform = `rotate(${hDeg}deg)`; // Rotate hour hand
        } else if (hand.classList.contains('min-hand')) {
            hand.style.transform = `rotate(${mDeg}deg)`; // Rotate minute hand
        } else if (hand.classList.contains('second-hand')) {
            hand.style.transform = `rotate(${sDeg}deg)`; // Rotate second hand
        }
    });


console.log(h, m, s); 
}


setInterval(showTime, 1000); // vai rodar a cada segundo