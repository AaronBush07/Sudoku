import sudoku from "./sudoku"

/**Goal of this is simply to transform given matrix and return matrix */
const digits = "123456789";

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
            return {
                digits
            }
        }));
    }
    return m
}

function all(m) {
    for (let v of m)
    {
        if (!v) 
        {  
            return false;
        }
    }
    return true;
}


/**Algorithm adopted from Peter Norvig's essay on Sudoku. http://norvig.com/sudoku.html. */
function assign(values, s, d) 
{

    let other_values = values.get(s).replace(d,'');
    let d2 = (element) => {if(eliminate(values, s, element) !== false) return true};

    if (other_values.split('').every(d2))
        return values
    else 
        return false;

}

function eliminate(values, s, d)
{
    if (values.get(d) == undefined)
    {
        return values //already eliminated
    }
    values[s] = values.get(s).replace(d, '');

    if (values.get(s).length == 0)
    {
        return false;
    }
    else if (values.get(s).length == 1)
    {
        let d2 = values.get(s);
        let s2 = (element) => {if(eliminate(values, element, d2) !== false) return true};
        
        if (!sudoku.peers.get(s).every(s2))
            return false
    }
    for (let u in sudoku.units.get(s))
    {
        dplaces = [...u].filter(s2 => values.get(s2).includes(d));
        if (dplaces.length == 0)
            return false;
        else if (dplaces.length == 1)
        {
            if(!assign(values, dplaces[0], d))
            {
                return false;
            }
        }
    }
    return values
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
    assign
}