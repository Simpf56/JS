
for (let i = 5; i >= 1; i--) {
    if(i % 2 !== 0) console.log(i);
}
// This i is different than the one above it
// let i = 0;
// while (i <= 5) {
//    if(i % 2 !== 0) console.log(i);
//    i++;
// } 


// do-while is always run even if the statement is false 
let i = 0;
do {
    if(i % 2 !== 0) console.log(i);
    i++;
} while( i <= 5);