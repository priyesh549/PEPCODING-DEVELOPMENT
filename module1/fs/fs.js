const fs = require("fs");

// console.log(fs.readFileSync("a.txt","UTF-8"));
// console.log(fs.readFileSync("b.txt","UTF-8"));

// console.log(fs.existsSync("a.txt"));
// console.log(fs.existsSync("b.txt"));


// fs.writeFileSync("a.txt","How are you");
// fs.writeFileSync("b.txt","My name is priyesh");


// process.argv used to combine two file
// let file1name = process.argv[2];
// let file2name = process.argv[4];

// let file1data = fs.readFileSync(file1name,"utf-8");
// let file2data = fs.readFileSync(file2name,"utf-8");
// console.log(file1data +"\n" + file2data);

let file1name = process.argv[2];
let file2name = process.argv[4];

let file1data = fs.readFileSync(file1name,"utf-8");
let file2data = fs.readFileSync(file2name,"utf-8");
console.log(file1data +"\n" + file2data);