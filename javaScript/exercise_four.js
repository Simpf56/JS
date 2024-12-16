
checkSpeed(23);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit < speedLimit + kmPerPoint)
        console.log("Ok")
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint)
        if(points >= 12)
            console.log("Licence suspended");
        else
            console.log("Points",points);
}
}