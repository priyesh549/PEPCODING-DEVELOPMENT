let fs = require('fs');
let content = fs.readFileSync('f1.txt','utf-8');
console.log('before');
console.log(content);
console.log('after');