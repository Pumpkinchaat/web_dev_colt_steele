const button = document.querySelector('#colorButton');
const body = document.querySelector('body')
const colorChange = function() {
    let r = Number(Math.floor(Math.random() * 256));
    let g = Number(Math.floor(Math.random() * 256));
    let b = Number(Math.floor(Math.random() * 256));
    body.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
    button.textContent = `rgb(${r} , ${g} , ${b})`;
}
button.addEventListener('click', colorChange);