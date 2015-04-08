var coinCombo = function(change) {

    var coins = [0, 0, 0, 0];

    var cents = change * 100;

    do {
        switch (cents > 0) {
            //quarter
             case (cents >= 25):
                var quarters = Math.floor(cents / 25);
                coins[0] = quarters;
                cents -= (quarters * 25);
            //dimes
            case (cents >= 10):
                var dimes = Math.floor(cents / 10);
                coins[1] = dimes;
                cents -= (dimes * 10);
            //nickels
            case (cents >= 05):
                var nickels = Math.floor(cents / 05);
                coins[2] = nickels;
                cents -= (nickels * 05);
            //pennies
            case (cents >= 01):
                var pennies = Math.floor(cents / 01);
                coins[3] = pennies;
                cents = 0;
                // cents -= (pennies * 01);
                break;
        }
    }
    while (cents > 0);



console.log(coins);
    return coins;

};
