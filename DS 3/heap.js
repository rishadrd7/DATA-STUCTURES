

// Workout 1: Create a Min-Heap

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     buildHeap(array) {
//         this.heap = array;
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//             this.heapifyDown(i);
//         }
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     remove() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }

//     heapifyUp(index) {
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[index] >= this.heap[parentIndex]) break;
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//         }
//     }

//     heapifyDown(index) {
//         while (index < this.heap.length) {
//             const leftIndex = 2 * index + 1;
//             const rightIndex = 2 * index + 2;
//             let smallestIndex = index;

//             if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
//                 smallestIndex = leftIndex;
//             }
//             if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
//                 smallestIndex = rightIndex;
//             }
//             if (smallestIndex === index) break;

//             [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
//             index = smallestIndex;
//         }
//     }
// }


// const minHeap = new MinHeap();
// minHeap.buildHeap([10, 20, 15, 30, 40]);
// console.log(minHeap.heap);

// minHeap.insert(5);
// console.log(minHeap.heap);

// console.log(minHeap.remove());
// console.log(minHeap.heap);






// Workout 2: Create a Max-Heap

// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     buildHeap(array) {
//         this.heap = array;
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//             this.heapifyDown(i);
//         }
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     remove() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const root = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return root;
//     }

//     heapifyUp(index) {
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[index] <= this.heap[parentIndex]) break;
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//         }
//     }

//     heapifyDown(index) {
//         while (index < this.heap.length) {
//             const leftIndex = 2 * index + 1;
//             const rightIndex = 2 * index + 2;
//             let largestIndex = index;

//             if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largestIndex]) {
//                 largestIndex = leftIndex;
//             }
//             if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largestIndex]) {
//                 largestIndex = rightIndex;
//             }
//             if (largestIndex === index) break;

//             [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
//             index = largestIndex;
//         }
//     }
// }

// // Usage example
// const maxHeap = new MaxHeap();
// maxHeap.buildHeap([10, 20, 15, 30, 40]);
// console.log(maxHeap.heap);

// maxHeap.insert(50);
// console.log(maxHeap.heap);

// console.log(maxHeap.remove());
// console.log(maxHeap.heap);








// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[index] <= this.heap[parentIndex]) break;
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//         }
//     }

//     findMax() {
//         if (this.heap.length === 0) return null;
//         return this.heap[0];
//     }
// }


// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         while (index > 0) {
//             const parentIndex = Math.floor((index - 1) / 2);
//             if (this.heap[index] >= this.heap[parentIndex]) break;
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//         }
//     }

//     findMin() {
//         if (this.heap.length === 0) return null;
//         return this.heap[0];
//     }
// }

// // Usage example
// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(20);
// maxHeap.insert(15);
// maxHeap.insert(30);
// maxHeap.insert(40);

// console.log(maxHeap.findMax()); // Output will be the maximum element in the max heap

// const minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(20);
// minHeap.insert(15);
// minHeap.insert(30);
// minHeap.insert(40);

// console.log(minHeap.findMin()); // Output will be the minimum element in the min heap
