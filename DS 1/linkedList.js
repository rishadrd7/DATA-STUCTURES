// Linked List Classes

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
//     }
// }

// const list = new LinkedList()
// console.log('List is empty?' , list.isEmpty())
// console.log('List size' , list.getSize());




//================linked List Prepend=================

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
      
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//         }else{
//             node.nect = this.head
//             this.head = node
//         }
//         this.size++

//     }
// }


// const list = new LinkedList()
// console.log('List is empty?' , list.isEmpty())
// console.log('List size' , list.getSize());
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)


// ==============Linked List Print=================

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//         // console.log(value);
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
    
//     isEmpty() {
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty');
//         }else{
//             let curr = this.head
//             let listValues= ''
//             while(curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }

// }

// const list  = new LinkedList()
// console.log('List is empty', list.isEmpty());
// console.log('List size' , list.getSize());
// list.print()

// list.prepend(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.print()



//==============prepend linkedlist==========================================

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     prepend(data) {
//         const newNode = new Node(data); // Step 1
//         newNode.next = this.head; // Step 2
//         this.head = newNode; // Step 3
//     }

//     printList() {
//         let current = this.head;
//         let result = '';
//         while (current) {
//             result += current.data + ' -> ';
//             current = current.next;
//         }
//         result += 'null';
//         console.log(result);
//     }
// }

// // Example usage
// const linkedList = new LinkedList();
// linkedList.prepend(3);
// linkedList.prepend(2);
// linkedList.prepend(1);
// linkedList.printList();




//================Linked list append================================

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
    
//     isEmpty() {
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }

//     //O(1)
//     // prepend(value){
//     //     const node = new Node(value)
//     //     if(this.isEmpty()){
//     //         this.head = node
//     //     } else {
//     //         node.next = this.head
//     //         this.head = node
//     //     }
//     //     this.size++
//     // }



//     //O(n)
//     append(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next) {
//               prev = prev.next  
//             }
//             prev.next = node
//         }
//         this.size++
//     }





//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty');
//         }else{
//             let curr = this.head
//             let listValues= ''
//             while(curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }


// }

// const list  = new LinkedList()
// console.log('List is empty', list.isEmpty());
// console.log('List size' , list.getSize());
// list.print()

// list.append(10)
// list.print()

// list.append(20)
// list.append(30)
// list.print()



//=======================Insert linked List==========================

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class insertLinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
//     }
//     prepend(value) {
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++    
//     }

//     insert(value , index) {
//         if(index < 0 || index > this.size) {
//             return
//         }
//         if(index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0;i<index-1;i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }   
//     }

//     print() {
//         if(this.isEmpty()) {
//             console.log('List is empty')
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new insertLinkedList()
// list.print()

// list.insert(10, 0)
// list.print()

// list.insert(20, 0)
// list.print()

// list.insert(30, 1)
// list.print()

// list.insert(40, 2)
// list.print()

// console.log(list.getSize());

// ======================singly linked list============================

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class singlyLinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
    
//     append(data) {
//         const newNode= new Node(data)
//         if(!this.head){
//             this.head = newNode;
//         }else{
//             let current = this.head;
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//         this.size++
//     }

//     printList(){
//         let current = this.head
//         let str = "";
//         while(current) {
//             str += current.data + " -> ";
//             current = current.next;
//         }
//         str += 'null'
//         console.log(str);
//     }
    
// }

// const singlyLL = new singlyLinkedList();
// singlyLL.append(1);
// singlyLL.append(2);
// singlyLL.append(3);
// singlyLL.printList()





//=================doubly linkedlist=================================

// class DoublyNode {
//     constructor(data) {
//         this.data=data;
//         this.prev=null
//         this.next=null
//     }
// }

// class DoublyLinkedList {
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }

//     append(data) {
//         const newNode = new DoublyNode(data);
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//         }else{
//             newNode.prev=this.tail
//             this.tail.next = newNode
//             this.tail=newNode
//         }
//         this.size++
//     }
//     printList(){
//         let current = this.head;
//         let str= ""
//         while(current){
//             str += current.data + "<->";
//             current = current.next
//         }
//         str += "null";
//         console.log(str);
//     }
// }

// const DoubleLL = new DoublyLinkedList();
// DoubleLL.append(1)
// DoubleLL.append(2)
// DoubleLL.append(3)
// DoubleLL.printList()



// =====================reverse linked list===================

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next = null;
//     }
// }

// class singlyLinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }

//     append(data) {
//         const newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//         }else{
//             let current = this.head;
//             while(current.next){
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         this.size++
//     }

//     printList(){
//         let current = this.head;
//         let str = "";
//         while(current){
//             str+= current.data + "->";
//             current = current.next;
//         }
//         str += "null";
//         console.log(str);
//     }

//     reverse(){
//         let prev = null;
//         let current = this.head;
//         let next = null;

//         while(current) {
//             next = current.next;
//             current.next = prev;
//             prev=current;
//             current=next;
//         }
//         this.head = prev;
//     }
// }

// const reverseLL = new singlyLinkedList();
// reverseLL.append(1);
// reverseLL.append(2);
// reverseLL.append(3);

// console.log("Normal LinkedList");
// reverseLL.printList();

// reverseLL.reverse()

// console.log('\nReverse LinkedList');
// reverseLL.printList()



// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class singlyLinkedList{
//     constructor(){
//         this.head = null
//         this.size =0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     append(data){
//         const newNode = new Node(data)
//         if(!this.head){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//         this.size++
//     }

//     printLikst(){
//         let current = this.head
//         let str = ''
//         while(current){
//             str+= current.data + "->"
//             current = current.next
//         }
//         str += "null"
//         console.log(str);
//     }

//     reverse(){
//         let prev = null
//         let current = this.head
//         let next = null

//         while(current){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }
//         this.head = prev
//     }
// }

// const reverseLL = new singlyLinkedList()
// reverseLL.append(1)
// reverseLL.append(2)
// reverseLL.append(3)
// reverseLL.reverse()
// reverseLL.printLikst()


//============Linked list insertion===========



//     Singly linked list 
// class Node {
//     constructor(value) {
//       this.value = value
//       this.next = null
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null
//       this.size = 0
//     }
//     isEmpty() {
//       return this.size === 0
//     }
//     getSize() {
//       return this.size
//     }
//     print() {
//       if (this.isEmpty()) {
//         console.log('list is empty');
//         return
//       }
//       let curr = this.head
//       let a = ''
//       while (curr) {
//         a += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(a);
//     }
//     //    adding a node at the front of the list
//     prepend(value) {
//       const node = new Node(value)
//       if (this.isEmpty()) {
//         this.head = node
//       } else {
//         node.next = this.head
//         this.head = node
//       }
//       this.size++
//     }
//     //    adding a node in the end of the list
//     append(value) {
//       const node = new Node(value)
//       if (this.isEmpty()) {
//         this.head = node
//       } else {
//         let curr = this.head
//         while (curr.next) {
//           curr = curr.next
//         }
//         curr.next = node
//       }
//       this.size++
//     }
//     //     inserting a value by basis of index(with 'for' loop iteration)
//     insert(value, index) {
//       if (index < 0 || index > this.size) {
//         return null
//       }
//       if (index === 0) {
//         this.prepend(value)
//       } else {
//         let node = new Node(value)
//         let curr = this.head
  
//         for (let i = 0; i < index - 1; i++) {
//           curr = curr.next
//         }
//         node.next = curr.next
//         curr.next = node
//         this.size++
//       }
//     }
//     //     reverse the linked list
//     reverse() {
//       let prev = null
//       let curr = this.head
//       while (curr != null) {
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//       }
//       this.head = prev
//     }
//     //      deleting value in the basis of value
//     deleteByValue(value) {
//       if (this.head.value === value) {
//         this.head = this.head.next
//       } else {
//         let curr = this.head
//         while (curr.next) {
//           if (curr.next.value === value) {
//             curr.next = curr.next.next
//           } else {
//             curr = curr.next
//           }
//         }
//       }
//       this.size--
//     }
//     //      deleting a value in the basis of index(iterate with 'for' loop)
//     deleteByIndex(index) {
//       if (index === 0) {
//         this.head = this.head.next
//       } else {
//         let curr = this.head
//         for (let i = 0; i < index - 1; i++) {
//           curr = curr.next
//         }
//         curr.next = curr.next.next
//       }
//       this.size--
//     }
//     //     searching index by values
//     search(value) {
//       if (this.isEmpty()) {
//         return null
//       }
//       let i = 0
//       let curr = this.head
//       while (curr) {
//         if (curr.value == value) {
//           return i
//         }
//         curr = curr.next
//         i++
//       }
//       return -1
//     }
//     //      deleting duplcate elements in the list
//     removeDuplicate() {
//       let curr = this.head
//       while (curr) {
//         let run = curr
//         while (run.next) {
//           if (curr.value === run.next.value) {
//             run.next = run.next.next
//           } else {
//             run = run.next
//           }
//         }
//         curr = curr.next
//       }
//     }
//   }
  
  
//   const list = new LinkedList()
//   list.print()
//   list.prepend(4)
//   list.prepend(7)
//   list.print()
//   list.append(3)
//   list.append(9)
//   list.print()
//   list.insert(6, 2)
//   list.insert(88, 3)
//   list.print()
//   list.reverse()
//   list.print()
//   list.deleteByValue(9)
//   list.deleteByIndex(2)
//   list.print()
//   const arr = [5, 26, 7, 3, 8]
//   arr.forEach(value => list.append(value))
//   list.print()
//   list.removeDuplicate()
//   list.print()




//==============find sum elements in linkedlist===============


// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  

//     add(data) {
//       let newNode = new Node(data);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next !== null) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//     }
  


//     sum() {
//       let current = this.head;
//       let total = 0;
  
//       while (current !== null) {
//         total += current.data;
//         current = current.next;
//       }
  
//       return total;
//     }
//   }
  


//   let list = new LinkedList();
//   list.add(1);
//   list.add(2);
//   list.add(3);
//   list.add(4);
//   list.add(5);
  
//   console.log("Sum of all elements:", list.sum());
  