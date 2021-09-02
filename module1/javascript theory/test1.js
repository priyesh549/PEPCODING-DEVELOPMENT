// question -> 1
// function frames(a,b){
//     let ans = a*b*60;
//     return ans;
// }

// console.log(frames(10,25));


// question -> 2
// function addup(n){
//     return (n*(n+1)/2);
// }

// console.log(addup(13));


// question -> 3
// function converttoBase10(n){
//     return parseInt(n,2);
// }
// console.log(converttoBase10('1010'));


// question -> 4
// function tuckin(arr1,arr2){
//     let newArr = [arr1[0],...arr2,arr1[1]];
//     return newArr;
// }

// console.log(tuckin([[1,2],[5,6]],[[3,4]]));


// question -> 5 .... Awantika ka code.
// function CountTrue(arr){
//     let count =0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==true){
//             count++;
//         }
//     }
//     console.log(count);
// }
// CountTrue([true,false,false,true,true]);


// question -6
// let arr = [];
// function mult(num,length){
//     for(let i=1;i<=length;i++){
//         arr.push(i*num);  
//     }
//     return arr;
// }

// let ans  = mult(12,10);
// console.log(ans);

// question - 7
// let count = 0; 
// function countinarr(arr){
//     for(let i=0;i<arr.length;i++){
//         if(typeof(arr[i])=="object"){
//             countinarr(arr[i]);
//         }
//         else{
//             count++;
//         }
//     }
//     return count;
// }

// let ans = countinarr([1,[2,[3,4]]]);
// console.log(ans);



// question - 9
function missing(arr1,arr2){
    // for(let i=arr1.length;i>=0;i--){
    //     for(let j=i;j>=0;j--){
    //         if(arr1[i]==arr2[j]){
    //             arr1.splice(i,1);
    //             arr2.splice(j,1);
    //         }
    //     }
    // }
    arr1 = arr1.filter(val => !arr2.includes(val));
    console.log(arr1[0]);
}


missing([2,1,3,4,5,6,7,8],[1,2,3,4,6,7,8]);







