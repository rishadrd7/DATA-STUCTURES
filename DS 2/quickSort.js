// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
//     const pivot = arr[arr.length - 1];
//     const left = [], right = [];
//     for (const el of arr.slice(0, arr.length - 1)) {
//       el < pivot ? left.push(el) : right.push(el);
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
//   console.log(quickSort([5, 3, 8, 4, 2]));
  



// function quickSort(arr) {
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot, ...quickSort(right)]

// }

// const arr = [8,20,-2,4,-6];
// console.log(quickSort(arr));


//worst case = O(n^2)


// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// const arr = [3,2,6,2,-3,5]
// console.log(quickSort(arr));



// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot ,...quickSort(right)]
// }

// const arr = [32,5,1,6,2,-3]
// console.log(quickSort(arr))





