/**Goal of this is simply to transform given matrix and return matrix */

/** Rotate matrix clockwise */
function rotateRight(matrix)
{
    console.log("Right");

    const N = matrix.length - 1;   
    const result = matrix.map((row, i) => 
         row.map((_, j) => matrix[N - j][i])
    );
    matrix = [];      
    matrix.push(...result); 
    return matrix;
}

/** Rotate matrix anti-clockwise */
function rotateLeft(matrix)
{
    const N = matrix.length - 1;   
    const result = matrix.map((row, i) => 
         row.map((_, j) => matrix[N - j][i])
    ).reverse();
    matrix = [];      
    matrix.push(...result); 
    return matrix;
}

function reflectVertical(matrix)
{
    const N = matrix.length - 1;
    const result = matrix.map((row, i) =>
        row.map((_, j) => matrix[N-i][j])
    );
    matrix = [];      
    matrix.push(...result); 
    return matrix;
}

function reflectHorizontal(matrix) 
{
    const N = matrix.length - 1;
    const result = matrix.map((row, i) =>
        row.map((_, j) => matrix[i][N-j])
    );
    matrix = [];      
    matrix.push(...result); 
    return matrix;
}


export const matrix = {
    rotateLeft,
    rotateRight, 
    reflectVertical,
    reflectHorizontal
}