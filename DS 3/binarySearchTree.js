// Workout 2: Find the Closest Value to a Given Number in a BST

// class BSTNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }

//     insert(value) {
//         if (value < this.value) {
//             if (this.left === null) {
//                 this.left = new BSTNode(value);
//             } else {
//                 this.left.insert(value);
//             }
//         } else {
//             if (this.right === null) {
//                 this.right = new BSTNode(value);
//             } else {
//                 this.right.insert(value);
//             }
//         }
//     }

//     findClosestValue(target, closest = this.value) {
//         if (Math.abs(target - closest) > Math.abs(target - this.value)) {
//             closest = this.value;
//         }

//         if (target < this.value && this.left) {
//             return this.left.findClosestValue(target, closest);
//         } else if (target > this.value && this.right) {
//             return this.right.findClosestValue(target, closest);
//         } else {
//             return closest;
//         }
//     }
// }

// // Usage example
// const bst = new BSTNode(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(13);
// bst.insert(17);

// console.log("Closest value to 12:", bst.findClosestValue(12));
// console.log("Closest value to 8:", bst.findClosestValue(8));



// Workout 3: Validate Whether a Given Tree is a BST

// class BSTNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }

//     insert(value) {
//         if (value < this.value) {    
//             if (this.left === null) {
//                 this.left = new BSTNode(value);
//             } else {
//                 this.left.insert(value);
//             }
//         } else {
//             if (this.right === null) {
//                 this.right = new BSTNode(value);
//             } else {
//                 this.right.insert(value);
//             }
//         }
//     }

//     static isBST(node, min = null, max = null) {
//         if (node === null) return true;
//         if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
//             return false;
//         }
//         return BSTNode.isBST(node.left, min, node.value) && BSTNode.isBST(node.right, node.value, max);
//     }
// }

// // Usage example
// const bst = new BSTNode(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(13);
// bst.insert(17);

// console.log("Is BST:", BSTNode.isBST(bst));

// // Creating a non-BST for validation
// const nonBST = new BSTNode(10);
// nonBST.left = new BSTNode(15); // Invalid BST node

// console.log("Is non-BST:", BSTNode.isBST(nonBST));








// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode;
//             } else {
//                 this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 this.insertNode(root.right, newNode);
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return null;
//         } else {
//             if (root.value === value) {
//                 return root;
//             } else if (value < root.value) {
//                 return this.search(root.left, value);
//             } else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }

//     findDegree(value) {
//         const node = this.search(this.root, value);
//         if (!node) {
//             return -1; // Node not found
//         }

//         let degree = 0;
//         if (node.left) degree++;
//         if (node.right) degree++;

//         return degree;
//     }

//     height(root) {
//         if (root === null) {
//             return -1; // Height of an empty tree is -1
//         } else {
//             const leftHeight = this.height(root.left);
//             const rightHeight = this.height(root.right);
//             return Math.max(leftHeight, rightHeight) + 1;
//         }
//     }


//     max(root) {
//         if(!root.right) {
//             return root.value;
//         } else {
//             return this.max(root.right);
//         }
//     }
// }

// const bst = new BST();

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.findDegree(10)); // Output: 2 (has two children: 5 and 15)
// console.log(bst.findDegree(5));  // Output: 2 (has two children: 3 and 7)
// console.log(bst.findDegree(3));  // Output: 0 (no children)
// console.log(bst.findDegree(7));  // Output: 0 (no children)
// console.log(bst.findDegree(20)); // Output: -1 (node not found)

// console.log(bst.max(bst.root)); // Output: 15 (the largest number in the BST)

// console.log("Height of the tree:", bst.height(bst.root)); // Output: Height of the tree: 2

  


// validateBST

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode;
//             } else {
//                 this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 this.insertNode(root.right, newNode);
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return null;
//         } else {
//             if (root.value === value) {
//                 return root;
//             } else if (value < root.value) {
//                 return this.search(root.left, value);
//             } else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     validateBST(root, min = -Infinity, max = Infinity) {
//         if (root === null) {
//             return true;
//         }

//         if (root.value <= min || root.value >= max) {
//             return false;
//         }

//         return (
//             this.validateBST(root.left, min, root.value) &&
//             this.validateBST(root.right, root.value, max)
//         );
//     }
// }

// // Example usage:
// const bst = new BST();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log("Is the tree a valid BST?", bst.validateBST(bst.root)); // Output: Is the tree a valid BST? true








