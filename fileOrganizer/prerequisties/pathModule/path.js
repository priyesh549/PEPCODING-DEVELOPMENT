const path = require("path");
const fs = require("fs");

// There are many function on path module . Use mdn to explore it

let inputArr = process.argv.slice(2);  // we know this
// console.log(inputArr);

// let assume the first one is filename and second is content then we can print both in two lines.
let fileName = inputArr[0];
let content = inputArr[1];

// console.log('filename',fileName);
// console.log('content',content);


// to find out in which directory we are working 
let currentPath = process.cwd(); // -> gives us the path of directory
// console.log(currentPath);


// to join a file or folder or both to a given path
let joinPath = path.join(currentPath,'abc','def.txt'); // -> every thing should be passed in string format.
// console.log(joinPath);

// returns the last portion of the path.
let base = path.basename('D:/pepcoding development/fileOrganizer/pathModule/path.js');

// let str = 'D:/pepcoding development/fileOrganizer/pathModule/path.js'; //->user will give path in str form
// console.log(str);
// console.log(base);

// extension name -> from last . to end of string
let ext = path.extname('abc.txt');
console.log(ext);