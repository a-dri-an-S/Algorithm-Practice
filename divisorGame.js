// Alice and Bob take turns playing a game, with Alice starting first.
// Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:
//     Choosing any x with 0 < x < n and n % x == 0.
//     Replacing the number n on the chalkboard with n - x.
// Also, if a player cannot make a move, they lose the game.
// Return true if and only if Alice wins the game, assuming both players play optimally.

const divisorGame = n => {
    let turn = "Alice";

    while (n > 0) {
        if (turn === "Alice") {
            n--;
            turn = "Bob";
        } else {
            n--;
            turn = "Alice";
        }
    }
    return turn === "Alice"
}

// 1. Declare turn and set it to string "Alice"
// 2. Use While Loop to loop until n is less than 0
// 3. If turn is equal to Alice (Alice's Turn)
//  - decrement n by 1 and set turn to "Bob"
// 4. Else, if turn is equal to "Bob"
//  - decrement n by 1 and set turn to "Alice"
// 5. If turn is equal to Alice, return true else false