/*
[https://leetcode.com/problems/flood-fill/](https://leetcode.com/problems/flood-fill/)

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
*/
function floodFill(image, sr, sc, color) {
    const originalColor = image[sr][sc]; // Store the original color of the starting pixel
    
    // If the starting pixel is already the target color, there's no need to flood fill.
    if (originalColor === color) {
        return image;
    }
  
    // Depth-First Search (DFS) to fill connected pixels
    const dfs = (row, col) => {
      if (
        row < 0 ||
        col < 0 ||
        row >= image.length ||
        col >= image[0].length ||
        image[row][col] !== originalColor
      ) {
        return;
      }
  
      image[row][col] = color; // Change the color of the current pixel
      dfs(row - 1, col); // up
      dfs(row + 1, col); // down
      dfs(row, col - 1); // left
      dfs(row, col + 1); // right
    };
  
    dfs(sr, sc); // Start the flood fill from the starting pixel
    return image;
  }
  

/* Example Usage: */
const image1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
const sr1 = 1;
const sc1 = 1;
const color1 = 2;

const filledImage1 = floodFill(image1, sr1, sc1, color1);
console.log(filledImage1);
// Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]


/*
Explanation:

1. Store Original Color: 
   - We save the original color of the starting pixel so we can compare it with neighboring pixels.

2. Check Base Cases:
   - If the starting pixel is already the new `color`, we return the original `image` as there's nothing to change.

3. Depth-First Search (DFS):
   - The `dfs` function recursively explores the image:
     - It checks if the current position (`row`, `col`) is valid (within bounds) and if the pixel color matches the `originalColor`.
     - If both conditions are met, it changes the pixel color to the `newColor`.
     - It recursively calls itself for the four neighboring pixels (up, down, left, right).

4. Start DFS:
   - We call `dfs` starting from the given starting position (`sr`, `sc`).
*/


/*
Time and Space Complexity:

Time Complexity: O(m * n), where m is the number of rows and n is the number of columns in the image. In the worst case, we might visit every pixel in the image.

Space Complexity: O(m * n) in the worst case due to the recursive call stack.
*/
