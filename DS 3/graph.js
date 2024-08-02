

// class Graph {
//     constructor() {
//         this.adjacencyList = new Map();
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList.has(vertex)) {
//             this.adjacencyList.set(vertex, []);
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
//             this.adjacencyList.get(vertex1).push(vertex2);
//             this.adjacencyList.get(vertex2).push(vertex1);
//         }
//     }

//     printGraph() {
//         for (let [vertex, adjacencyList] of this.adjacencyList) {
//             console.log(vertex + " -> " + adjacencyList.join(', '));
//         }
//     }
// }

// const graph = new Graph();

// // Adding vertices
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// // Adding edges
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');

// // Printing the graph
// graph.printGraph();





// class Graph{
//     constructor(){
//         this.adjacencyList = new Map()
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList.has(vertex)){
//             this.adjacencyList.set(vertex,  [])
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
//             this.adjacencyList.get(vertex1).push(vertex2)
//             this.adjacencyList.get(vertex2).push(vertex1)
//         }
//     }

//     print(){
//         for(let [vertex, adjacencyList] of this.adjacencyList){
//             console.log(vertex + "->" + adjacencyList.join(" "))
//         }
//     }

//     removeVertex(vertex) {
//         if (this.adjacencyList.has(vertex)) {
//             for (let [v, adjacencyList] of this.adjacencyList) {
//                 this.adjacencyList.set(v, adjacencyList.filter(adjacentVertex => adjacentVertex !== vertex));
//             }
//             this.adjacencyList.delete(vertex);
//         }
//     }

//     removeEdge(vertex1, vertex2) {
//         if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
//             this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1).filter(v => v !== vertex2));
//             this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2).filter(v => v !== vertex1));
//         }
//     }
// }

// const graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")


// graph.addEdge("A" , "B")
// graph.addEdge("A" , "C")
// graph.addEdge("B" , "D")
// graph.addEdge("C" , "E")

// graph.print()




// class Graph{
//     constructor(){
//         this.adjacencyList = new Map()
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList.has(vertex)){
//             this.adjacencyList.set(vertex ,[])
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(Math.abs(this.adjacencyList.has(vertex1) && Math.abs(this.adjacencyList.has(vertex2)))){
//             this.adjacencyList.get(vertex1).push(vertex2)
//             this.adjacencyList.get(vertex2).push(vertex1)
//         }
//     }
//     print(){
//         for(let [vertex, adjacencyList] of this.adjacencyList){
//             console.log(vertex + "->" + adjacencyList.join(" "))
//         }
//     }

//     dfsRecursive(start) {
//         const visited = new Set();
//         const result = [];

//         const dfs = (vertex) => {
//             if (!vertex) return;
//             visited.add(vertex);
//             result.push(vertex);
//             this.adjacencyList.get(vertex).forEach(neighbor => {
//                 if (!visited.has(neighbor)) {
//                     dfs(neighbor);
//                 }
//             });
//         };

//         dfs(start);
//         return result;
//     }

//     bfs(start) {
//         const queue = [start];
//         const visited = new Set();
//         const result = [];

//         visited.add(start);

//         while (queue.length) {
//             const vertex = queue.shift();
//             result.push(vertex);

//             this.adjacencyList.get(vertex).forEach(neighbor => {
//                 if (!visited.has(neighbor)) {
//                     visited.add(neighbor);
//                     queue.push(neighbor);
//                 }
//             });
//         }

//         return result;
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")

// graph.addEdge("A" , "B")
// graph.addEdge("A" , "C")
// graph.addEdge("B" , "D")
// graph.addEdge("C" , "E")

// graph.print()

// console.log(graph.dfsRecursive("A"));
// console.log(graph.bfs("A"));




// class Graph{
//     constructor(){
//         this.adjacencyList = new Map()
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList.has(vertex)){
//             this.adjacencyList.set(vertex, [])
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)){
//             this.adjacencyList.get(vertex1).push(vertex2)
//             this.adjacencyList.get(vertex2).push(vertex1)
//         }
//     }

//     print(){
//         for(let [vertex, adjacencyList] of this.adjacencyList){
//             console.log(vertex + "->" + adjacencyList.join(" "));
//         }
//     }
    
    // dfs(start){
    //     const stack = [start]
    //     const visited = new Set()
    //     const result = []

    //     visited.add(start)
    //     while(stack.length){
    //         const vertex = stack.pop()
    //         result.push(vertex)

    //         this.adjacencyList.get(vertex).forEach(neighbor => {
    //             if(!visited.has(neighbor)){
    //                 visited.add(neighbor)
    //                 stack.push(neighbor)
    //             }
    //         })
    //     }
    //     return result
    // }
// }


// const graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")

// graph.addEdge("A" , "B")
// graph.addEdge("A" , "C")
// graph.addEdge("B" , "D")
// graph.addEdge("C" , "E")

// graph.print()

// console.log(graph.dfs("A"))






//matrix

// class Graph{
//     constructor(size){
//         this.size = size
//         this.adjMatrix = Array.from({length: size}, () => Array(size).fill(0))
//     }

//     addEdge(vertex1, vertex2){
//         this.adjMatrix[vertex1][vertex2] = 1
//         this.adjMatrix[vertex2][vertex1] = 1
//     }

//     print(){
//         console.log(this.adjMatrix.map(row => row.join(" ")).join('\n'))
//     }
// }

// const graph = new Graph(4)

// graph.addEdge(0, 1)
// graph.addEdge(0, 2)
// graph.addEdge(1, 3)
// graph.addEdge(2, 3)

// graph.print()
