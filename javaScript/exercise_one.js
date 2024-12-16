
let number = max(16,3);
console.log(number);

function max(a,b){
   if (a > b) return a;
   return b;
} 

//* Same function as the one above
function max(a,b){
    return (a > b) ? a : b;
}
