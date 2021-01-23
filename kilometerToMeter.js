function kilometerToMeter(n=0){

    if ( n<= 0){

        console.log("Input must be greater than 0");

    }
    else{
        var meter = n*1000; /** 1km=1000 meter*/
        return meter;
    }
}
var lengthMeter = kilometerToMeter(1.5);
console.log(lengthMeter);