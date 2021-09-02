let fs = require('fs');
fs.readFile('f1.txt','utf-8',callback);
console.log('before');
function callback(err,content){
    // error prints when its size > 0 or not null
    if(err){
        console.log('error',err);
    }
    else{
        console.log(content);
    }
}
console.log('after');