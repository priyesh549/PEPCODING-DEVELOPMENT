// let str = "Priyesh Pandey";

// // printing all the characters with there ASCII value
// for(let i=0; i < str.length;i++){
//     console.log(str[i]+" "+str.charCodeAt(i));
// }

// let str = "ahdhbdhdhwbfbbdkdbdhdbbfjbdbbdbdb"

// // 1 count number of b
// let count = 0;
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i)=='b'){
//         count++;
//     }
// }

// console.log(count);

// let number = "12";
// console.log(number); // print as a string
// console.log(parseInt(number)); // convert into integer


// 2. sum of a numeric value of string
// let str = "367";
// let sum = 0;

// for(let i=0;i<str.length;i++){
//     sum+=str[i];
// }

// console.log(sum);

// 3 . print with ascii value also
// let str = "1A2";

// let sum = 0;

// for(let i=0;i<str.length;i++){
//     let x = str.charCodeAt(i);
//     if(x>=48 && x<=57){
//         sum+=parseInt(str[i]);
//     }
//     else{
//         sum+=x;
//     }
// }

// console.log(sum);


// two characters sum is to be taken


// let str = "1245";

// let sum = 0;

// for(let i=0;i<str.length;i+=2){
//     sum+=parseInt(str.substr(i,2));
// }

// console.log(sum);

// isNaN gives false if it is a number and gives true for everything else.


// 5. reverse a string
// let str = "Priyesh Pandey";
// let ans = "";
// for(let i=str.length-1;i>=0;i--){
//     ans += str[i];
// }

// console.log(ans);




// 6. REVERSE THE STRING WORD BY WORD
// let str = "Priyesh Pandey";
// let ans = "";
// let psi = 0; // previous space index
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i)==" " || i==str.length-1){
//         for(let j=i;j>=psi;j--){
//             if(str.charAt(j)!=" ")
//             ans+=str[j];
//         }
//         ans+=" ";
//         psi=i;
//     }
// }

// console.log(ans);





// 7. Check weather string is palindrome or not
let str = "naman";
let ans = "";
let flag = true;
for(let i=0;i<str.length/2;i++){
    if(str.charAt(i)!=str.charAt(str.length-i-1)){
        flag = false;
        break;
    }
}

console.log(flag);




