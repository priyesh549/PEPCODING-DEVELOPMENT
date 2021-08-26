const fs = require('fs');
const path = require('path');

let inputArr = process.argv.slice(2);
let mainDir = inputArr[0]; // webD
let subDirectories = inputArr.slice(1);  // javascript mongodb react


let mainDirpath = path.join(process.cwd(),mainDir);
if(!fs.existsSync(mainDirpath)){
    fs.mkdirSync(mainDirpath);
}

for(let i=0;i<subDirectories.length;i++){
    // console.log(subDirectories[i]);
    let folder = path.join(mainDirpath,subDirectories[i]);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }
    for(let j=1;j<=3;j++){
        let module = path.join(folder,`Module${j}`);
        if(!fs.existsSync(module)){
            fs.mkdirSync(module);
        }
        let fileName = path.join(module,'content.md');
        fs.writeFileSync(fileName,"#Hello Everyone");
    }
}