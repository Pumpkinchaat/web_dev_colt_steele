const input = document.querySelector('#username');
const h1 = document.querySelector('h1');
input.addEventListener('input', function(evt) {
    if (input.value != '') h1.innerText = `Welcome , ${input.value}`;
    else h1.innerText = 'Enter the Username';
})