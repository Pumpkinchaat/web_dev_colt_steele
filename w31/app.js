const fs = require('fs');

const name = process.argv[2] || 'Project';
try {
    fs.mkdirSync(`${name}`);
    fs.writeFileSync(`${name}/index.html`, data = '');
    fs.writeFileSync(`${name}/styles.css`, data = '');
    fs.writeFileSync(`${name}/app.js`, data = '');
} catch (err) {
    console.log(err);
}