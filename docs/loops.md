---
title: Loops
sidebar_position: 5
---

# Loops In JavaScript

Written By: Nay Htet Kyaw

# Loops In JavaScript

**Loops** in JavaScript are control structures that allow you to execute a block of code repeatedly. They are particularly useful when you need to perform the same set of actions multiple times. JavaScript provides several loop constructs to cater to different looping scenarios such as 

- for loop
- while loop
- do-while loop
- for …of loop
- for …in loop

💡 You can **TEST** and **RUN** the following examples by yourself [here](https://runjs.co/)

## For Loop

The **'for'** loop is used when you know the exact number of 
time to loop or iteration you want to perform. It consists of three parts: **`initialization`**, **`condition`**, and **`iteration`**. This **'for loop'** repeatedly executes your specified code block as long as the condition remains true.

### **SYNTAX**

```jsx
for (initialization; condition; iteration) {
  //your set of code blocks to perform every time a loop is completed. 
}
```

### **Example:**

```jsx
for (let i = 0; i < 5; i++) {
    console.log("Hello World"); //display the value in console.
}
```

```
In this example, the variable “i” is initialized as “0”. The condition is set to perform 5 loops until 
the value in variable “i” is greater than 5. After each loop, the value inside the variable “i” increase 
by 1 value. 
```

### **Output:**

```jsx
Hello World
Hello World
Hello World
Hello World
Hello World
```

## **While Loop**

The `while` loop evaluates the `condition` inside the parentheses `()`. If the `condition` is **true**, statements inside the body of the `while` loop are executed. Then, the `condition` is evaluated again. The process goes on until the `condition` is evaluated as **false**. 

If the `condition` is **false**, the loop terminates (ends). 

### **SYNTAX**

```jsx
while (condition) {
  // your block of code to perform inside the loop
}
```

### **Example:**

```jsx
//asigning a value to a variable
let i = 0;

//using while loop
while (i < 5) {
	console.log(i + ": " + "Hello World"); //display the value in console.
	i++;
}
```


💡 `i` is a variable that assumes or points to the values of the elements inside the loop.  
💡 In JavaScript, you can combine **"String"** and **Numbers** by using the **" + "** sign.

```
While the condition is true inside the parentheses (), the ‘while loop’ execute the block of code inside. 
The loop stops when the condition becomes false. 
```

### **Output:**

```jsx
0: Hello World
1: Hello World
2: Hello World
3: Hello World
4: Hello World
```

## **'Do-while' loop**

The **`do-while`** loop is similar to the **`while`** loop, but the code block is executed at least once before checking the condition. It continues executing as long as the condition remains true.

### **SYNTAX**

```jsx
do {
// your code to be executed in each iteration (loop)
} while (condition);
```

### **Example:**

```jsx
//asigning a value to a variable
let i = 0;

//using do-while loop
do {
	console.log("This is :" + i); //display the value in console.
	i++;
} while (i < 5);
```

```
In this do-while loop, your block of code is run at least 1 time before checking the condition. 
After the first loop, the loop checks if the condition inside the parentheses () is true or false. 
If the condition is true, your block of code runs again until the condition is set to false, and 
the loop stop.
```


### **Output:**

```jsx
This is :0

This is :1

This is :2

This is :3

This is :4
```

<!-- ![Untitled](Loops%20In%20JavaScript%20bbbe4c67e9194a449e8c4149e26b5994/Untitled.png) -->

## **'For…of' Loop**

Introduced in the ES6 version of JavaScript, the **`for...of`** loop simplifies iterating (looping) over elements of iterable objects, such as arrays and strings. It provides direct access to the values of the iterable.

### SYNTAX

```jsx
for (const item of iterable) {
    // your code to be executed for each item
}
```

### Example with an array:

```jsx
// array
const fruits = ["apple", "banana", "mango"];

//using for..of
for (const fruit of fruits) { 
    console.log(fruit); //display the value in the console.
}
```

```
This example of "for…of" loop through an array and give direct access to the value of each item
inside the array with each loop. 
```


### Output:

```jsx
apple

banana

mango
```

### Example with String:

```jsx
// string
const string = 'hello';

// using for...of the loop
	for (let i of string) {
	console.log(i);
}
```

```
This for…of loop with String loop through a string getting each letter of the string with each loop.
```

### **Output:**

```jsx
h
e
l
l
o
```

## 'For…in' Loop

The `for...in` loop is a basic control statement that allows to loop through the properties of an object. The statements of code found within the loop body will be executed once for each property of the object.

> However, `for…in` loop is not recommended for iterating (loop) over arrays due to potential unexpected behavior.
> 

### SYNTAX

```jsx
for (const key in object) {
	// your code to be executed for each property
}
```

### Example:

```jsx
//create object
const person = {
	name: "Tawan",
	age: 20,
	occupation: "GOD"
};

//using for...in loop
for (const key in person) {
	console.log(key + ": " + person[key]);
}
```

```
In this for…in loop, an object named person is defined, containing properties such as name,
age, and occupation. The for…in loop is used to iterate through each property of the person object.
During each iteration, the loop prints out the property's name (key) and its corresponding value 
using the console.log function. This allows you to inspect and display the various attributes of the 
person object in a structured manner.
```


### Output:

```jsx
name: Tawan
age: 20
occupation: GOD
```
<br/>

# Now Let's Learn How to Control loop flows

<aside>
💡 Loop control statements in JavaScript are used to alter the flow of execution within loops. They allow you to control how and when the loop iterations occur. There are three main loop control statements: **`break`**, **`continue`**, and **`return`**.

</aside>

### **BREAK**

The **`break`** statement is used to immediately exit the loop, regardless of whether the loop condition or iteration is still valid. It's often used when a certain condition is met, and you want to stop the loop's execution.

**Example with 'for loop':** 

```jsx

//using for loop
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // exit the loop when "i" equals to 5
	}
	console.log(i);
}
```

```
In this, for-loop is used to loop from 0 to 9. During each loop, the code checks if the value of i is 
equal to 5. If the condition is met, the break statement is used to immediately exit the loop. 
As a result, the loop will only run until “ i “ reach 5, printing the numbers 0 to 4 along the way.
```


**Output:** 

```jsx
0
1
2
3
4
```

### CONTINUE

The `continue` statement lets you skip the current loop iteration and move on to the next one. It's handy when you need to skip specific iterations based on a condition while keeping the loop running.

**Example with 'While loop':** 

```jsx
//initializing varialbe i
let i = 0;

//using while loop
while (i < 10) {
	i++;
	if (i % 2 != 0) { // if "i" divided by 2 and does not have remainder of 0
		continue; // skip odd numbers 
	}
	console.log(i); 
}
```

```
This example uses ‘While loop’ and inside the loop,” i “ is incremented. If “ i “is an odd number 
(not divisible by 2), the continue statement is used to skip that iteration. The loop prints even 
numbers between 2 and 10
```


**Output:**

```jsx
2
4
6
8
10
```

### RETURN

The `return` statement ends **any loop** and functions inside it right away. It's employed when you've finished what you wanted to do and need to stop both the loop and the function early.

```jsx
function findFirstNegative(numbers) {
    for (const num of numbers) {
        if (num < 0) {
            return num; // Return the first negative number
        }
    }
    return null; // Return null if no negative number is found
}

const numbersArray = [5, 8, -3, 10, -6];
const firstNegative = findFirstNegative(numbersArray);

console.log("First negative number:", firstNegative);
```

```
In this example, the findFirstNegative function takes an array of numbers as input. It iterates through the 
array using a for...of loop. If it encounters a negative number, it immediately exits the loop and the 
function, returning that negative number. If no negative number is found, it returns null. The code then calls 
the function with an array of numbers and prints the first negative number (if found) or 
null to the console.
```


**Output:** 

```jsx
First negative number: -3
```
<br/>

# Time to Challenge Yourself!

<aside>
💡You can **TEST** and **RUN** the following challenges by yourself here →
</aside>

[RunJS | JavaScript Playground | Run JavaScript and TypeScript Code Online](https://runjs.co/)

> **Challenge 1: Print out String + numbers**
> 

Write a program using any loop types and print "The number is: " + Number 1 to 5.

**Expected Output:** 

```jsx
The Number is: 1
The Number is: 2
The Number is: 3
The Number is: 4
The Number is: 5
```

<aside>
💡 Hint: You can combine String and numbers by using " **+** " operators in JavaScript.

</aside>
<br/>

> **Challenge 2: Counting Even Numbers**
> 

 Write a program that counts and prints the number of even numbers between 1 and 15.
> 

**Expected Output:** 

```jsx
2
4
6
8
10
12
14
```

<aside>
💡 **Hint:** You can use the modulo operator `**%**` to check if a number is even. An even number divided by 2 will have no remainder. Use a loop to iterate through numbers from 1 to 15 and prints out all even numbers.

</aside>