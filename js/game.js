const div = document.querySelector('div');
let xAxis = 0;
let yAxis = 0;
window.addEventListener('keydown', function(evt) {
    if (evt.key == 'ArrowUp') {
        yAxis -= 15;
        div.style.transform = `translate(${xAxis}px , ${yAxis}px)`;
    }
    if (evt.key == 'ArrowRight') {
        xAxis += 15;
        div.style.transform = `translate(${xAxis}px , ${yAxis}px)`;
    }
    if (evt.key == 'ArrowDown') {
        yAxis += 15;
        div.style.transform = `translate(${xAxis}px , ${yAxis}px)`;
    }
    if (evt.key == 'ArrowLeft') {
        xAxis -= 15;
        div.style.transform = `translate(${xAxis}px , ${yAxis}px)`;
    }
})