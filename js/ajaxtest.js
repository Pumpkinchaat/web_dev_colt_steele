// const h1 = document.querySelector('#bitcoinPrice');
// const req = new XMLHttpRequest();

// req.onload = function() {
//     const data = JSON.parse(this.responseText);
//     const price = data.ticker.price;
//     h1.append(price);
// }

// req.onerror = function(err) {
//     console.log('ERROR', err);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();

// async function getPrice() {
//     try {
//         const req = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await req.json();
//         h1.append(data.ticker.price);
//     } catch (err) {
//         console.log('ERROR', err);
//     }
// }

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch (e) {
//         console.log("ERROR!", e)
//     }
// }

// fetchBitcoinPrice();

// const fetchBitcoinPrice = async() => {
//     try {
//         const req = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         h1.innerHTML = "";
//         h1.append(req.data.ticker.price)
//     } catch (err) {
//         console.log(err);
//     }
// }

// fetchBitcoinPrice();

// while (1) {
//     setTimeout(() => {
//         fetchBitcoinPrice();
//     }, 1000)
// }

const form = document.querySelector('#form');
const div = document.querySelector('.container');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.q.value;
    const config = { params: { q: searchTerm } };
    const req = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    div.innerHTML = "";
    imageAppend(req.data);
})

async function imageAppend(shows) {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement('img');
            img.src = show.show.image.medium;
            div.append(img);
        }
    }
}