
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
//   console.log(bubbleSort([5, 3, 8, 4, 2]));



// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     }
//     while (swapped)
// }

// const arr = [8,20,-2,4,-6]
// bubbleSort(arr)
// console.log(arr);

// Big O = O(n^2)





// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }
//     while(swapped)
// }
// const arr=[1,5,-2,8,-6,22]
// bubbleSort(arr)
// console.log(arr)



//recursive bubbleSort

// function recursiveBubbleSort(arr,n = arr.length){
//     if(n==1) return;

//     for(let i=0;i<n-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp;
//         }
//     }
//     recursiveBubbleSort(arr,n-1)
// }
// const arr = [1,-4,-6,7,20,25]
// recursiveBubbleSort(arr)
// console.log(arr)








