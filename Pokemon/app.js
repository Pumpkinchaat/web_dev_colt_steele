let linkStr = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i = 1; i <= 1000; i++) {
    const img = document.createElement('img');
    img.classList.add('pokemon');
    img.src = `${linkStr}${i}.png`;
    document.querySelector('#container').append(img);
}