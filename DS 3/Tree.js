//  Implementing a Binary Search Tree (BST)

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

//     inOrderTraversal() {
//         if (this.left) {
//             this.left.inOrderTraversal();
//         }
//         console.log(this.value);
//         if (this.right) {
//             this.right.inOrderTraversal();
//         }
//     }
// }

// const bst = new BSTNode(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(13);
// bst.insert(17);

// bst.inOrderTraversal();






// binary Search tree and DFS


// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySEarchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()) {
//             this.root = newNode 
//         } else{
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, newNode) {
//         if(newNode.value < root.value) {
//             if(root.left === null) {
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         } 
//         else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, value){
//         if(!root){
//             return false
//         }else {
//             if(root.value === value) {
//                 return true
//             }else if(value < root.value) {
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right , value)
//             }
//         }
//     }

//     preOrder(root) {
//         if(root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root) {
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }
     
// }

// const bst = new BinarySEarchTree()
// console.log("tree is empty" , bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root , 10))
// console.log(bst.search(bst.root , 5))
// console.log(bst.search(bst.root , 15))
// console.log(bst.search(bst.root , 20))

// bst.postOrder(bst.root)





//binary search tree and BFS

// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySEarchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()) {
//             this.root = newNode 
//         } else{
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, newNode) {
//         if(newNode.value < root.value) {
//             if(root.left === null) {
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         } 
//         else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, value){
//         if(!root){
//             return false
//         }else {
//             if(root.value === value) {
//                 return true
//             }else if(value < root.value) {
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right , value)
//             }
//         }
//     }

//     levelOrder() {

//         const queue = []
//         queue.push(this.root)
//         while(queue.length) {
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left) {
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
     
// }

// const bst = new BinarySEarchTree()
// console.log("tree is empty" , bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root , 10))
// console.log(bst.search(bst.root , 5))
// console.log(bst.search(bst.root , 15))
// console.log(bst.search(bst.root , 20))

// bst.levelOrder(bst.root)




// BST min and max

// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySEarchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()) {
//             this.root = newNode 
//         } else{
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, newNode) {
//         if(newNode.value < root.value) {
//             if(root.left === null) {
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         } 
//         else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, value){
//         if(!root){
//             return false
//         }else {
//             if(root.value === value) {
//                 return true
//             }else if(value < root.value) {
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right , value)
//             }
//         }
//     }

//     min(root) {
//         if(!root.left) {
//             return root.value
//         }else {
//             return this.min(root.left)
//         }
//     }
    
//     max(root) {
//         if(!root.right) {
//             return root.value
//         }else {
//             return this.max(root.right)
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
// }



// const bst = new BinarySEarchTree()
// console.log("tree is empty" , bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root , 10))
// console.log(bst.search(bst.root , 5))
// console.log(bst.search(bst.root , 15))
// console.log(bst.search(bst.root , 20))

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))



// Delete method

// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySEarchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()) {
//             this.root = newNode 
//         } else{
//             this.insertNode(this.root, newNode)
//         }
//     }
//     insertNode(root, newNode) {
//         if(newNode.value < root.value) {
//             if(root.left === null) {
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         } 
//         else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, value){
//         if(!root){
//             return false
//         }else {
//             if(root.value === value) {
//                 return true
//             }else if(value < root.value) {
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right , value)
//             }
//         }
//     }

//     levelOrder() {

//                 const queue = []
//                 queue.push(this.root)
//                 while(queue.length) {
//                     let curr = queue.shift()
//                     console.log(curr.value)
//                     if(curr.left) {
//                         queue.push(curr.left)
//                     }
//                     if(curr.right){
//                         queue.push(curr.right)
//                     }
//                 }
//             }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right) {
//             return root.value
//         }else {
//             return this.max(root.right)
//         }
//     }
    
//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value){
//         if(root === null) {
//             return root
//         }
//         if(value < root.value) {
//             root.left = this.deleteNode(root.left , value)
//         }else if(value > root.vaue) {
//             root.right = this.deleteNode(root.right, value)
//         }else{
//             if(!root.left && !root.right) {
//                 return null
//             }
//             if(!root.left) {
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }
     
// }

// const bst = new BinarySEarchTree()
// console.log("tree is empty" , bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// bst.levelOrder()

// bst.delete(3)
// bst.levelOrder()
 



// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root , newNode)
//         }
//     }
//     insertNode(root, newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, value){    
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left, value)
//             }else{
//                 this.search(root.right,  value)
//             }
//         }
//     }

//     preOreder(root){
//         if(root){
//             console.log(root.value)
//             this.preOreder(root.left)
//             this.preOreder(root.right)
//         }
//     }
//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
// }

// const bst = new BinarySearchTree()

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root, 10));

// bst.levelOrder(bst.root)
// console.log(bst.min(bst.root) , "min num")









