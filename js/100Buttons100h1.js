const randomColor = function() {
    let r = Math.trunc(Math.random() * 266);
    let g = Math.trunc(Math.random() * 266);
    let b = Math.trunc(Math.random() * 266);
    return `rgb(${r},${g},${b})`;
}

const colorRandomize = function() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

const buttonContainer = document.querySelector('#buttons');
const h1Container = document.querySelector('#h1s');

for (let i = 0; i < 100; i++) {
    const button = document.createElement('button');
    const h1 = document.createElement('h1');
    h1.innerText = `Click me #${i+1}`;
    button.innerText = `Click me #${i+1}`;
    h1Container.append(h1);
    buttonContainer.append(button);
}

let buttons = document.querySelectorAll('button');
let h1s = document.querySelectorAll('h1');

for (let button of buttons) button.addEventListener('click', colorRandomize);
for (let h1 of h1s) h1.addEventListener('click', colorRandomize);