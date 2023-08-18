---
sidebar_position: 1
---

# Variable
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
    ```javascript live noInline
    var name = "John";
    render(name);
    ```

- `let`: Introduced in ES6 (a version of JavaScript). It allows you to declare variables that can be reassigned.
    ```javascript live noInline
    let age = 25;
    age = 26; // This is valid
    render(age);
    ```

- `const`: Also introduced in ES6. It's for variables that should not be reassigned.
    ```javascript live noInline
    const pi = 3.14159;
    pi = 3.14; // Try removing it. This cause an error.
    render(pi);
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
```javascript live noInline
let fruit = "apple";
render(fruit);
```
You can also change the value of a variable:
```javascript live noInline
let fruit = "apple";
fruit = "banana";
render(fruit);
```

## 6. Data Types in JavaScript
Understanding the basic data types in JavaScript is foundational for any developer. They form the building blocks of more complex structures and logic in the language.

Variables can hold different types of data:
### String
- **Description**: A string is a sequence of characters used to represent text.
- **Creation**: Strings can be created using single quotes ('), double quotes ("), or template literals (`).
- **Properties & Methods**: Strings come with built-in properties and methods. For instance, the .length property returns the length of the string, and the .toUpperCase() method returns the string in uppercase.
- **Immutability**: Strings are immutable, meaning once a string is created, it cannot be changed. However, you can derive a new string from an existing one.
- **Example**:
    ```javascript
    let str = "Hello, World!";
    console.log(str.length); // Outputs: 13
    ```

### Number
- **Description**: JavaScript has a single number type, which can represent both integers and floating-point numbers.
- **Range**: It's a 64-bit floating-point format, following the international IEEE 754 standard. This allows it to represent numbers between about `5e-324` and `1.7976931348623157e+308`.
- **Special Values**: Numbers in JavaScript have special values like `NaN` (Not a Number), `Infinity`, and `-Infinity`.
- **Methods**: The `Number` object has methods like `Number.parseInt()`, `Number.parseFloat()`, and properties like `Number.MAX_VALUE`, `Number.MIN_VALUE`.
- **Example**:
    ```javascript
    let num = 3.14;
    console.log(Number.isInteger(num)); // Outputs: false
    ```
    #### Some Nuances and Special Values Associated with Numbers
    In JavaScript, there isn't a distinction between different types of numbers like there is in many other programming languages. Instead, JavaScript has a single `Number` type that represents both integers and floating-point numbers. However, there are some nuances and special values associated with numbers in JavaScript.

### Boolean
- **Description**: A boolean represents a logical entity and can have two values: true or false.
- **Usage**: Booleans are often the result of comparisons and are extensively used in conditional statements like if, while, etc.
- **Example**:
    ```javascript
    let isRaining = false;
    if (isRaining) {
        console.log("Take an umbrella!");
    } else {
        console.log("Enjoy the weather!");
    }
    ```

### Undefined
- **Description**: The undefined value represents a variable that has been declared but has not been assigned a value.
- **Usage**: It's common to check if a variable is undefined to see if it has been initialized or not.
- **Example**:
    ```javascript
    let testVar;
    console.log(testVar); // Outputs: undefined
    ```

### Null
- **Description**: The null value represents the intentional absence of any value or object. It's often used to indicate "no value" or "unknown".
- **Difference from Undefined**: While both null and undefined indicate the absence of a value, undefined is used when a variable has not been initialized, whereas null is used to represent a deliberate absence of a value.
- **Example**:
    ```javascript
    let emptyVar = null;
    console.log(emptyVar); // Outputs: null
    ```

### BigInt
- **Description**: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than `2^53 - 1`, which is the largest number JavaScript can reliably handle with the Number primitive.
- **Creation**: BigInts can be created by appending `n` to the end of an integer or by calling the `BigInt` function.
- **Usage**: BigInts can be used in mathematical operations, but they cannot be mixed with regular numbers. For operations involving BigInts, all operands must be BigInts.
- **Example**:
    ```javascript
    let largeNumber = 1234567890123456789012345678901234567890n;
    let anotherLargeNumber = BigInt("1234567890123456789012345678901234567890");
    console.log(largeNumber === anotherLargeNumber); // Outputs: true
    ```

### Symbol
- **Description**: The Symbol data type is a unique and immutable primitive value introduced in ES6. It's often used as an identifier for object properties to ensure they are unique and won't clash with other properties.
- **Creation**: Symbols can be created using the Symbol() function. You can provide an optional description for debugging purposes, but two Symbols with the same description are still distinct.
- **Usage**: Symbols are primarily used as unique property keys in objects. They can also be used to define private properties and methods for objects, or to represent concepts that are unique and distinct from any other value.
- **Example**:
    ```javascript
    const uniqueSymbol = Symbol("description");
    let obj = {};
    obj[uniqueSymbol] = "Value for unique symbol";
    console.log(obj[uniqueSymbol]); // Outputs: "Value for unique symbol"
    ```

### Object
- **Description**: The Object data type is a complex data type that allows you to store collections of data in the form of key-value pairs. In JavaScript, almost everything is an object, including functions, arrays, and other constructs.
- **Creation**: Objects can be created using curly braces {} or the new Object() constructor.
- **Properties & Methods**: Objects can have properties (which hold values) and methods (which are functions associated with the object). The keys in objects can be strings or Symbols.
- **Prototypes**: Every object in JavaScript has a prototype, which is another object. Methods and properties are inherited from the prototype.
- **Usage**: Objects are used to model and manage data. They can represent real-world entities, serve as data containers, or be used in more advanced programming patterns like modules and constructors.
- **Example**:
```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  }
};
console.log(person.greet()); // Outputs: "Hello, my name is John Doe."
```

### Additional Points
- **Type Coercion**: JavaScript is a dynamically typed language, which means variables don't have fixed types. Instead, their type can change at runtime. This leads to type coercion, where JavaScript automatically converts one type to another.
- **Example**:
    ```javascript
    let result = '5' + 3; // Outputs: "53" because the number is coerced into a string
    ```
- **Checking Types**: The `typeof` operator is used to check the type of a variable. However, for more complex types like arrays or dates, you might need other methods like `Array.isArray()` or `instanceof`.


## 7. Scope of Variables
In JavaScript, the accessibility of variables (where they can be used) is determined by their scope.

By understanding the differences between function-scoped and block-scoped variables, you can make informed decisions about which to use in different parts of your code, ensuring cleaner and more predictable behavior.

- **Global Variables**: Declared outside any function and can be accessed from any function in the script.
    ```javascript live noInline
    let globalVar = "I am global!";
    render(globalVar)
    ```

- **Local Variables**: Declared inside a function and can only be accessed within that function.
    ```javascript live noInline
    function showLocal() {
        let localVar = "I am local!";
        render(localVar);
    }
    showLocal(); // This will work as we called the function
    // render(localVar) /* This will not work*/
    ```

### Function-scoped (`var`)
Variables declared with `var` are function-scoped. This means that their visibility is **limited to the function** in which they are declared. If they are declared outside any function, they become global variables.

- **Example 1**: var inside a function
    ```javascript live noInline
    function exampleFunction() {
        if (true) {
            var functionScopedVar = "I am inside a function!";
        }
        render(functionScopedVar); // This will work because var is function-scoped
    }

    exampleFunction();

    // Outside the function
    // render(functionScopedVar); Uncommenting this would throw an error because functionScopedVar is not accessible outside the function
    ```

- **Example 2**: var outside a function (global scope)
    ```javascript live noInline
    if (true) {
        var globalVar = "I am global!";
    }
    render(globalVar); // This will work because var becomes a global variable outside a function

    function anotherFunction() {
        render(globalVar); // This will also work because globalVar is accessible globally
    }

    anotherFunction();

    ```


### Block-scoped (`let` & `const`)
Variables declared with `let` and `const` are block-scoped. This means their visibility is **limited to the block** (enclosed by `{` and `}`) in which they are declared. This can be inside loops, conditionals, or any other code block.

- **Example 1**: `let` inside a block
    ```javascript live noInline
    if (true) {
        let blockScopedLet = "I am inside a block!";
        render(blockScopedLet); // This will work inside the block
    }
    // render(blockScopedLet); Uncommenting this would throw an error outside the block
    ```

- **Example 2**: `const` inside a block
    ```javascript live noInline
    for (let i = 0; i < 1; i++) {
        const blockScopedConst = "I am also inside a block!";
        render(blockScopedConst); // This will work inside the block
    }
    // render(blockScopedConst); Uncommenting this would throw an error outside the block
    ```

### Differentiating `var` (Function-scoped) and `let` & `const` (Block-scoped)
1. **Scope Limitation**:
    - `var`: Limited to the function in which they are declared.
    - `let` & `const`: Limited to the block in which they are declared.
2. **Re-declaration**:
    - `var`: Can be re-declared in the same scope without any error.
    - `let` & `const`: Cannot be re-declared in the same scope.
3. **Initialization**:
    - `var`: Variables are hoisted and initialized with undefined.
    - `let` & `const`: Variables are hoisted but not initialized, leading to the Temporal Dead Zone.
4. **Assignment**:
    - `var` & `let`: Can be reassigned to new values.
    - `const`: Cannot be reassigned after initial assignment.
5. **Global Object Property**:
    - `var`: When declared globally, it becomes a property of the global object (e.g., window in browsers).
    - `let` & `const`: Do not become properties of the global object when declared globally.



## 8. Hoisting
Understanding hoisting is crucial for writing predictable JavaScript code. It helps avoid potential pitfalls and errors, especially when dealing with variable and function declarations.
### What is Hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope during the execution phase, but not their initializations (to the top of the current script or the current function). However, it's important to note that only declarations are hoisted, not initializations.

### How Does Hoisting Work?
- **Variable Declarations with `var`**
    - When a variable is declared using `var`, the variable declaration is hoisted to the top of its scope. However, the assignment of a value to that variable is not hoisted.
    - This means that a variable declared with `var` is initialized with a value of `undefined` until the code where it's defined runs.
    - **Example**:
    ```javascript
    console.log(myVar); // Outputs: undefined
    var myVar = 5;
    console.log(myVar); // Outputs: 5
    ```
    - In the above example, the variable declaration `var myVar` is hoisted, but its initialization with the value `5` is not. So, the first `console.log` outputs `undefined`, and the second one outputs `5`.

- **Function Declarations**
    - Entire function declarations are hoisted to the top of their scope. This means you can call a function before it's defined in the code.
    - **Example:**
    ```javascript
    greet(); // Outputs: Hello!
    function greet() {
        console.log("Hello!");
    }
    ```
    Here, the function greet is hoisted to the top, allowing it to be called before its actual position in the code.

- **Variables with `let` and `const`**
    - Variables declared with `let` and `const` are also hoisted to the top of their block scope. However, they are not initialized with `undefined` like `var`. Instead, they enter a "Temporal Dead Zone" (TDZ) where accessing them before their declaration in the code results in an error.
    - **Example:**
    ```javascript
    // console.log(myLetVar); Uncommenting this would throw an error
    let myLetVar = 10;
    console.log(myLetVar); // Outputs: 10
    ```
    In this example, even though myLetVar is hoisted, accessing it before its declaration results in a ReferenceError due to the TDZ.

### Key Takeaways
- Only declarations are hoisted in JavaScript, not initializations.
- Variables declared with `var` are hoisted and initialized with `undefined`.
- Function declarations are entirely hoisted.
- Variables declared with `let` and `const` are hoisted but remain in the TDZ until their actual declaration in the code.

## 9. Immutability and Reference Values
Understanding the distinction between primitive and reference values, as well as immutability and mutability, is crucial for effective JavaScript programming. It helps in making informed decisions when manipulating and comparing data.
### Primitive Values and Immutability
In JavaScript, primitive values are data that are stored on the stack. They include:

- `String`
- `Number`
- `Boolean`
- `Undefined`
- `Null`
- `BigInt` (in newer versions of JavaScript)
- `Symbol` (in newer versions of JavaScript)

**Immutability** means that once a primitive value is created, it cannot be changed. However, it's important to note that variables holding these values can be reassigned.

**Example:**
```javascript
Copy code
const obj = { key: "value" };
obj.key = "new value"; // This works because the object is mutable
// obj = {}; This would throw an error because the reference is immutable with const
```
In the above example, even though we tried to change the first character of the string `str`, the original string remains unchanged. This is because strings in JavaScript are immutable.

### Reference Values and Mutability
Reference values are objects that are stored in the heap memory. They include:

- `Object`
- `Array`
- `Function`
- And other non-primitive data types

Unlike primitive values, reference values are mutable, meaning their properties or elements can be changed after they are created.

When you assign a reference value to a variable, you're actually assigning a memory address (or reference) to that variable. When you assign one variable to another, both variables point to the same memory address. This means that if you change one variable, the other will reflect that change.

**Example:**
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // Outputs: "Bob"
console.log(obj2.name); // Outputs: "Bob"
```
In the above example, `obj1` and `obj2` both point to the same object in memory. When we modify `obj2`, the change is reflected in `obj1` as well.

### Comparing Primitive and Reference Values

- **Primitive Values**: When you compare two primitive values using `==` or `===`, JavaScript checks if the values are the same.
    ```javascript
    let num1 = 10;
    let num2 = 10;
    console.log(num1 === num2); // Outputs: true
    ```
- **Reference Values**: When you compare two reference values, JavaScript checks if the references (memory addresses) are the same, not the actual objects' content.
    ```javascript
    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3];
    console.log(arr1 === arr2); // Outputs: false
    ```
    In the above example, even though `arr1` and `arr2` have the same content, they point to different objects in memory, so the comparison returns `false`.

### Key Takeaways
- Primitive values are immutable and stored on the stack.
- Reference values are mutable and stored in the heap.
- Assigning one reference variable to another creates a reference to the same memory address, not a copy of the object.
- Comparing primitive values checks their actual values, while comparing reference values checks their memory addresses.


## 10. Type Coercion
Understanding type coercion is crucial for writing predictable JavaScript code. Being aware of how and when JavaScript coerces values can help you avoid potential pitfalls and ensure your code behaves as expected.
### What is Type Coercion?
Type Coercion refers to the automatic or implicit conversion of values from one data type to another. JavaScript is a dynamically typed language, which means variables can hold values of any type without any type enforcement (basically variables can change type). This flexibility leads to situations where an operation tries to combine two different types of data, and JavaScript attempts to make sense of this by converting one or both values to a common type.

### Implicit vs. Explicit Coercion
1. **Implicit Coercion**
    - This is when JavaScript automatically converts a value from one type to another without any explicit request. It happens behind the scenes when the operations demand it.

    **Example**:
    ```javascript
    let result = "5" + 3; // Outputs: "53" because the number is coerced into a string
    ```

    Here, JavaScript implicitly converts the number `3` to a string to concatenate with the string `"5"`, resulting in the string `"53"`.

2. **Explicit Coercion**
    - This is when the developer intentionally converts a value from one type to another.

    **Example**:
    ```javascript
    let numberString = "42";
    let actualNumber = Number(numberString); // Explicitly converting string to number
    ```

### Common Scenarios of Implicit Type Coercion
1. **String and Number**
    - When a string is combined with a number using the `+` operator, JavaScript treats it as string concatenation and converts the number to a string.
    ```javascript
    console.log("5" + 3); // Outputs: "53"
    console.log("5" - 3); // Outputs: 2
    ```
    Notice that with the `-` operator, JavaScript converts the string to a number and performs arithmetic.

2. **Boolean Coercion**
    - Booleans can be coerced to numbers. `true` becomes `1` and `false` becomes `0`.
    ```javascript
    console.log(true + 1); // Outputs: 2
    console.log(false - 1); // Outputs: -1
    ```

3. **Null and Undefined**
    - `null` is coerced to 0 in numeric contexts.
    - `undefined` is coerced to NaN in numeric contexts.
    ```javascript
    console.log(null + 2); // Outputs: 2
    console.log(undefined + 2); // Outputs: NaN
    ```

4. **Double Equals `(==)` vs. Triple Equals `(===)`**
    - The double equals operator `(==)` performs type coercion if the values being compared are of different types. This can lead to unexpected results.
    - The triple equals operator `(===)` does not perform type coercion and checks for both value and type equality.
    ```javascript
    console.log("5" == 5); // Outputs: true (due to type coercion)
    console.log("5" === 5); // Outputs: false (strict equality without coercion)
    ```

### Avoiding Unintended Type Coercion
1. **Use Strict Equality `(===)`**: This ensures that values of different types are not considered equal.
2. **Explicitly Convert Values**: Instead of relying on JavaScript's implicit coercion, explicitly convert values using functions like ``Number()``, ``String()``, and ``Boolean()``.
3. **Be Cautious with Truthy and Falsy Values**: In JavaScript, some values are considered "truthy" or "falsy" when evaluated in a boolean context. For example, empty strings, `0`, `null`, `undefined`, and `NaN` are all falsy.


## 11. Temporal Dead Zone (TDZ)
Understanding the Temporal Dead Zone is essential for writing clean and error-free JavaScript code, especially when using modern ES6+ features like `let`, `const`, and `class`.

### What is the Temporal Dead Zone?
The Temporal Dead Zone is the period between a variable entering its enclosing scope and the variable being declared and initialized. During this time, the variable is considered to be in a "dead zone" and cannot be accessed. Accessing them in this period will throw an error.

### Why does the TDZ exist?
The TDZ was introduced in ECMAScript 6 (ES6) to catch common programming errors. Before ES6, using a variable before its declaration would simply return undefined, which could lead to subtle bugs. The TDZ helps catch these mistakes by throwing an error when a variable is accessed before its declaration.

### How does the TDZ work?
1. **For `let` and `const` variables**
    - When a block scope (like a function or a loop) is entered, variables declared with `let` and `const` are hoisted to the top of the block. However, unlike var, they are not initialized with `undefined`.
    - Instead, they remain uninitialized until the code execution reaches their declaration. This period, from hoisting to initialization, is the Temporal Dead Zone.
    - If you try to access the variable within the TDZ, a `ReferenceError` is thrown.
    Example:
    ```javascript
    function exampleTDZ() {
        // We are inside the TDZ for myVar here
        // console.log(myVar); Uncommenting this would throw a ReferenceError
        let myVar = "I was in the TDZ!";
        console.log(myVar); // Outputs: I was in the TDZ!
    }
    exampleTDZ();
    ```
2. **For `class` declarations**
    - Class declarations are also subject to the TDZ. This means you cannot access a class before its declaration in the code.
    Example:
    ```javascript
    // new MyClass(); Uncommenting this would throw a ReferenceError
    class MyClass {}
    ```

### Key Points about TDZ
- The TDZ starts at the beginning of the enclosing block and ends at the variable declaration.
- Variables in the TDZ are considered uninitialized.
- Accessing a variable in the TDZ results in a ReferenceError.
- The TDZ applies to let, const, and class declarations, but not to var (which is simply hoisted and initialized with undefined).
- The TDZ helps catch errors by preventing the use of variables before they are declared and initialized.


# 12. Using `typeof`
The `typeof` operator is a fundamental tool in JavaScript for type-checking and understanding the nature of the data you're working with. By recognizing the type of data, developers can write more robust code and handle different data types appropriately.

### Basic Usage
The `typeof` operator returns a string indicating the type of the unevaluated operand.
```javascript
let str = "Hello, World!";
console.log(typeof str); // Outputs: "string"
```

### Nuances and Considerations
- **Checking for Arrays**: Since `typeof` an array returns "object", to specifically check if a variable is an array, you can use `Array.isArray()`
    ```javascript
    let arr = [1, 2, 3];
    console.log(Array.isArray(arr)); // Outputs: true
    ```
- **Checking for Null**: Given that `typeof null` returns "object", you'll often need to use a direct comparison to check for `null`:
    ```javascript
    let emptyValue = null;
    if (emptyValue === null) {
    console.log("This value is null!");
    }
    ```

### Different Types and Their Outputs
1. **Undefined**
    - In JavaScript, variables that are declared but not initialized are automatically assigned the value `undefined`. It represents the absence of a value or a variable that hasn't been assigned yet.

    ```javascript
    let notDefined;
    console.log(typeof notDefined); // Outputs: "undefined"
    ```
2. **Numbers**
    - JavaScript has a single number type, which can represent integers, floats, etc. It's a 64-bit floating-point format, following the international IEEE 754 standard.
    ```javascript
    let num = 42;
    console.log(typeof num); // Outputs: "number"
    ```

3. **Strings**
    - Basically, it is a sequence of characters used to represent text. Strings in JavaScript can be created using single quotes (`'`), double quotes (`"`), or template literals (`). They are immutable, meaning once a string is created, it cannot be changed.
    ```javascript
    let text = "JavaScript";
    console.log(typeof text); // Outputs: "string"
    ```

4. **Booleans**
    - A data type that has one of two possible values, `true` or `false`, used to represent the logical values of truthiness or falseness.
    - Booleans are often used in conditional statements to determine the flow of a program.
    ```javascript
    let isTrue = true;
    console.log(typeof isTrue); // Outputs: "boolean"
    ```

5. **Objects**
    - Objects are mutable and can represent a wide range of data structures, including dictionaries, hashes, and complex entities. They can contain properties (key-value pairs) and methods (functions).
    ```javascript
    let obj = { name: "Alice", age: 30 };
    console.log(typeof obj); // Outputs: "object"
    ```

6. **Arrays**
    - Basically it is a ordered collections of values, which can be of any type.
    - Arrays are a special type of object in JavaScript. They provide methods for manipulating lists of data, such as `.push()`, `.pop()`, and `.length`.
    ```javascript
    let arr = [1, 2, 3];
    console.log(typeof arr); // Outputs: "object"

    ```

7. **Functions**
    - Basically it is a reusable blocks of code that perform a specific task.
    - Functions are first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
    ```javascript
    function greet() {
        return "Hello!";
    }
    console.log(typeof greet); // Outputs: "function"
    ```

8. **Symbols**
    - They are a unique and immutable primitive values introduced in ES6. Symbols are often used as unique property keys in objects to avoid name clashes.
    ```javascript
    let sym = Symbol("description");
    console.log(typeof sym); // Outputs: "symbol"
    ```

9. **BigInt**
    - An arbitrary-precision integer
    - BigInts can represent integers larger than `2^53 - 1`, which is the largest number JavaScript can reliably handle with the Number primitive.
    ```javascript
    let bigIntValue = 1234567890123456789012345678901234567890n;
    console.log(typeof bigIntValue); // Outputs: "bigint"
    ```

10. **Null**
    - Represents the intentional absence of any value or object.
    - `null` is an assignment value that represents no value or no object. The fact that `typeof null` returns "object" is a historical bug in JavaScript, but it remains uncorrected for backward compatibility.
    ```javascript
    let emptyValue = null;
    console.log(typeof emptyValue); // Outputs: "object"
    ```

## 13. Conclusion
Understanding variables is foundational in JavaScript. By understanding these advanced concepts, you'll have a deeper grasp of how variables work in JavaScript. They're the building blocks that allow us to store, access, and manipulate data in our programs. As you continue your coding journey, you'll use variables in more complex ways, but the core principles will remain the same. This knowledge will enable you to write more efficient and error-free code, especially as you tackle more complex projects and challenges.