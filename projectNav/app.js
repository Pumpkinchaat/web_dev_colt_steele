const button = document.querySelector('#clicker');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const sections = [one, two, three, four];
let i = 0;
update(i);
button.addEventListener('click', function(evt) {
    i = (i + 1) % 4;
    update(i);
})

function update(i) {
    for (let sec of sections) {
        if (sec != sections[i]) {
            sec.style.borderBottom = 'none';
        } else {
            sec.style.borderBottom = 'solid green 2px';
        }
    }
}