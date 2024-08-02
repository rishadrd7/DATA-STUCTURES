
// class Stack {
//     constructor(){
//         this.items = [];
//     }
    
//     push(element) {
//         this.items.push(element);
//     }
//     pop() {
//         if(this.isEmpty()) return 'Stack is emoty';
//         return this.items.pop();
//     }

//     peek() {
//         if(this.isEmpty()) return 'Stack is empty';
//         return this.items[this.items.length-1]
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     size() {
//         return this.items.length
//     }
    
//     clear(){
//         this.items = []
//     }
    
// }

// let stack = new Stack();
// stack.push(10)
// stack.push(20)
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.isEmpty());



//stack in linked list

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor() {
//         this.top = null
//     }


//     push(data) {
//         const newNode = new Node(data)
//         newNode.next = this.top
//         this.top = newNode
//     }
//     pop() {
//         if (this.top === null) { 
//             return null;
//         }
//         const poppedNode = this.top; 
//         this.top = this.top.next; 
//         return poppedNode.data; 
//     }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(50)

// console.log(stack.pop());  
// console.log(stack.pop());  
// console.log(stack.pop());  
// console.log(stack.pop());  




// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }

//     push(data) {
//         const newNode =  new Node(data)
//         newNode.next = this.top
//         this.top = newNode
//     }
//     pop(){
//         if(this.top === null) {
//             return null
//         }
//         const poppedNode = this.top
//         this.top = this.top.next
//         return poppedNode.data
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.pop())








//======================stack in linkedList

// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }


// class Stack{
//   constructor(){
//     this.top = null;
//     this.size = 0
//   }

//   push(value){
//     const newNode =  new Node(value)
//     if(this.top) {
//       newNode.next = this.top;
//     }
//     this.top = newNode
//     this.size++
//   }

//   pop(){
//     if(!this.top) return null;
//     const value = this.top.value
//     this.top = this.top.next
//     this.size--
//     return value
//   }
//   peek(){
//     if(!this.top) return null;
//     return this.top.value
//   }

//   isEmpty(){
//     return this.size===0
//   }
//   size(){
//     return this.size
//   }
//   print(){
//     let current = this.top
//     let value = []
//     while(current){
//         value.push(current.value)
//         current =  current.next
//     }
//     console.log(value)
// }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
 
// console.log(stack.peek());
// console.log(stack.pop())
// console.log(stack.peek())
// stack.push(10)


// stack.pop()
// stack.pop()




// stack array

//  class Stack {
//     constructor(){
//         this.items = []
//     }

//     push(element) {
//         this.items.push(element)
//     }

//     pop() {
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length -1]
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
//  }

//  const stack = new Stack()
//  console.log(stack.isEmpty())
//  stack.push(20)
//  stack.push(10)
//  stack.push(30)
//  console.log(stack.size())
//  stack.print()
//  console.log(stack.pop())
//  console.log(stack.peek())
//  stack.print()




// stack object

// class Stack {
//     constructor(){
//         this.items = {}
//         this.count = 0
//     }
//     push(element) {
//         this.items[this.count] = element
//         this.count++
//     }
//     pop() {
//         if(this.isEmpty()){
//             return undefined
//         }
//         this.count--
//         const item = this.items[this.count]
//         delete this.items[this.count]
//         return item
//     }
//     peek(){
//         if(this.isEmpty()){
//             return undefined
//         }
//         return this.items[this.count -1]
//     }
//     size() {
//         return this.count
//     }
//     isEmpty(){
//         return this.count === 0
//     }
//     print() {
//         console.log(this.items)
//     }
// }


// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.size())
// console.log(stack.isEmpty())
// stack.print()





//delete middle element

// function deleteMiddle(stack){
//     function removeMiddle(stack,currentIndex,middleIndex){
//         if(stack.length===0|| currentIndex===middleIndex) {
//             return;
//         }

//         const topElement = stack.pop()

//         removeMiddle(stack,currentIndex +1 ,middleIndex)

//         if(currentIndex !== middleIndex-1){
//             stack.push(topElement)
//         }
//     }

//     const middleIndex = Math.floor((stack.length+1)/2);
//     removeMiddle(stack,0,middleIndex)
// }

// const stack = [1,2,3,4,5]
// console.log(stack,'stack');
// deleteMiddle(stack)
// console.log(stack);




//reverse string a stack

// function reverseStackName(name){
//     let stack = []
//     for(let i=0;i<name.length;i++){
//         stack.push(name[i])
//     }
//     let reversedName = ''
//     while(stack.length>0){
//         reversedName += stack.pop()
//     }
//     return reversedName
// }
// const name = 'hello world'
// const res = reverseStackName(name)
// console.log(res)





//====stack in linkedlist===


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     push(value){
//         const  newNode = new Node(value)
//         if(this.top){
//             newNode.next = this.top
//         }
//         this.top = newNode
//         this.size++
//     }
//     pop(){
//         if(!this.top) return null
//         const value = this.top.value
//         this.top = this.top.next
//         this.size--
//         return value
//     }

//     print(){
//         let current = this.top
//         let value = []
//         while(current){
//             value.push(current.value)
//             current =  current.next
//         }
//         console.log(value)
//     }

// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()

// stack.pop()
// stack.print()






