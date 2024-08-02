
//Normal method

// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key , value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key) {
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display() {
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }
// const table = new HashTable(50)

// table.set("name" , "Rishad")
// table.set("age" , "21")
// table.display()

// console.log(table.get("name"))
// table.set('mane' , 'clarck')
// table.display()






// class hashTable {
//   constructor(size){
//     this.table = new Array(size)
//     this.size = size
//   }
//   hash(key){
//     let total = 0
//     for(let i=0;i<key.length;i++){
//       total += key.charCodeAt(i)
//     }
//     return total%this.size
//   }
//   set(key,value){
//     const index = this.hash(key)
//     this.table[index] = value
//   }
//   get(key){
//     const index = this.hash(key)
//     return this.table[index]

//   }
//   remove(key){
//     const index = this.hash(key)
//     this.table[index] = undefined
//   }
//   display() {
//     for(let i=0;i<this.table.length;i++){
//       if(this.table[i]){
//         console.log(i,this.table[i])
//       }
//     }
//   }

// }

// const table = new hashTable(50)
// table.set('name' , 'rishad')
// table.set('age' ,'20')
// table.display()

// console.log(table.get('name'))
// table.set('place' , 'calicut')
// table.display()





//  Hash Table :-

// class HashTable {

//   constructor(size) {
      
//       this.table = new Array(size)
//       this.size = size

//   }

//   hash(key) {
      
//       let total = 0

//       for (let i = 0; i < key.length; i++) {

//           total += key.charCodeAt(i)
          
//       }

//       return total % this.size

//   }

//   set(key, value) {
      
//       const indx = this.hash(key)
//       this.table[indx] = value

//   }

//   get(key) {
      
//       const indx = this.hash(key)
//       return this.table[indx]

//   }

//   remove(key) {
      
//       const indx = this.hash(key)
//       this.table[indx] = undefined

//   }

//   display() {
      
//       for (let i = 0; i < this.table.length; i++) {

//           if (this.table[i]) {

//               console.log(i , this.table[i]);
              
//           }
          
//       }

//   }

// }

// const table = new HashTable(50)

// table.set('name','Ansal')
// table.display()

// console.log(table.get("name"));

// table.remove('name')
// table.display()





//  Hash Table Managing Collision :-

// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }


    
// set(key,value){
//     const index = this.hash(key)
//     const bucket = this.table[index]

//     if(!bucket){
//         this.table[index] = [[key , value]]
//     }else{
//         let sameKey = bucket.find(keyy => keyy[0] === 0)

//         if(sameKey){
//             sameKey[0] = value
//         }else{
//             bucket.push([key,value])
//         }
//     }
// }


// get(key){
//     let index = this.hash(key)
//     let bucket = this.table[index]

//     if(bucket){
//         let sameKey = bucket.find(keyy => keyy[0] === key)
//         if(sameKey){
//             return sameKey[1]
//         }
//     }
//     return undefined
//  }


//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let sameKey = bucket.find(keyy => keyy[0] === key)

//             if(sameKey){
//                 return bucket.splice(bucket.indexOf(sameKey) ,1)
//             }
//         }
//     }


//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }


// const table = new HashTable(50)
// table.set('name' , 'rishad')
// table.display()

// console.log(table.remove('name'))
// table.display()






// class HashTable {
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value){
//         const index = this.hash(key);
//         const bucket = this.table[index];

//         if(!bucket){
//             this.table[index] = [[key, value]];
//         } else {
//             let sameKey = bucket.find(item => item[0] === key);

//             if(sameKey){
//                 sameKey[1] = value;
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key);
//         const bucket = this.table[index];

//         if(bucket){
//             let sameKey = bucket.find(item => item[0] === key);
//             if(sameKey){
//                 return sameKey[1];
//             }
//         }
//         return undefined;
//     }

//     remove(key){
//         const index = this.hash(key);
//         const bucket = this.table[index];

//         if(bucket){
//             let sameKey = bucket.find(item => item[0] === key);

//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey), 1);
//                 return sameKey[1]; 
//             }
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const table = new HashTable(50);
// table.set('name', 'rishad');
// table.display();

// console.log(table.remove('name')); 
// table.display();





//hashtable using for show duplicats

// function findDuplicats(arr){
//   const hashTable ={}
//   const duplicats = []

//   for(let i=0;i<arr.length;i++){
//     if(hashTable[arr[i]]){
//       duplicats.push(arr[i])
//     }else{
//       hashTable[arr[i]] = true
//     }
//   }
//   return duplicats
// }

// const arr = [1,2,3,4,5,1,2,3]
// const res = findDuplicats(arr)
// console.log(res)




//remove duplicats

// function removeDuplicats(arr){
//   const hashTable = {}
//   const array =[]
  
//   for(let i=0;i<arr.length;i++){
//     if(!hashTable[arr[i]]){
//       hashTable[arr[i]] = true
//       array.push(arr[i])
//     }
//   }
//   return array
// }

// const arr = [1,2,3,4,5,1,2,3]
// const res = removeDuplicats(arr)
// console.log(res);




//remove characters

// function removeDuplicats(name){
//   let hashTable = {}
//   let result = ""

//   for(let i=0;i<name.length;i++){
//     let char = name[i]
//     if(!hashTable[char]) {
//       hashTable[char] = true
//       result += char
//     }
//   }
//   return result
// }

// const name = 'aaabbbcccddd'
// const res = removeDuplicats(name)
// console.log(res)





//chaining

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.buckets = Array(size).fill(null).map(() => []);
//     }

//     hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         const bucket = this.buckets[index];
//         const existing = bucket.find(item => item.key === key);
//         if (existing) {
//             existing.value = value;
//         } else {
//             bucket.push({ key, value });
//         }
//     }

//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.buckets[index];
//         const found = bucket.find(item => item.key === key);
//         return found ? found.value : undefined;
//     }

//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.buckets[index];
//         const itemIndex = bucket.findIndex(item => item.key === key);
//         if (itemIndex !== -1) {
//             bucket.splice(itemIndex, 1);
//         }
//     }
// }

// // Usage example:
// const ht = new HashTable(50);
// ht.set('name', 'Alice');
// ht.set('age', 25);
// console.log(ht.get('name')); // Alice
// console.log(ht.get('age')); // 25
// ht.remove('name');
// console.log(ht.get('name')); // undefined




//oppen addressing(linear probing   )

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.buckets = Array(size).fill(null);
//     }

//     hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.size;
//     }

//     set(key, value) {
//         let index = this.hash(key);
//         while (this.buckets[index] !== null && this.buckets[index].key !== key) {
//             index = (index + 1) % this.size;
//         }
//         this.buckets[index] = { key, value };
//     }

//     get(key) {
//         let index = this.hash(key);
//         while (this.buckets[index] !== null) {
//             if (this.buckets[index].key === key) {
//                 return this.buckets[index].value;
//             }
//             index = (index + 1) % this.size;
//         }
//         return undefined;
//     }

//     remove(key) {
//         let index = this.hash(key);
//         while (this.buckets[index] !== null) {
//             if (this.buckets[index].key === key) {
//                 this.buckets[index] = null;
//                 return;
//             }
//             index = (index + 1) % this.size;
//         }
//     }
// }



// const ht = new HashTable(50);
// ht.set('name', 'Alice');
// ht.set('age', 25);
// console.log(ht.get('name')); // Alice
// console.log(ht.get('age')); // 25
// ht.remove('name');
// console.log(ht.get('name')); // undefined





