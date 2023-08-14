---
sidebar_position: 3
---

# Operators
*Written By: Tawan Tocharoentanaphol*

Operators are the symbols that are used to perform operations on variables and values.
In JavaScript, operators are used to assign values, compare values, perform arithmetic operations, and more. 

NOTE: There are some nuances and caveats to operators particularly in JavaScript which will not be covered extensively, but it's worth keeping in mind that an operator that functions one way in JavaScript may not translate to other languages.


Below are some examples of different types of operators in JavaScript.

### 1. Arithmetic Operators

These are used to perform arithmetic calculations.

- **Addition (`+`):** Adds two numbers together.
  ```javascript
  let x = 5 + 2; // x will be 7
  ```

- **Subtraction (`-`):** Subtracts one number from another.
  ```javascript
  let y = 10 - 3; // y will be 7
  ```

- **Multiplication (`*`):** Multiplies two numbers together.
  ```javascript
  let z = 5 * 2; // z will be 10
  ```

- **Division (`/`):** Divides one number by another.
  ```javascript
  let a = 20 / 4; // a will be 5
  ```

- **Modulus (`%`):** Returns the remainder of a division.
  ```javascript
  let b = 15 % 4; // b will be 3
  ```

- **Increment (`++`):** Increases a value by 1.
  ```javascript
  let c = 5;
  c++; // c will be 6
  ```

- **Decrement (`--`):** Decreases a value by 1.
  ```javascript
  let d = 5;
  d--; // d will be 4
  ```

### 2. Assignment Operators

These are used to assign values to variables.

- **Assignment (`=`):** Assigns a value to a variable.
  ```javascript
  let e = 10; // e is now 10
  ```

- **Add and Assign (`+=`):** Adds the right operand to the left operand and assigns the result to the left operand.
  ```javascript
  let f = 5;
  f += 3; // f will be 8
  ```

- **Subtract and Assign (`-=`):** Same as above, but for subtraction.
  ```javascript
  let g = 10;
  g -= 2; // g will be 8
  ```

### 3. Comparison Operators

These are used to compare values. Do note that JavaScript operates on "truthy" and "falsey" values.

- **Equal to (`==`):** Checks if two values are equal.
  ```javascript
  let isEqual = (5 == "5"); // isEqual will be true
  ```

- **Strictly Equal to (`===`):** Checks if two values are equal and of the same type.
  ```javascript
  let isStrictlyEqual = (5 === "5"); // isStrictlyEqual will be false
  ```

- **Not Equal (`!=`):** Checks if two values are not equal.
  ```javascript
  let isNotEqual = (5 != "6"); // isNotEqual will be true
  ```

- **Strictly Not Equal (`!==`):** Checks if two values are not equal or not of the same type.
  ```javascript
  let isStrictlyNotEqual = (5 !== "5"); // isStrictlyNotEqual will be true
  ```

### 4. Logical Operators

These are used to determine the logic between variables or values.

- **AND (`&&`):** Combines two expressions, returns true if both are true.
  ```javascript
  let age = 19;
  let name = 'John';
  let andResult = (age > 18 && name === 'John'); // andResult will be true
  ```

- **OR (`||`):** Combines two expressions, returns true if one of them is true.
  ```javascript
  let orResult = (age > 18 || name === 'Jane'); // orResult will be true
  ```

- **NOT (`!`):** Returns the opposite value.
  ```javascript
  let isTrue = !false; // isTrue will be true
  ```

These are the basic operators you'll encounter in JavaScript. You will use nearly all of them extensively
while you code in the language, and understanding them is paramount.