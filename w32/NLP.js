const process = require('process');
const franc = require('franc');
const langs = require('langs');
const sent = process.argv[2];
const code = franc(sent);
langs.all().forEach(function(obj) {
    if (obj['3'] == code || obj['2'] == code || obj['2T'] == code) {
        console.log(obj['name']);
    }
})