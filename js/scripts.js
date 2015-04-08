var coinCombo = function(change) {

    var coins = [0, 0, 0, 0];

    //quarter
    if (change >= 0.25) {
        var quarters = (change / 0.25);
        coins[0] = quarters;
        change -= (quarters * 0.25);
    //dimes
    } else if (change >= 0.10) {
        var dimes = (change / 0.10);
        coins[1] = dimes;
        change -= (dimes * 0.10);
    //nickels
    } else if (change >= 0.05) {
        var nickels = (change / 0.05);
        coins[2] = nickels;
        change -= (nickels * 0.05);
    } else {
    //pennies
    coins[3] = (change / 0.01);
    }
//    var dimes = 0;
//    var quarters = 0;

    // nickels = (change / .05);
    // pennies = (change / .01);
    //
    //
    // if ((change % .05) > 0) {
    //     pennies = ((change % .05) / .01);
    // }

console.log(coins);
    return coins;

};
