// Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Return the maximum number of water bottles you can drink.

const numWaterBottles = (numBottles, numExchange) => {
    let exchanged = 0;
    let bottles = numBottles
    
    while (bottles >= numExchange) {
        bottles -= (numExchange - 1);
        exchanged++
    }
    return numBottles + exchanged
}

// 1. Declare exchange and set it to 0
// 2. Declare bottles and set it to numBottles
// 3. Use while loop to create loop until bottles is less than numExchange
// 4. Set bottles to itself minus (numExchange - 1), subtracting the 1 bottle that is added when exchanged
// 5. Increment exchanged by 1
// 6. Return numBottles + exchanged amount to return bottles emptied