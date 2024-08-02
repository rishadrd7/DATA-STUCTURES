


//====queue in linked list==========

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.top = null
//         this.rear = null
//         this.size = 0
//     }
//     enqueue(value){
//         const newNode = new Node(value)
//         if(this.rear){
//             this.rear.next = newNode
//         }else{
//             this.top = newNode
//         }
//         this.rear = newNode
//         this.size++
//     }

//     dequque(){
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
//             current = current.next
//         }
//         console.log(value);
//     }
// }


// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.print()

// queue.dequque()
// queue.print()




// queue array

// class Queue {
//     constructor(){
//         this.items = []
//     }
//      enqueue(element){
//         this.items.push(element)
//      }
//      dequeue() {
//         return this.items.shift()
//      }
//      peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//      }
//      isEmpty() {
//         return this.items.length===0
//      }
//      size(){
//         return this.items.length
//      }

//      print() {
//         console.log(this.items.toString())
//      }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// queue.print();
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.print();




//queue object

// class Queue {
//     constructor() {
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }
//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++;
//     }
//     dequeue() {
//         const item = this.items[this.front];
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     peek() {
//         return this.items[this.front];
//     }
//     size(){
//         return this.rear -this.front;
//     }
//     isEmpty() {
//         return this.rear - this.front === 0;
//     }
//     print() {
//         console.log(this.items);
//     }
// }



// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// queue.print();
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.isEmpty());
// queue.print();




//remove Odd elements in queue


// class Queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return 'empty'
//         }
//         return this.items.shift()
//     }
//     front(){
//         if(this.isEmpty()){
//             return 'empty'
//         }
//         return this.items[0]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length
//     }
// }

// function removeOddElements(queue){
//     let size = queue.size()
//     for(let i=0;i<size;i++){
//         let element = queue.dequeue()
//         if(element %2===0){
//             queue.enqueue(element)
//         }
//     }
// }

// const  queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)

// removeOddElements(queue)
// console.log(queue.items);





// reverseQueue

// class Queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return 'empty'
//         }
//         return this.items.shift()
//     }
//     front(){
//         if(this.isEmpty()){
//             return 'empty'
//         }
//         return this.items[0]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     size(){
//         return this.items.length
//     }
// }

// function reverseQueue(queue){
//     if(queue.isEmpty()){
//         return 
//     }
// const reverse = queue.dequeue()
// reverseQueue(queue)
// queue.enqueue(reverse)
// }

// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)

// reverseQueue(queue)
// console.log(queue);



