// folder -> traverseallThefileandfolderandprintthem.(Ex-webD)
const path = require('path');
const fs = require('fs');


// to print everything in line and 
function treefunction(Path){
    let totalfiles = fs.readdirSync(Path);
    for(let i=0;i<totalfiles.length;i++){
        let newPath = path.join(Path,totalfiles[i]);
        let stats = fs.lstatSync(newPath);
        if(stats.isDirectory()){
            console.log(totalfiles[i]);
            treefunction(newPath);
        }
        if(stats.isFile()){
            console.log("\t->"+totalfiles[i]);
        }
    }
}

module.exports = {
    treeFn:treefunction
};