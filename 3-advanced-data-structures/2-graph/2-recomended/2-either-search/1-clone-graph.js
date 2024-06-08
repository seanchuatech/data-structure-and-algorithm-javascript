/*
[https://leetcode.com/problems/clone-graph/](https://leetcode.com/problems/clone-graph/)

Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
*/
// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  };
  
  
  function cloneGraph(node) {
    if (!node) return null; // Handle empty graph
  
    const visited = new Map(); // Map to track visited nodes and their clones
    const queue = [node]; // Queue for BFS traversal
  
    // Clone the starting node
    visited.set(node, new Node(node.val));
  
    // BFS traversal
    while (queue.length > 0) {
      const current = queue.shift();
  
      // Iterate through neighbors
      for (const neighbor of current.neighbors) {
        if (!visited.has(neighbor)) { // If neighbor is not visited
          visited.set(neighbor, new Node(neighbor.val)); // Clone the neighbor
          queue.push(neighbor); // Add the neighbor to the queue
        }
        // Connect the cloned nodes
        visited.get(current).neighbors.push(visited.get(neighbor)); 
      }
    }
  
    return visited.get(node); // Return the cloned starting node
  }
  
  /* Example Usage: */
  const adjList1 = [[2, 4], [1, 3], [2, 4], [1, 3]];
  // Create the graph represented by adjList1 
  // (Implementation of createGraphFromAdjList is left as an exercise)
  const node1 = createGraphFromAdjList(adjList1); 
  const clonedNode1 = cloneGraph(node1);
  console.log(clonedNode1); 
  // Output: The structure will be same as the input graph but with new Node instances.
  
  // ... similar examples for adjList2 and adjList3 ...
  
  /*
  Explanation:
  
  1. Visited Map:
     - We use a `visited` map to track visited nodes and their corresponding clones.
     - Key: original node
     - Value: cloned node
  
  2. Queue for BFS:
     - We initialize a queue `queue` with the starting `node`.
  
  3. Clone Starting Node:
     - We create a clone of the starting `node` and store it in the `visited` map.
  
  4. BFS Traversal:
     - While the `queue` is not empty:
       - Dequeue a node (`current`).
       - For each neighbor of `current`:
         - If the neighbor hasn't been visited yet:
           - Create a clone of the neighbor and store it in the `visited` map.
           - Enqueue the neighbor.
         - Get the cloned version of `current` and the cloned version of the neighbor from the `visited` map.
         - Add the cloned neighbor to the neighbors list of the cloned `current`.
  
  5. Return Cloned Node:
     - Finally, return the cloned version of the starting node, which is the root of the deep copy.
  
  Time and Space Complexity:
  
  Time Complexity: O(V + E), where V is the number of vertices (nodes) and E is the number of edges in the graph.
  
  Space Complexity: O(V) - The `visited` map and queue will store at most V nodes.
  */
  