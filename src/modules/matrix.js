import sudoku from "./sudoku"
'use strict'

/**Goal of this is simply to transform given matrix and return matrix */
const digits = "123456789";
const rows = {'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6,'H':7, 'I':8 }

/** Rotate matrix clockwise */
function rotateRight(m)
{
    console.log("Right");

    const N = m.length - 1;   
    const result = m.map((row, i) => 
         row.map((_, j) => m[N - j][i])
    );
    m = [];
    m.push(...result);
    return m;
}

/** Rotate matrix anti-clockwise */
function rotateLeft(m)
{
    const N = m.length - 1;
    const result = m.map((row, i) =>
         row.map((_, j) => m[N - j][i])
    ).reverse();
    m = [];
    m.push(...result);
    return m;
}

function reflectVertical(m)
{
    const N = m.length - 1;
    const result = m.map((row, i) =>
        row.map((_, j) => m[N-i][j])
    );
    m = [];
    m.push(...result);
    return m;
}

function reflectHorizontal(m) 
{
    const N = m.length - 1;
    const result = m.map((row, i) =>
        row.map((_, j) => m[i][N-j])
    );
    m = [];      
    m.push(...result);
    return m;
}

function createBlankMatrix()
{
    let m = []
    for (let k = 0; k < 9; k++) {
        m.push(Array.from({length:9}, () => { 
            return digits
        }));
    }
    return m
}


/**Algorithm adopted from Peter Norvig's essay on Sudoku. http://norvig.com/sudoku.html. */
function assign(values, s, d)
{

    let other_values = values.get(s).replace(d,'');
    let d2 = (element) => {if(eliminate(values, s, element) !== false) return true};

    if (other_values.split('').every(d2))
    {
        return values;
    }
    else
    {
        return false;
    }
}

function eliminate(values, s, d)
{
    if (values.get(s).includes(d) == false)
    {
        return values; //already eliminated
    }
    values.set(s, values.get(s).replace(d, ''));

    if (values.get(s).length == 0)
    {
        return false;
    }
    else if (values.get(s).length == 1)
    {
        let d2 = values.get(s);
        let s2 = (element) => {if(eliminate(values, element, d2) !== false) return true};
        let peers = Array.from(sudoku.peers.get(s));
        if (!peers.every(s2))
        {
            return false;
        }
    }
    for (let u of sudoku.units.get(s))
    {
        let dplaces = [...u].filter(s2 => values.get(s2).includes(d));
        if (dplaces.length == 0)
        {
            return false;
        }
        else if (dplaces.length == 1)
        {
            if(!assign(values, dplaces[0], d))
            {
                return false;
            }
        }
    }
    return values;
}

/**Read 2d array and convert into dictionary values for squares. */
function parseGrid(grid)
{
    let values = new Map();
    sudoku.squares.forEach(s => {
        let i = rows[s.split('')[0].toUpperCase()];
        let k = parseInt(s.split('')[1]) - 1;
        values.set(s, grid[i][k]);
    });

    return values;
}

/**Convert dictionary of squares to a 9x9 2d array */
function squaresToGrid(values)
{
    let m = [];
    for (let k = 0; k < 9; k++) {
        m.push(Array.from({length:9}, () => {
            return digits
        }));
    }
    console.log("squares");
    console.log(values);
    
    sudoku.squares.forEach(s => {
        let i = rows[s.split('')[0].toUpperCase()];
        let k = parseInt(s.split('')[1]) - 1;
        m[i][k] = values.get(s);
    });

    return m;
}

function validateDigits(array)
{
    for (let d in digits)
    {
        if (array.some(element => element == digits[d]) === false)
        {
            return false;
        }
    }
    return true;
}


export const matrix = {
    createBlankMatrix,
    rotateLeft,
    rotateRight, 
    reflectVertical,
    reflectHorizontal,
    validateDigits,
    assign,
    eliminate,
    parseGrid,
    squaresToGrid
}