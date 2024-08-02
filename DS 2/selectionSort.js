

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if(minIndex !==i){
//             [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
//         }
//     }
//     return arr
// }

// const arr = [5,3,8,4,2]
// console.log(selectionSort(arr));






// function selectionSort(arr){
//     let n = arr.length
//     for(let i=0;i<n-1;i++){
//         let mid = i
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[mid]){
//                 mid = j
//             }
//         }
//         if(mid !== i){
//             let temp = arr[i]
//             arr[i] = arr[mid]
//             arr[mid] = temp 
//         }
//     }
// }

// const arr = [3,-3,4,76,2,7]
// selectionSort(arr)
// console.log(arr)




