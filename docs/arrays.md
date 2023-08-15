---
sidebar_position: 3
---

# Arrays
*Written By: Ayham A.H. Tamim*


In JavaScript, an array is a data structure used to store a collection of values. These values can be of any data type, including numbers, strings, objects, or even other arrays.

Arrays provide a way to organize and manage multiple values under a single variable name. Each value within an array is referred to as an element, and each element is associated with an index, which is a numerical position indicating its place in the array.

Below are some examples of different types of arrays in JavaScript.

> NOTE:
> The call to the `render()` function is used to display the output of the code in the browser. You can ignore it for now.

### **The code blocks are interactive! Try changing the values and see what happens.**

### 1. Why use arrays?

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

 ```javascript live noInline
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

render(`${car1}, ${car2}, ${car3}`);
  ```

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

Here's an example of how to create an array:

```javascript live noInline
let cars = ["Saab", "Volvo", "BMW"];

render(`${cars}`);
```

### 2. Accessing array elements

> NOTE:
> The call to the `render()` function is used to display the output of the code in the browser. You can ignore it for now.

In this example we create an array and assign car the value 0 from the cars array: 

```javascript live noInline
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

render(`${car}`);
```

### 3. Adding an element to an array

You can use the built-in method push() and unshift() to add elements to an array.

The push() method adds an element at the end of the array. For example: 

```javascript live noInline
const cars = ["Saab", "Volvo", "BMW"];

cars.push("Audi");

render(`${cars}`);
```

The unshift() method adds an element at the beginning of the array. For example:

```javascript live noInline
const cars = ["Saab", "Volvo", "BMW"];

cars.unshift("Audi");

render(`${cars}`);
```

### 4. Removing an element from an array

You can use the built-in method pop() and shift() to remove elements from an array.

The pop() removes the last item in a list, for example:

```javascript live noInline
const cars = ["Saab", "Volvo", "BMW"];
cars.pop();

render(`${cars}`);
```

While the shift() removes the first item in a list, for example:

```javascript live noInline
const cars = ["Saab", "Volvo", "BMW"];
cars.shift();

render(`${cars}`);
```

---


These are the basic arrays you'll encounter in JavaScript. You will use nearly all of them extensively while you code in the language, and understanding them is paramount.


