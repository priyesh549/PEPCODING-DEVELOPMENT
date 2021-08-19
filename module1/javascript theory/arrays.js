// //1.  new creation of an array

// // let arr= [];
// // let arr = new Array();


// //2. array can have different data type because js doesn't has data type. It consider everything as object
// let arr= ["Priyesh",1,83.3,true,'n'];
// console.log(arr);

// // Insertion in array
// arr.push(45); // will add element in last
// console.log(arr);
// arr.pop(); // will remove element from last
// console.log(arr);

// console.log(arr.length);

// --------------------------------------
// string to array conversion

// let str1 = "Bhavesh";
// let str2 = "Priyesh Pandey";
// let str3 = "Apple,Mango,Banana";

// console.log(str1.split(""));
// console.log(str2.split(" "));
// console.log(str3.split(","));


// =----------------------------------------------------------------
// array to string

// let arr=["a","b","c","d"];

// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("Hello"));
// console.log(arr.join("|"));



// --------------------------------------------

// array conactenation 
// let arr1 = ["a","b","c"];
// let arr2 = ["d","e","f"];

// console.log(arr1.concat(arr2));


// Q-1 . given a string print the frequency of all the character present in it.

// let str = "sdbkhbfksndandfjdnfdjsnfnndmms";
// let arr = new Array();
// for(let i=0;i<str.length;i++){
//     let ch = str.charAt(i); 
//     let count = arr[ch];
//     if(count==undefined){
//         arr[ch] = 1;
//     }
//     else{
//         arr[ch] = count+1;
//     }
// }

// console.log(arr);






// ------------------------------------------------------------------------------
// some more types of traversing


// let arr = [34,23,345,43,55,63];

// // traverse and get the indexes. Here indexes are stored in the form of string and further they are easily typecasted.
// for(let i in arr){
//     console.log(i);
// }

// // traverse and get the values
// for(let i of arr){
//     console.log(i);
// }




// -----------------------------------
// example of typecasting
// console.log(1+2+"a");  // intially integer will be added and then it will be considered as a string.

// console.log("a"+1+2); // everything will be converted to string because string came before integer.

// console.log(1+2+"a"+3+4); //tricky case guess. First int then stringt




// array ka concept
// reassignation on index is possible in const
// const arr=[1,2,3,4,5,6];

// arr[3] = 7;
// console.log(arr);



// // But reassignation of whole array is not possible
// const arr=[1,2,3,4,5,6];
// //  Assignment to constant variable(erro)
// arr=[1,2,3];
// console.log(arr)


// -------------------------------------------------------
// most important methods of Javascript


// 1.For Each loop

// let arr = ["a","b","c","d"];

// arr.forEach(function(value,index){
//     console.log(value,index,arr);
// });

// make the character in uppercase of arr

// let arr = ["a","b","c","d"];

// arr.forEach(function(value,index){
//     arr[index] = String.fromCharCode(value.charCodeAt(0) - 32);
// });
// console.log(arr);

// // remember string.fromCharCode converts lowercase to uppercase



// // -------------------------------bind method
// // bind method is the way to pass our own arguments to the call back function.
// function temp(myarg,myarg2,data){
//     console.log(myarg,myarg2,data);
// }
//  arr.forEach(temp.bind(this,"hello","hello1"));




// Q- Create your own forEach function
// for each takes two arguments array and callback function which does manipuation.
// callback -> value = array[i], index+1 everytime , array

// function myforEach(array,callback){
//     for(let i=0;i<arr.length;i++){
//         callback(array[i],i,array); // value,index,array
//     }
// }
// let arr = ["a","b","c","d"];
// myforEach(arr,function(value,index,array){
//     console.log(value,index,array);
// })






// ----------------------------------------map------------------------------
// let arr = [1,2,3,4];
// // add 2 in each element
// for(let i=0;i<arr.length;i++){
//     arr[i] = arr[i] + 2;
// }
// console.log(arr);

// // Using map func parameters are same as that of forEach loop
// arr = arr.map(function(value){
//     return value+2;
// })
// console.log(arr);




// --------------------- delete methods of array------------------

// let arr = [1,2,33,3,3,3,3,3,3,4,5];
// slice method .slice(sI,eI)

// let newarr = arr.slice(1,3);
// console.log(newarr);


// splice method  .splice(sI,total numbers)
// arr.splice(1,3);
// console.log(arr);


// remove even elements from array using splice method
// arrays in js behaves like arraylist  in java
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         arr.splice(i,1);
//         i--;
//     }
// }
// console.log(arr);



// -----------------------sparsing or call by value

// let arr = [1,2,3,4];
// let temparr = [...arr];
// console.log(temparr);






// -------------------------filter method --------------------------------------------
// 1. It returns true or false.
// 2 if it returns true than value is added in arr if false than its not added
// 3 filter is used when we have to remove the elements from arr of similar properties.

// let arr = [1,2,3,3,5,5,2,5,45,3,5,6,7,8,910,32];
// arr = arr.filter(function(value){
//     if(value%2==1){
//         return false;
//     }
//     else{
//         return true;
//     }
// })
// console.log(arr);









// --------------------------------------sort method------------------------------
// let arr=[2,5,4,5,5,3,1];
// arr = arr.sort(function(a,b){
//     return a-b; // for ascending order
// })

// another method
// arr = arr.sort(function(a,b){
//     if(a > b){
//         return 1;
//     }
//     else if(a==b){
//         return 0;
//     }
//     else{
//         return -1;
//     }
// })

// console.log(arr);





// -----------------include method in array---------------------------
// it returns either true or false

// let arr = [1,2,3,4,5,6];

// console.log(arr.includes(2));

// console.log(arr.includes(63));