

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BSTNode{
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
//                 this.insertNode(root.left ,  newNode)
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
//             return null
//         }else{
//             if(root.value === value){
//                 return root
//             }else if(value< root.value){
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right, value)
//             }
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     findHeight(value){
//         const node = this.search(this.root, value)
//         if(!node){
//             return -1
//         }
//         let height = 0
//         if(node.left) height++
//         if(node.right) height++
//         return height
//     }

//     height(root){
//         if(root === null){
//             return -1
//         }else{
//            const leftHeight = this.height(root.left)
//            const rightHeight = this.height(root.right)
//            return Math.max(leftHeight, rightHeight)+1
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
// }


// const bst = new BSTNode()

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(2)
// bst.insert(8)

// // console.log(bst.search(bst.root, 10))

// // bst.inOrder(bst.root)
// // bst.preOrder(bst.root)

// console.log(bst.height(bst.root))
