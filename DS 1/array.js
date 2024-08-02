
//find max number and count

// let arr=[1,2,3,4,5,6,4,7,7,7,7,9,8];

// let maxElement=0
// let maxCount=0

// for(let i=0;i<arr.length-1;i++){
//     let count=1;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     if(count>maxCount){
//         maxCount=count;
//         maxElement=arr[i]
//     }
// }

// console.log('maxElement=' , maxElement);
// console.log('count=' ,maxCount);





// let arr=[1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
// let maxNum=0
// let maxCount=0

// for(let i=0;i<arr.length-1;i++){
//     let count=1
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
//     if(count>maxCount){
//         maxCount=count
//         maxNum=arr[i]
//     }
// }
// console.log(maxNum);
// console.log(maxCount);






//find target equal number

// let arr=[4,5,3,6,7,8,2,3,1];
// const target=10;

// const newSet=new Set()

// function findTarget(nums,target){
//     for(let i=0;i<nums.length-1;i++){
//         let matchNum=target-nums[i];
//         if(newSet.has(matchNum)){
//             return [matchNum,nums[i]]
//         }else{
//             newSet.add(nums[i])
//         }
//     }
//     return [0,0]
// }
// console.log(findTarget(arr,target));






// // Creating a Set
// const mySet = new Set();

// // Adding elements to the Set
// mySet.add('apple');
// mySet.add('banana');
// mySet.add('orange');

// // Checking if an element exists in the Set using has()
// console.log(mySet.has('apple'));   // Output: true
// console.log(mySet.has('grape'));   // Output: false

// // Using has() in conditional statements
// if (mySet.has('banana')) {
//     console.log('Banana exists in the Set.');
// } else {
//     console.log('Banana does not exist in the Set.');
// }




// One-dimensional array
// let arr1 = [1, 2, 3, 4, 5];
// console.log("One-dimensional array:");
// console.log(arr1);

// // Accessing elements
// console.log("First element:", arr1[0]);
// console.log("Last element:", arr1[arr1.length-1]);


// Two-dimensional array
// let arr2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   console.log("Two-dimensional array:");
//   console.log(arr2);
  
//   // Accessing elements
//   console.log("Element at (0,0):", arr2[0][0]);
//   console.log("Element at (2,1):", arr2[2][1]);
  

// multi-dimensional array
// let arr3 = [
//     [
//       [1, 2, 3],
//       [4, 5, 6]
//     ],
//     [
//       [7, 8, 9],
//       [10, 11, 12]
//     ]
//   ];
//   console.log("Three-dimensional array:");
//   console.log(arr3);
  
//   // Accessing elements
//   console.log("Element at (0,0,0):", arr3[0][0][0]);
//   console.log("Element at (1,1,2):", arr3[1][1][2]);
  

// Dynamic array
// let arr4 = [1, 2, 3];
// console.log("Dynamic array before push:");
// console.log(arr4);

// // Adding elements
// arr4.push(4);
// arr4.push(5);
// console.log("Dynamic array after push:");
// console.log(arr4);

// // Removing elements
// arr4.pop();
// console.log("Dynamic array after pop:");
// console.log(arr4);


// Jagged array
// let arr5 = [
//     [1, 2],
//     [3, 4, 5],
//     [6, 7, 8, 9]
//   ];
//   console.log("Jagged array:");
//   console.log(arr5);
  
//   // Accessing elements
//   console.log("Element at (0,1):", arr5[0][1]);
//   console.log("Element at (2,3):", arr5[2][3]);
  


