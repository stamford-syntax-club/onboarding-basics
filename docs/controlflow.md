---
sidebar_position: 4
---

# Control Flow
*Written By: Tawan Tocharoentanaphol*

Control flow is the order in which individual statements, instructions, or function calls are executed within a piece of code. It's how we make decisions in code and perform different actions depending on various conditions.

In JavaScript, we can manipulate control flow using different structures like conditional statements and loops. Let's go through some fundamental concepts.

### 1. Conditional Statements

These statements allow the code to make decisions.

#### a. `if` Statement

The `if` statement is used to execute a block of code if a specified condition is true.

```javascript
let age = 18;

if (age >= 18) {
  console.log('You are an adult.'); // Will print this
}
```

#### b. `if...else` Statement

You can use the `else` statement to execute code if- and **only** if the condition is false.


```javascript
let age = 15;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.'); // Will print this
}
```

#### c. `if...else if...else` Statement

You can use multiple `else if` conditions for more complex decisions.

```javascript
let score = 75;

if (score > 90) {
  console.log('Grade A');
} else if (score > 80) {
  console.log('Grade B');
} else if (score > 70) {
  console.log('Grade C'); // Will print this
} else {
  console.log('Grade D');
}
```

### 2. Switch Statement

The `switch` statement allows a variable to be tested against multiple cases.

```javascript
let fruit = 'Apple';

switch (fruit) {
  case 'Banana':
    console.log('I am a Banana!');
    break;
  case 'Apple':
    console.log('I am an Apple!'); // Will print this
    break;
  default:
    console.log('Unknown fruit');
}
```

### 3. Loops

Loops are used to repeat actions.

#### a. `for` Loop

A `for` loop repeats until a specified condition is false.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Will print numbers from 0 to 4
}
```

#### b. `while` Loop

A `while` loop continues as long as the specified condition is true.
The condition is tested before executing the code block.

```javascript
let i = 0;

while (i < 5) {
  console.log(i); // Will print numbers from 0 to 4
  i++;
}
```

#### c. `do...while` Loop

Similar to `while`, but the code block is executed at least once before the condition is tested.

```javascript
let i = 0;

do {
  console.log(i); // Will print numbers from 0 to 4
  i++;
} while (i < 5);
```

JavaScript operates using "truthey" and "falsey" values. The following values are considered falsey:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

All other values are considered truthy.