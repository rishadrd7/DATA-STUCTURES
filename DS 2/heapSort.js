

// // Helper function to swap two elements in an array
// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
  
//   // Heapify a subtree with root at given index
//   function heapify(arr, n, i) {
//     let largest = i; // Initialize largest as root
//     let left = 2 * i + 1; // left child
//     let right = 2 * i + 2; // right child
  
//     // If left child is larger than root
//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }
  
//     // If right child is larger than largest so far
//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }
  
//     // If largest is not root
//     if (largest !== i) {
//       swap(arr, i, largest);
  
//       // Recursively heapify the affected sub-tree
//       heapify(arr, n, largest);
//     }
//   }
  
//   // Main function to perform heap sort
//   function heapSort(arr) {
//     let n = arr.length;
  
//     // Build a max-heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(arr, n, i);
//     }
  
//     // One by one extract an element from heap
//     for (let i = n - 1; i > 0; i--) {
//       // Move current root to end
//       swap(arr, 0, i);
  
//       // Call max heapify on the reduced heap
//       heapify(arr, i, 0);
//     }
  
//     return arr;
//   }
  
//   // Example usage
//   let arr = [12, 11, 13, 5, 6, 7];
//   console.log("Unsorted array:", arr);
  
//   let sortedArray = heapSort(arr);
//   console.log("Sorted array:", sortedArray);
  