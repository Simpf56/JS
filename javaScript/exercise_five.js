
showNumber(10);

// function showNumber(limit){
//     for(i = 0;i <= limit;i++){
//         if (i % 2 === 0) console.log(i, "EVEN");
//         else console.log(i,"ODD")}
// }

function showNumber(limit){
    for(i = 0;i <= limit;i++){
        const message = (i % 2=== 0) ? "EVEN" : "ODD";
        console.log(i, message);
    }}
