// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
// Return the total number of seconds that Ashe is poisoned.

const findPoisonedDuration = function(timeSeries, duration) {
    let count = 0;
    
    for (let i = 0; i < timeSeries.length; i++) {
        const timePoisoned = timeSeries[i] + duration - 1;
        if (timePoisoned < timeSeries[i + 1] || i === timeSeries.length - 1) {
            count += duration;
        } else if (timePoisoned >= timeSeries[i + 1]) {
            count += Math.abs(timeSeries[i] - timeSeries[i + 1])
        }
    }
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through timeSeries array
// 3. Declare timePoisoned and set it to current value in timeSeries added to duration, subtracted by 1
//  - This returns an integer that represents the last second before the poison wares off
// 4. If timePoisoned is less than the next value in timeSeries OR current index-i is equal to last index in timeSeries, sum duration to count
// 5. Else, if timePoisoned is greater than or equal to next value in timeSeries, sum the absolute difference between current value and next value in timeSeries to count
// 6. Return count