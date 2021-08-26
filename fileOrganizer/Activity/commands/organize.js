let fs=require('fs');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

// bhaiya ka code -> without recursion
// function organizeFunction(Path){
//     let allentities = fs.readdirSync(Path);
//     let organizeFiles = path.join(Path,'organizeFiles');

//     // Creating an organizeFile folder at same place where multiple files are present.
//     if(!fs.existsSync(organizeFiles)){
//         fs.mkdirSync(organizeFiles);
//     }
//     // console.log(allentities);
//     for(let i of allentities){
//         let file = i;
//         let srcPath = path.join(Path,file);
//         // console.log(srcPath);
//         if(fs.lstatSync(srcPath).isFile()){

//             let type = checkfile(file);
//             let filetype = path.join(organizeFiles,type);
//             if(!fs.existsSync(filetype)){
//                 fs.mkdirSync(filetype);
//             }
            
//             let destPath = path.join(filetype,file);
//             fs.copyFileSync(srcPath,destPath);
//         }
//     }
// }

// function checkfile(file){
//     for(let type in types){  // in gives key values -> which in this case is type
//         for(let ext of types[type]){ // it gives inner ext of all types.
//             if(path.extname(file).split('.')[1]==ext){
//                 return type;
//             }
//         } 
//     }
//     return 'others';
// }


function organizeFunction(Path){
    let organizeFiles = path.join(Path,'organizeFiles');
    if(!fs.existsSync(organizeFiles)){
        fs.mkdirSync(organizeFiles);
    }
    orgfun(Path,organizeFiles);
}

function orgfun(Path,organizeFiles){
    let entities = fs.readdirSync(Path);
    for(let i=0;i<entities.length;i++){
        let file = entities[i];
        let srcPath = path.join(Path,file);
        if(fs.lstatSync(srcPath).isDirectory()){
            orgfun(srcPath,organizeFiles);
        }
        if(fs.lstatSync(srcPath).isFile()){
            let type = checkfile(file);
            let typefolder = path.join(organizeFiles,type);
            if(!fs.existsSync(typefolder)){
                fs.mkdirSync(typefolder);
            }

            let destPath = path.join(typefolder,file);
            fs.copyFileSync(srcPath,destPath);
        }
    }
}

function checkfile(file){
    for(let type in types){  // in gives key values -> which in this case is type
        for(let ext of types[type]){ // it gives inner ext of all types.
            if(path.extname(file).split('.')[1]==ext){
                return type;
            }
        } 
    }
    return 'others';
}



module.exports = {
    organizeFn : organizeFunction
};