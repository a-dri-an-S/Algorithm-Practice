// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//     numberOfBoxesi is the number of boxes of type i.
//     numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
// Return the maximum total number of units that can be put on the truck.

const maximumUnits = (boxTypes, truckSize) => {
    let totalUnits = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    for (let box of boxTypes) {
        while (box[0] > 0 && truckSize > 0) {
            truckSize--
            box[0]--
            totalUnits += box[1]
        }
    }
    return totalUnits
}

// 1. Declare totalUnits and set it to 0
// 2. sort boxTypes via Array.sort() from unit descending order ( boxTypes[i][1] )
// 3. Use for loop to iterate through boxTypes
// 4. Use while loop to sum total # of units before truck gets full
//  - while there are boxes and truck is full, subtract space in truck, subtract box loaded and add units to totalUnits
// 5. Return totalUnits