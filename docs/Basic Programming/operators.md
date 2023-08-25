---
sidebar_position: 3
---

# Operators
*Written By: Tawan Tocharoentanaphol*

Operators are the symbols that are used to perform operations on variables and values. In JavaScript, operators are used to assign values, compare values, perform arithmetic operations, and more.

There are some nuances and caveats to operators particularly in JavaScript which will not be covered extensively, but it's worth keeping in mind that an operator that functions one way in JavaScript may not translate to other languages.

Below are some examples of different types of operators in JavaScript.

> NOTE:
> The call to the `render()` function is used to display the output of the code in the browser. You can ignore it for now.

### **The code blocks are interactive! Try changing the values and see what happens.**

### 1. Arithmetic Operators

These are used to perform arithmetic calculations.

- **Addition (`+`):** Adds two numbers together.
  ```javascript live noInline
  let x = 5 + 2; // x will be 7
  render(x);
  ```

- **Subtraction (`-`):** Subtracts one number from another.
  ```javascript live noInline
  let y = 10 - 3; // y will be 7
  render(y);
  ```

- **Multiplication (`*`):** Multiplies two numbers together.
  ```javascript live noInline
  let z = 5 * 2; // z will be 10
  render(z);
  ```

- **Division (`/`):** Divides one number by another.
  ```javascript live noInline
  let a = 20 / 4; // a will be 5
  render(a);
  ```

- **Modulus (`%`):** Returns the remainder of a division.
  ```javascript live noInline
  let b = 15 % 4; // b will be 3
  render(b);
  ```

- **Increment (`++`):** Increases a value by 1.
  ```javascript live noInline
  let c = 5;
  c++; // c will be 6
  render(c);
  ```

- **Decrement (`--`):** Decreases a value by 1.
  ```javascript live noInline
  let d = 5;
  d--; // d will be 4
  render(d);
  ```

#### **Task 1: Arithmetic Operators**
Try performing the following operations:
- Multiply 4 by 5.
- Divide 20 by 4.
- Increment the value 7.
- Decrement the value 9.

<details>
<summary>Answer for Task 1</summary>
<p>

```javascript live noInline
let multiplication = 4 * 5; // multiplication will be 20
let division = 20 / 4; // division will be 5
let increment = 7;
increment++; // increment will be 8
let decrement = 9;
decrement--; // decrement will be 8

// This is called string interpolation. It's a way to combine strings and variables without having to use the '+' operator to concatenate them.
render(`Multiplication: ${multiplication}, Division: ${division}, Increment: ${increment}, Decrement: ${decrement}`);
```
</p>
</details>

### 2. Assignment Operators

These are used to assign values to variables.

- **Assignment (`=`):** Assigns a value to a variable.
  ```javascript live noInline
  let e = 10; // e is now 10
  render(e);
  ```

- **Add and Assign (`+=`):** Adds the right operand to the left operand and assigns the result to the left operand.
  ```javascript live noInline
  let f = 5;
  f += 3; // f will be 8
  render(f);
  ```

- **Subtract and Assign (`-=`):** Same as above, but for subtraction.
  ```javascript live noInline
  let g = 10;
  g -= 2; // g will be 8
  render(g);
  ```

#### **Task 2: Assignment Operators**
Create a variable named 'total' and assign a value of 20 to it. Then, using the `+=` operator, add 15 to it.

<details>
<summary>Answer for Task 2</summary>
<p>

```javascript live noInline
let total = 20;
total += 15; // total will be 35

render(total);
```
</p>
</details>

### 3. Comparison Operators

These are used to compare values. Do note that JavaScript operates on "truthy" and "falsey" values.

- **Equal to (`==`):** Checks if two values are equal.
  ```javascript live noInline
  let isEqual = (5 == "5"); // isEqual will be true
  render(isEqual ? "true" : "false");
  ```

- **Strictly Equal to (`===`):** Checks if two values are equal and of the same type.
  ```javascript live noInline
  let isStrictlyEqual = (5 === "5"); // isStrictlyEqual will be false
  render(isStrictlyEqual ? "true" : "false");
  ```

- **Not Equal (`!=`):** Checks if two values are not equal.
  ```javascript live noInline
  let isNotEqual = (5 != "6"); // isNotEqual will be true
  render(isNotEqual ? "true" : "false");
  ```

- **Strictly Not Equal (`!==`):** Checks if two values are not equal or not of the same type.
  ```javascript live noInline
  let isStrictlyNotEqual = (5 !== "5"); // isStrictlyNotEqual will be true
  render(isStrictlyNotEqual ? "true" : "false");
  ```

#### **Task 3: Comparison Operators**
Use comparison operators to:
- Compare 5 and '5' using both `==` and `===`.
- Check if 10 is not equal to 15.

<details>
<summary>Answer for Task 3</summary>
<p>

```javascript live noInline
let isEqual = (5 == "5"); // isEqual will be true
let isStrictlyEqual = (5 === "5"); // isStrictlyEqual will be false
let isNotEqual = (10 != 15); // isNotEqual will be true

render(`isEqual: ${isEqual}, isStrictlyEqual: ${isStrictlyEqual}, isNotEqual: ${isNotEqual}`);
```
</p>
</details>

### 4. Logical Operators

These are used to determine the logic between variables or values.

- **AND (`&&`):** Combines two expressions, returns true if both are true.
  ```javascript live noInline
  let age = 19;
  let name = 'John';
  let andResult = (age > 18 && name === 'John'); // andResult will be true
  render(andResult ? "true" : "false");
  ```

- **OR (`||`):** Combines two expressions, returns true if one of them is true.
  ```javascript live noInline
  let age = 19;
  let orResult = (age > 18 || name === 'Jane'); // orResult will be true
  render(orResult ? "true" : "false");
  ```

- **NOT (`!`):** Returns the opposite value.
  ```javascript live noInline
  let isTrue = !false; // isTrue will be true
  render(isTrue ? "true" : "false");
  ```

#### **Task 4: Logical Operators**
Create a logical expression using `&&` that checks if a variable 'temperature' is greater than 30 and a variable 'sunny' is true. Then, use the `!` operator to return the opposite of that value.

<details>
<summary>Answer for Task 4</summary>
<p>

```javascript live noInline
let temperature = 35;
let sunny = true;
let logicalExpression = (temperature > 30 && sunny); // logicalExpression will be true
let oppositeValue = !logicalExpression; // oppositeValue will be false

render(`logicalExpression: ${logicalExpression}, oppositeValue: ${oppositeValue}`);
```
</p>
</details>

---

These are the basic operators you'll encounter in JavaScript. You will use nearly all of them extensively while you code in the language, and understanding them is paramount.