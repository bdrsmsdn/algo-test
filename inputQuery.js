const INPUT = ['xc', 'dz', 'bbb', 'dz']  
const QUERY = ['bbb', 'ac', 'dz']  

let OUTPUT = [];
for (let i = 0; i < QUERY.length; i++) {
    let count = 0;
    const item = QUERY[i];

    for (let j = 0; j < INPUT.length; j++) {
        const itemInput = INPUT[j];

        if(item == itemInput){
            count++
        }
        
    }
    OUTPUT.push(count)
}

console.log(OUTPUT);