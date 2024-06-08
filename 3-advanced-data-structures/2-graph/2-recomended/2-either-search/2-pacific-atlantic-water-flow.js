/*
[https://leetcode.com/problems/pacific-atlantic-water-flow/](https://leetcode.com/problems/pacific-atlantic-water-flow/)

here is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
*/

function pacificAtlantic(heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
    const result = [];

    // Helper function for DFS (Depth-First Search)
    const dfs = (row, col, visited, prevHeight) => {
        if (
            row < 0 ||
            col < 0 ||
            row >= m ||
            col >= n ||
            visited[row][col] ||
            heights[row][col] < prevHeight
        ) {
            return; // Out of bounds, visited before, or lower height
        }

        visited[row][col] = true;

        // Explore neighbors
        dfs(row - 1, col, visited, heights[row][col]);
        dfs(row + 1, col, visited, heights[row][col]);
        dfs(row, col - 1, visited, heights[row][col]);
        dfs(row, col + 1, visited, heights[row][col]);
    };

    // DFS from Pacific borders
    for (let r = 0; r < m; r++) {
        dfs(r, 0, pacific, -1);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, pacific, -1);
    }

    // DFS from Atlantic borders
    for (let r = 0; r < m; r++) {
        dfs(r, n - 1, atlantic, -1);
    }
    for (let c = 0; c < n; c++) {
        dfs(m - 1, c, atlantic, -1);
    }

    // Find cells reachable by both oceans
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
}


/* Example Usage: */
const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];
const reachableCells = pacificAtlantic(heights);
console.log(reachableCells);

/*
Explanation:

1. Initialize:
   - `pacific` and `atlantic` matrices: To mark cells reachable by each ocean.
   - `result` array: To store coordinates of cells reachable by both.

2. DFS from Borders:
   - Start DFS from the top and left edges (Pacific) and mark reachable cells in `pacific`.
   - Start DFS from the bottom and right edges (Atlantic) and mark reachable cells in `atlantic`.
   - Pass `-1` as the initial `prevHeight` in DFS so that water can always flow from the borders.

3. Check Intersection:
   - Iterate through both `pacific` and `atlantic` matrices.
   - If a cell is marked as true in both, it means water can flow from it to both oceans. Add its coordinates to `result`.
*/

/*
Time and Space Complexity:

Time Complexity: O(m * n) - Each cell is visited at most twice (once from each ocean's DFS).

Space Complexity: O(m * n) - Two m x n matrices (`pacific` and `atlantic`) are used. The recursion depth of DFS is at most m * n in the worst case.
*/
