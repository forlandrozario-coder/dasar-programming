let rows = 4;
let cols = 5;

let pattern = "";


for (let i = 0; i < rows; i++) {
     for (let j = 0; j < cols; j++) {
        pattern += "* ";
    }
    pattern += "\n"; 
}

console.log(pattern);