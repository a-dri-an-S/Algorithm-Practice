// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:
//     If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
//     Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

const countStudents = (students, sandwiches) => {
    while (students.includes(sandwiches[0])) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift())
        }
    }
    return students.length;
}

// 1. Use a while loop to iterate through students array until sandwich at index 0 is not included in students array
// 2. If students[0] is equal to sandwich[0], remove both at index 0 via shift array method
// 3. Else, Move student at index 0 to end of array via push array method
// 4. Return length of students array to return number of students