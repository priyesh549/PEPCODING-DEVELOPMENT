const fs = require('fs');
const path = require('path');
let inputArr = process.argv.slice(2);
let inputpath = inputArr[0];
let inputdir = inputArr[1];

// my code
// let fileArr = fs.readdirSync(inputdir);
// for(let i of fileArr){
//     let srcpath = path.join(inputdir,i);
//     let status = fs.lstatSync(srcpath);
//     if(status.isFile()){
//         let ext = path.extname(i);
//         if(ext == ".txt"){
//             if(fs.existsSync('summary.txt')==false){
//                 let destpath = 'D:/pepcoding development/fileOrganizer/summary.txt';
//                 fs.copyFileSync(srcpath,destpath);
//             }
//             else{
//                 fs.appendFileSync('summary.txt',fs.readFileSync(srcpath));
//             }
//         }
//     }
// }


// let allentities = fs.readdirSync(inputdir);
// let content = "";
// for(let i of allentities){
//     let entityname = i;
//     let ename = path.join(inputdir,entityname);
//     let stats = fs.lstatSync(ename);
//     if(stats.isFile()){
//         let extname = path.extname(ename);
//         if(extname==".txt"){
//             content += fs.readFileSync(ename);
//         }
//     }
// }

// let summaryFile = 'D:/pepcoding_development/fileOrganizer/summary.txt';
// fs.writeFileSync(summaryFile,content);





