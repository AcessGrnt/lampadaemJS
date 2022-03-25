const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lamp');

function lampOn () {
    lamp.src = './img/ligada.jpg'
}

function lampOf () {
    lamp.src = './img/desligada.jpg'
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}

turnOff.addEventListener('click', lampOf);
turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOf);
lamp.addEventListener('dblclick', lampBroken);


