const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

let diagonal1 = 0;
let diagonal2 = 0;

let p = [];
let q = [];

for (let i = 0; i < Matrix.length; i++) {
    const array = Matrix[i][i];
    const array2 = Matrix[i][Matrix.length-1-i]
    
    diagonal1 += array;
    diagonal2 += array2;
    p.push(array);
    q.push(array2);
}

console.log(`Diagonal pertama adalah = ${p.join(' + ')} = ${diagonal1}`);
console.log(`Diagonal kedua adalah = ${q.join(' + ')} = ${diagonal2}`);
console.log(`Maka hasilnya adalah = ${diagonal1 - diagonal2}`);