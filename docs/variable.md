---
sidebar_position: 1
---

# Variables
*Written By: Naris Pornjirawittayakul*

## 1. Introduction to Variables
In programming, a variable is like a container or a storage box where you can keep information. Think of it as a labeled jar where you can store candy. The label is the variable name, and the candy is the data.

## 2. Why Use Variables?
Variables allow us to:
- Store data to use later.
- Make our code dynamic and interactive.
- Keep track of changing information.

## 3. Declaring Variables in JavaScript
In JavaScript, we have three main ways to declare a variable: `var`, `let`, and `const`.

- `var`: The old way to declare variables. It's still used but less common in modern JavaScript.
    ```javascript
    var name = "John";
    ```

- `let`: Introduced in ES6 (a version of JavaScript). It allows you to declare variables that can be reassigned.
    ```javascript
    let age = 25;
    age = 26; // This is valid
    ```

- `const`: Also introduced in ES6. It's for variables that should not be reassigned.
    ```javascript
    const pi = 3.14159;
    ```

## 4. Naming Variables
- Variable names can contain letters, numbers, underscores, and dollar signs.
- They must start with a letter, underscore (_), or dollar sign ($).
- They can't start with a number.
- JavaScript is case-sensitive: `Age` and `age` are different variables.
- Use descriptive names: `userName` is better than `un`.
- Follow the **camelCase** convention: myVariableName.

## 5. Assigning Values to Variables
Once a variable is declared, you can give it a value using the `=` operator.
```javascript
let fruit = "apple";
```
You can also change the value of a variable:
```javascript
let fruit = "apple";
fruit = "banana";
```

## 7. Scope of Variables
In JavaScript, the accessibility of variables (where they can be used) is determined by their scope.

- **Global Variables**: Declared outside any function and can be accessed from any function in the script.

- **Local Variables**: Declared inside a function and can only be accessed within that function.

## 8. Hoisting
Understanding hoisting is crucial for writing predictable JavaScript code. It helps avoid potential pitfalls and errors, especially when dealing with variable and function declarations.

### What is Hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope during the execution phase, but not their initializations.

## 9. Immutability and Reference Values
Understanding the distinction between primitive and reference values, as well as immutability and mutability, is crucial for effective JavaScript programming.

### Primitive Values and Immutability
In JavaScript, primitive values are data that are stored on the stack.

### Reference Values and Mutability
Reference values are objects that are stored in the heap memory.

## 10. Type Coercion
Understanding type coercion is crucial for writing predictable JavaScript code. Being aware of how and when JavaScript coerces values can help you avoid potential pitfalls.

### What is Type Coercion?
Type Coercion refers to the automatic or implicit conversion of values from one data type to another.

## 11. Temporal Dead Zone (TDZ)
Understanding the Temporal Dead Zone is essential for writing clean and error-free JavaScript code, especially when using modern ES6+ features like `let`, `const`, and `class`.

### What is the Temporal Dead Zone?
The Temporal Dead Zone is the period between a variable entering its enclosing scope and the variable being declared and initialized.

## 12. Using `typeof`
The `typeof` operator is a fundamental tool in JavaScript for type-checking and understanding the nature of the data you're working with.

### Basic Usage
The `typeof` operator returns a string indicating the type of the unevaluated operand.

## 13. Conclusion
Understanding variables is foundational in JavaScript. By understanding these advanced concepts, you'll have a deeper grasp of how variables work in JavaScript. They're the building blocks that allow us to store, access, and manipulate data in our programs.