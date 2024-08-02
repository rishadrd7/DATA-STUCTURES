
// // Workout 1: Implementing Heap Sort

// class HeapSort {
//     constructor(array) {
//         this.array = array;
//     }

//     sort() {
//         this.buildMaxHeap();
//         for (let i = this.array.length - 1; i > 0; i--) {
//             [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
//             this.heapify(0, i);
//         }
//     }

//     buildMaxHeap() {
//         for (let i = Math.floor(this.array.length / 2); i >= 0; i--) {
//             this.heapify(i, this.array.length);
//         }
//     }

//     heapify(index, heapSize) {
//         let largest = index;
//         const left = 2 * index + 1;
//         const right = 2 * index + 2;

//         if (left < heapSize && this.array[left] > this.array[largest]) {
//             largest = left;
//         }

//         if (right < heapSize && this.array[right] > this.array[largest]) {
//             largest = right;
//         }

//         if (largest !== index) {
//             [this.array[index], this.array[largest]] = [this.array[largest], this.array[index]];
//             this.heapify(largest, heapSize);
//         }
//     }
// }

// // Usage example
// const array = [12, 11, 13, 5, 6, 7];
// const heapSort = new HeapSort(array);
// heapSort.sort();
// console.log("Sorted array is:", array);






// function heapSort(arr){
//     buildMaxHeap(arr)

//     for(let i=arr.length-1 ; i>0;i--){
//         [arr[0] , arr[i]] = [arr[i] , arr[0]]
//         heapify(arr, 0 , i)
//     }
// }

// function buildMaxHeap(arr){
//     for(let i = Math.floor(arr.length /2)-1; i>=0;i--) {
//         heapify(arr, i, arr.length)
//     }
// }

// function heapify(arr, index, heapSize){
//     let largest = index
//     const left = 2 * index + 1
//     const right = 2 * index + 2

//     if(left < heapSize && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < heapSize && arr[right] > arr[largest]) {
//         largest = right
//     }

//     if(largest !== index){
//         [arr[index],  arr[largest]] = [arr[largest], arr[index]]
//         heapify(arr, largest, heapSize)
//     }
// }



// const arr = [5,7,9,4,2,-1]
// heapSort(arr)
// console.log(arr)





