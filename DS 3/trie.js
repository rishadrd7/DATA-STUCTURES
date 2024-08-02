

// Workout 1: Implementing a Basic Trie

// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     search(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.isEndOfWord;
//     }

//     startsWith(prefix) {
//         let node = this.root;
//         for (let char of prefix) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }
// }

// // Usage example
// const trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple"));   
// console.log(trie.search("app"));     
// console.log(trie.startsWith("app")); 
// trie.insert("app");
// console.log(trie.search("app"));     





// class trieNode{
//     constructor(){
//         this.child={}
//         this.wordEnd = false
//     }
// }
 
// class trie{
//     constructor(){
//         this.root = new trieNode()

//     }
//     insert(word){
//         let currentNode = this.root;
//        for(let char of word ){
//         if(!currentNode.child[char]){
//             currentNode.child[char] = new trieNode()
//         }
//         currentNode = currentNode.child[char]

//        }
//        currentNode.wordEnd = true
//     }
//     search(word){
//         let currentNode = this.root
//         for(let char of word){
//             if(!currentNode.child[char]){
//                 return false
//             }
//             currentNode = currentNode.child[char]
//         }
//         return currentNode.wordEnd
//     }

//     prefix(word){
//         let curre = this.root
//         let getWord = ''
//         for(let char of word){
//             if(!curre.child[char]){
//                 return false
//             }
//             curre = curre.child[char]
//             getWord += char
//         }
//         console.log(getWord);
//         return true
//     }

//     remove(word) {
//         const stack = []; // Store nodes to backtrack if needed
//         let curr = this.root;

//         // Traverse the trie to find the node representing the end of the word
//         for (let char of word) {
//             if (!curr.child[char]) {
//                 // Word not found in the trie
//                 return;
//             }
//             stack.push(curr); // Store the current node before moving to the next
//             curr = curr.child[char];
//         }

//         // If the last node does not represent the end of a word, the word is not in the trie
//         // if (!curr.wordEnd) return;

//         // Remove the word by setting its wordEnd property to false
//         curr.wordEnd = false;

//         // Backtrack through the stack to remove nodes that are not part of other words
//         while (stack.length) {
//             const node = stack.pop();
//             const char = word[stack.length]; // Get the character associated with the node

//             // If the current node has no other children and is not the end of a word, remove it
//             if (Object.keys(node.child).length === 0 && !node.wordEnd) {
//                 delete node.child[char];
//             } else {
//                 // If the current node has children or is the end of a word, stop backtracking
//                 break;
//             }
//         }
//     }

// }

// const tree = new trie()
// const strings = ['apple','orange','orbit','append']
// strings.forEach(e=>tree.insert(e))
// tree.insert("ora")
// tree.remove('ora')
// console.log(tree.search('orange'))
// console.log(tree.search('ora'))






// class trieNode{
//     constructor(){
//         this.child = {}
//         this.wordEnd = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new trieNode()
//     }
//     insert(word) {
//         let node = this.root
//         for(let char of word){
//             if(!node.child[char]){
//                 node.child[char] = new trieNode()
//             }
//             node = node.child[char]
//         }
//         node.wordEnd = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.child[char]){
//                 return false
//             }
//             node = node.child[char]
//         }
//         return node.wordEnd
//     }

//     startWith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.child[char]) {
//                 return false
//             }
//             node = node.child[char]
//         }
//         return true

//     }
// }


// const trie = new Trie()
// trie.insert("apple")

// console.log(trie.search("apple"));
// trie.insert("mango")
// console.log(trie.startWith("ma"));







