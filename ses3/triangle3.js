let height = 5;
let triangle = "";

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
        triangle += "* ";
    }
    triangle += "\n";
}

console.log("Standard Triangle:\n" + triangle);

let upsideDownTriangle = "";

for (let i = height; i >= 1; i--) {
   for (let j = 1; j <= i; j++) {
        upsideDownTriangle += "* ";
    }
    upsideDownTriangle += "\n";
}

console.log("Upside Down Triangle:\n" + upsideDownTriangle);