
// function longestPrefix(arr){
//     // looping through the first string in the array
//     for(let i=0; i<arr[0].length, i++;){
//         for(let j=0; j<=arr.length; j++){
//             if(arr[0][i] != arr[j][i]){
//                 return array[0].slice(0, i)
//             }

//         }
//     }
//     return str[0];
// }

function longestprefix(arr){
    // looping through the first Strings characters
 for (let i=0; i<=arr[0].length; i++){
  
    for(let j =1; j<arr.length; j++){
     if(arr[0][i] !=arr[j][i]){
        console.log(arr[0].slice(0,i));
     }
     }
 }
}
const array = ["flour", "flower", "floor"]

