/**Adapted for Javascript from Peter Norvig's essay on Sudoku */

function cross(a, b) {
    let c = new Set();

    for (let a1 of a.values()) {
        for (let b1 of b.values() || b) {
        c.add(a1 + b1);
        }
    }

    return c;
}

const rows = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
const cols = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
const digits = "123456789"
const squares = cross(rows, cols);

function getUnitList() {
    return [...cols].map(c => cross(rows, new Set(c)))
      .concat([...rows].map(r => cross(new Set(r), cols)))
      .concat((() => {
        let u = [];
        [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']].forEach(r => {
          [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']].forEach(c => {
            u.push(cross(new Set(r), new Set(c)))
          })
        });

        return u;
      })());
}

const unitList = getUnitList();

const units = new Map();
[...squares].forEach(s => units.set(s,unitList.filter(u=>u.has(s))));

function getPeers() {
    let p = new Map();
    [...squares].forEach(s => {
        let unit = units.get(s);
        p.set(s, new Set([...new Set([...unit[0], ...unit[1], ...unit[2]])].filter(element => element !== s)));
    });
    return p;
}

const peers = getPeers(); 

export default {
    units, 
    unitList,
    rows, 
    cols,
    digits, 
    squares,
    peers,
    cross
}