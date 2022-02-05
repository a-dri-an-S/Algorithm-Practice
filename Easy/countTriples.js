// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

const countTriples = function(n) {
    let count = 0;
    
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            for (let c = b + 1; c <= n; c++) {
                if ((a ** 2) + (b ** 2) === c ** 2) {
                    count += 2;
                }
            }
        }
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop to create loop, starting at 1 and incrementing by 1 until n is reached
// 3. Use nested for loop to create loop, starting at a + 1, incrementing by 1 until n is reached
// 4. Use nested for loop to create loop, starting at b + 1, incrementing by 1 until n is reached
// 5. If a ** 2 + b ** 2 is equal to c ** 2, increment count by 2
// 6. When loops end, return count