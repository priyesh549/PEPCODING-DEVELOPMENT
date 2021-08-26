const fs = require("fs");
const path = require("path");

// let content = fs.readFileSync('a.txt');  // reads the content from the file
// console.log(content+""); // to remove from buffer

// // this is (6e) a txt file (70) In buffer ans will be 6e 70. buffers are unique and they are fast executables codes .

// fs.writeFileSync('abc.txt','hi Priyesh'); // this creates a new file if not present with given string and also if file is there than it updates it overwrite

// fs.appendFileSync('abc.txt',' how are you'); // it appends something in the file not overwrites it , this can also create a new file

// fs.unlinkSync('abc.txt');  // to delete the file iski jgh hm file bhi daal sakte hai.


// to check the status of the file
// let doesexist = fs.existsSync('a1.txt');
// console.log('file a1 exists',doesexist);




// --------------------------------------------------------------------------------


// Directories
// to make a folder.
// fs.mkdirSync('PathModule');

// to delete a folder
// fs.rmdirSync("PathModule");


// statusobj of file or folder -> gives most of the detail about file
// let status = fs.lstatSync('a.txt');
// console.log(status);
// It has also two function .isFile and .isDirectory
// console.log(status.isFile());
// console.log(status.isDirectory());



// To get files from the other directory -> this will give the content of all the directory
// let fileArr = fs.readdirSync('D:/pepcoding development/fileOrganizer/dir'); // path mai forward slash hne chiye
// console.log(fileArr);




// ---------------------------------------------------------------------

// every thing is executed in buffer form
// to copy the content of one file to another. f1.txt -> f2.txt
let srcpath = 'D:/pepcoding development/fileOrganizer/fsModule/f1.txt';
let destpath = 'D:/pepcoding development/fileOrganizer/fsModule/f2.txt';
// fs.copyFileSync(srcpath,destpath); // copies the content of file on basis of path.

// copyfilesync -> can create file and copies the content. It also overwrites something in file.
// if we want to append only not overwrite than we can use mode as third parameter in copyfileSync

// to copy the same file into another directory . taking f1.txt to dir folder.
let tobecopiedFileName = path.basename(srcpath); // last portion of string
let dest = path.join('D:/pepcoding development/fileOrganizer/dir',tobecopiedFileName);
// fs.copyFileSync(srcpath,dest);
fs.copyFileSync()

