

//string reverse using recursion

// let name = "helloworld";
// console.log(name);

// function reverse(name){
//     if(name.length==1){
//         return name;
//     }
//     return reverse(name.substring(1))+name[0];
// }
// console.log(reverse(name));




// let name = "helloworld";

// function WorldHello(name){
//     if(name.length===1){
//         return name
//     }
//     return WorldHello(name.substring(1))+name[0]
// }



// function changeToName(name){
//     const reversed = WorldHello(name);
//     const spaceIndex=reversed.indexOf(" ");
//     const reversedWithSpace = reversed.slice(0, spaceIndex+1)+" " +reversed.slice(spaceIndex+ 1);
//     return reversedWithSpace
// }
// console.log(changeToName(name));





//sum of an array using recursion

// let arr=[10,20,30,40,50];
// let n=arr.length-1;

// function sum(n){
//     if(n==0){
//         return arr[0]
//     }
//     return arr[n]+sum(n-1)
// }
// console.log(sum(n));



//========================simple recursion============================

// function recursion(n){
//     if(n==0){
//         return n
//     }
//     return n+recursion(n-1)
// }
// console.log(recursion(5));


// function recursion(n){
//     if(n==0){
//         return 1
//     }
//     return n*recursion(n-1)
// }
// console.log(recursion(5));



// function recursion(n){
//     if(n==0){
//         return n
//     }
//     return n-recursion(n-1)
// }
// console.log(recursion(5));



//================Fibonacci==================

// function fibonacci(n){
//     const fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(2)); //[0,1]
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(4));




//=========recursive fibonacci=========

// function recursiveFibonacci(n) {
//     if(n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));

//O(n) 
//O (n^2) = time complexity




// function recursiveFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(4));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(7));


//=================factoral of a Number============

// function factoral(n){
//     if(n<0) return "invalid input"
//     let result = 1
//     for(let i=2;i<=n;i++){
//         result = result * i
//     }
//     return result
// }
// console.log(factoral(3));
// console.log(factoral(4));
// console.log(factoral(5));

//Big O = O(n)





//reursive approach

// function factorialRecursive(n){
//     if(n<0) return "invalid input";
//     if(n===0 || n===1) return 1
//     return  n * factorialRecursive(n-1)
// }
// console.log(factorialRecursive(5));

//Big O = O(n)



  
//========================prime number=============================

// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i === 0){
//             return false
//         }
//         return true
//     }
// }
// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(10));

// Big- O = O(n)




//==========power of two===================


//  function isPowerOfTwo(n) {
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2 !== 0){
//             return false
//         }
//         n = n/2
//     }
//     return true
//  }

//  console.log(isPowerOfTwo(1));
//  console.log(isPowerOfTwo(2));
//  console.log(isPowerOfTwo(5));






// // sum of elements in array in recursion 
// function sumOfArray(array){
//     if(array.length===0){
//         return 0
//     }
//     return array[0]+sumOfArray(array.slice(1))
//  }
//  console.log(sumOfArray([3,5,2,6,5,7]));



// //     palindrome usign recursion 
//  function palindromeString(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str.charAt(0) !== str.charAt(str.length-1)){
//         return false
//     }
//     return isPalindrome(str.slice(1,-1))
//  }
//  console.log(palindromeString('hola'));




// // factorial   recursion 
// function factorial(value){
//     if(value===1){
//         return value
//     }
//     return value * factorial(value-1)
// }
// console.log(factorial(5));







//   this is another method for reverse string

// function reverseString(str){
//     if(str===''){
//         return ''
//     }
//     return str.slice(-1)+reverseString(str.slice(0,-1))
// }
// const str='malayalam'
// if(str===reverseString(str)){
//     console.log('yes');
// }else{
//     console.log('not ');
// }




// array reverse recursion

// function reverseArray(arr){
//     if(arr.length===0){
//         return []
//     }
//     return [arr[arr.length-1]].concat(reverseArray(arr.slice(0,-1)))
// }
// let arr=[1,2,3,4,5]
// let res=reverseArray(arr)
// console.log(res);






// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//     }
    
//     add(data){
//         let newNode = new Node(data)
//         if(this.head === null){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next !== null){
//                 current = current.next
//         }
//         current.next = newNode
//         }
//     }

//     sum() {
//         let current = this.head
//         let total = 0

//         while(current !== null) {
//             total += current.data
//             current = current.next
//         }
//         return total
//     }
// }

// const list = new linkedList()
// list.add(20)
// list.add(30)
// console.log(list.sum());








