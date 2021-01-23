function budgetCalculator(watch=0, phone=0, laptop=0){

    if ( watch < 0){

        console.log("Number of Watches must be above than 0");

    }
    if ( phone < 0){

        console.log("Number of phones must be above than 0");
    }
    if ( laptop < 0){

        console.log("Number of laptops must be above than 0");
    }
    else{

        return watch*50 + phone*100 + laptop*500;
    }
}
var totalBudget = budgetCalculator(2,1,2);
console.log(totalBudget);
