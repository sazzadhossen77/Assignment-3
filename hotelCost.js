function hotelCost(hoteldays = 0) {
    if (hoteldays <= 0){
       console.log("In Hotel Must Be Greater Than 0"); 
    }
    else if (hoteldays <= 10) {
        return hoteldays * 100;
    } 
    else if (hoteldays <= 20) {
        return 10 * 100 + (hoteldays - 10) * 80;
    } 
    else {
        var totalCost = 10 * 100 + 10 * 80 + (hoteldays - 20) * 50;
        return totalCost;
    }
}
console.log(hotelCost(30));