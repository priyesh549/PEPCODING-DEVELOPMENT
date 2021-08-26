  
// folderpath-> file/folder traverse 
// unhe print kra do 
// prety simple 
// // -> assignment recursion 


const path = require('path');
const fs = require('fs');


// to print everything in line and --recursive code
function treefunction(Path,space){
    let totalfiles = fs.readdirSync(Path);
    for(let i=0;i<totalfiles.length;i++){
        let newPath = path.join(Path,totalfiles[i]);
        let stats = fs.lstatSync(newPath);
        if(stats.isDirectory()){
            console.log(space+totalfiles[i]);
            console.log(space+"└──");
            treefunction(newPath,space+"\t");
        }
        if(stats.isFile()){
            console.log(space+"├──"+totalfiles[i]);
        }
    }
}


// ------------------------------------------------------------------------------

// Bhaiya ka code
// let fs=require('fs');
// let path=require("path");

// "├──"
// function treeFn(srcPath){
//     let baseName=path.basename(srcPath);
//     console.log(baseName);
//     console.log("\n\t"+"└──");
//     let content=fs.readdirSync(srcPath);
//     let allEntities="";
//     for(let i=0;i<content.length;i++){
//         allEntities+='\n\t'+"├──"+content[i];
//         // console.log(content[i]);
//     }
//     console.log(allEntities);
// }

// module.exports={
//     treeFn:treeFn
// }

module.exports = {
    treeFn:treefunction
};