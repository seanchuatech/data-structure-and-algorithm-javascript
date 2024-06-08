/*
[https://leetcode.com/problems/course-schedule/](https://leetcode.com/problems/course-schedule/)

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
*/
function canFinish(numCourses, prerequisites) {
    const adjacencyList = new Array(numCourses).fill(0).map(() => []); // Initialize adjacency list
    const inDegree = new Array(numCourses).fill(0); // Initialize in-degree array
  
    // Build adjacency list and in-degree array
    for (const [course, prerequisite] of prerequisites) {
      adjacencyList[prerequisite].push(course);
      inDegree[course]++;
    }
  
    const queue = []; // Queue for topological sorting
    for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) {
        queue.push(i); // Start with courses that have no prerequisites
      }
    }
  
    let count = 0; // Count of completed courses
    while (queue.length > 0) {
      const currentCourse = queue.shift();
      count++;
  
      // Process neighbors (courses that depend on the current course)
      for (const neighbor of adjacencyList[currentCourse]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  
    return count === numCourses; // All courses can be finished if count equals numCourses
  }
  
  /* Example Usage: */
  const numCourses1 = 2;
  const prerequisites1 = [[1, 0]];
  console.log(canFinish(numCourses1, prerequisites1)); // Output: true
  
  const numCourses2 = 2;
  const prerequisites2 = [[1, 0], [0, 1]]; // Cycle
  console.log(canFinish(numCourses2, prerequisites2)); // Output: false
  
  /*
  Explanation:
  
  1. Adjacency List and In-degree:
     - Create an `adjacencyList` to store the courses that depend on each course.
     - Create an `inDegree` array to track the number of prerequisites for each course.
  
  2. Build Graph:
     - Iterate through the `prerequisites` array and build the `adjacencyList` and `inDegree` array.
  
  3. Topological Sort (BFS):
     - Initialize a queue `queue` and add all courses with in-degree 0 (no prerequisites) to it.
     - While the queue is not empty:
       - Dequeue a course `currentCourse`.
       - Increment the `count` of completed courses.
       - For each neighbor (course that depends on `currentCourse`):
         - Decrement its in-degree.
         - If the in-degree becomes 0, enqueue the neighbor.
  
  4. Check if All Courses Can Be Finished:
     - If the `count` of completed courses equals `numCourses`, it means we were able to take all courses in a valid order, so return `true`.
     - Otherwise, there's a cycle in the dependencies, and it's not possible to finish all courses, so return `false`.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(V + E), where V is the number of courses (numCourses) and E is the number of dependencies (prerequisites.length).
  
  Space Complexity: O(V + E) - The adjacency list and in-degree array can take up to V + E space in the worst case.
  */
  