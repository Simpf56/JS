let x = 10;
let y = 3;

console.log(x ** y);

function makeBreakfast (main, side, drink) {
    console.log(...arguments);
    return `Breakfast is ${main}, ${side}, and ${drink}.`;
}

makeBreakfast("Sausage","Eggs","Milk")