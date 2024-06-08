/*
[https://leetcode.com/problems/asteroid-collision/](https://leetcode.com/problems/asteroid-collision/)

We are given an array asteroids of integers representing asteroids in a row.
*/
function asteroidCollision(asteroids) {
    const stack = []; // Simulate a stack to keep track of remaining asteroids
  
    for (const ast of asteroids) {
      let survived = true;
  
      while (stack.length > 0 && ast < 0 && stack[stack.length - 1] > 0) {
        // Collision condition: Current asteroid is moving left, and top of the stack is moving right
        const top = stack[stack.length - 1]; 
        if (Math.abs(ast) > top) { // If the incoming asteroid is larger, remove the top and continue
          stack.pop();
        } else if (Math.abs(ast) === top) { // If both have the same size, remove both and stop
          stack.pop();
          survived = false;
          break;
        } else { 
          survived = false; // If the incoming asteroid is smaller, it explodes (doesn't survive)
          break;
        }
      }
      
      if (survived) {
        stack.push(ast); // Push the asteroid onto the stack if it survived
      }
    }
    return stack;
  }
  
  /* Example Usage: */
  console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
  console.log(asteroidCollision([8, -8])); // Output: []
  console.log(asteroidCollision([10, 2, -5])); // Output: [10]
  
  /*
  Explanation:
  
  1. Stack: 
     - We use a stack (`stack`) to represent the asteroids that are still moving rightward.
  
  2. Iterate through Asteroids:
     - For each `ast` in the `asteroids` array:
       - `survived`: Flag to track if the current asteroid survives collisions.
       - We enter a while loop to handle potential collisions:
          - Condition:  If there are asteroids in the stack, and the current asteroid is moving left (`ast < 0`), and the top of the stack is moving right (`stack[stack.length - 1] > 0`), there's a potential collision.
          - Collision Handling:
             - Compare the absolute values (sizes) of the current asteroid and the top of the stack.
             - If the incoming asteroid is larger, pop the top of the stack and continue the loop to check for further collisions.
             - If they are the same size, pop the top and mark the current asteroid as destroyed (`survived = false`).
             - If the incoming asteroid is smaller, mark it as destroyed (`survived = false`).
          - Break: We break the while loop if the current asteroid is destroyed or no more collisions are possible.
  
  3. Push Survivor: If the asteroid survives the collision check (`survived === true`), push it onto the stack.
  
  4. Return Stack: After processing all asteroids, the `stack` contains the remaining asteroids that will not collide.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - In the worst case, we might have to process each asteroid once, and in some scenarios, an asteroid might be compared with multiple asteroids in the stack before it explodes. However, each asteroid is added and removed from the stack only once, resulting in overall linear time complexity.
  
  Space Complexity: O(n) - In the worst case, all asteroids might be moving to the right and remain in the stack.
  */
  