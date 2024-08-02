//Binary search

// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([-5,2,4,6,10], 10)); // 4
// console.log(binarySearch([-5,2,4,6,10], 6));  // 3
// console.log(binarySearch([-5,2,4,6,10], 20)); // -1







// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1

//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex -1
//         }else{
//             leftIndex = middleIndex +1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5,2,4,6,10], 10)); // 4
// console.log(binarySearch([-5,2,4,6,10], 6));  // 3
// console.log(binarySearch([-5,2,4,6,10], 20)); // -1

//Big O = O(log n)



// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1

//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//             if(target === arr[middleIndex]){
//                 return middleIndex
            
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex -1
//         }else{
//             leftIndex = middleIndex +1
//         }
//     }
//     return -1
// }


// console.log(binarySearch([-5,10,20,30,40],30));
// console.log(binarySearch([-5,10,20,30,40],40));
// console.log(binarySearch([-5,10,20,30,40],50));



// Binary Search Algorithm

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         return mid; // Target found
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Search in the right half
//       } else {
//         right = mid - 1; // Search in the left half
//       }
//     }
  
//     return -1; // Target not found
//   }
  
//   // Usage
//   const sortedArray = [1, 3, 5, 7, 9, 11, 13];
//   const target = 7;
//   const result = binarySearch(sortedArray, target);
//   console.log(result); // Output: 3 (index of the target element)



//==============recursive binary search================

// function recursiveBinarySearch(arr,target){
//     return search(arr, target, 0, arr.length-1)
// }

// function search(arr,target ,leftIndex,rightIndex){
//     if(leftIndex > rightIndex ){
//         return -1
//     
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target===arr[middleIndex]){
//         return middleIndex
//     }



//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }
// }
// console.log(recursiveBinarySearch([-5,2,4,6,10],4));
// console.log(recursiveBinarySearch([-5,2,4,6,10],10));
// console.log(recursiveBinarySearch([-5,2,4,6,10],20));



// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target===arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }
// }
// console.log(recursiveBinarySearch([-5,2,4,6,10],10));
// console.log(recursiveBinarySearch([-5,2,4,6,10],4));
// console.log(recursiveBinarySearch([-5,2,4,6,10],30));






