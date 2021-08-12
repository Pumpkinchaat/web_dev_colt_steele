const fs = require('fs');
const fN = process.argv[2] || 'Project';
try {
    fs.mkdirSync(fN);
    fs.writeFileSync(`${fN}/index.html`, "");
    fs.writeFileSync(`${fN}/app.css`, "");
    fs.writeFileSync(`${fN}/app.js`, "");
} catch (e) {
    console.log(e);
}