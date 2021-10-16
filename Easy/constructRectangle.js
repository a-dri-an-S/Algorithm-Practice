// A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
//     The area of the rectangular web page you designed must equal to the given target area.
//     The width W should not be larger than the length L, which means L >= W.
//     The difference between length L and width W should be as small as possible.
// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

const constructRectangle = function(area) {
    const start = Math.ceil(Math.sqrt(area));
    const rectangle = [];
    
    for (let i = start; i > 0; i--) {
        if (area % i === 0) {
            rectangle.push(Math.max(area / i, i));
            rectangle.push(Math.min(area / i, i));
            break;
        }

    }
    return rectangle;
};

// 1. Declare start and set it to the square root of area with Math.sqrt() function and round up to the nearest integer with Math.ceil() function
// 2. Declare rectangle and set it to an empty array
// 3. Use for loop to create loop starting at start and decrementing bu 1 until 0 is reached
// 4. If area is divisible by i by checking with % operator
//  - Push largest number between quotient of area & i and i integer to rectangle array
//  - Push smallest number between quotient of area & i and i integer to rectangle array
//  - break loop
// 5. Return rectangle array