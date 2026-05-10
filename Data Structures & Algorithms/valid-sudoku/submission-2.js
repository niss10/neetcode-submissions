class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // This problem is solved intuitively
    // Time Complexity = O(n^2)
    // Space Complexity = O(n^2)
    isValidSudoku(board) {
        const validSudokuRow = new Map();
        const validSudokuCol = new Map();
        const validSudokuSquare = new Map();

        for(let row = 0; row < board.length; row++){
            if(!validSudokuRow.has(row)){
                validSudokuRow.set(row, new Set())
            }
            const rowStats = validSudokuRow.get(row);
            for(let col = 0; col < board[row].length; col++){
                if(!validSudokuCol.has(col)){
                    validSudokuCol.set(col, new Set());
                }
                const colStats = validSudokuCol.get(col);
                const squareKey = Math.floor(row/3) + '-' + Math.floor(col/3);
                if(!validSudokuSquare.has(squareKey)){
                    validSudokuSquare.set(squareKey, new Set());
                }
                const squareStats = validSudokuSquare.get(squareKey);
                const element = board[row][col];
                if(element === ".") continue;

                if(rowStats.has(element) || colStats.has(element) || squareStats.has(element)) return false;

                rowStats.add(element);
                colStats.add(element);
                squareStats.add(element);
                
            }
        }
        return true
    }
}
