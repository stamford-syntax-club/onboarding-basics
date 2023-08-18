---
sidebar_position: 2
---
# Data Types

*Written By: Watsamon Phongwanit*

Code example can be run on: [https://runjs.co/](https://runjs.co/)

JavaScript has two categories of data types:

- Primitive Data Types:
- Composite Data Types

## Primitive Data Types

JavaScript has 7 primitive data types:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol

### String

A string (or a text string) is a series of characters like "John Doe". Strings are written with quotes. You can use single or double quotes:

Example

```jsx
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
```

2 strings can be joined together with a plus(`+`) sign

```jsx
let dog_name = "Shiro";
let dog_breed = "Chihuahua";

let sentence = dog_name + " is a " + dog_breed

console.log(sentence) // Output: Shiro is a Chihuahua
```

Try it yourself?

- Create a variable **`name`** and assign it your own name as a string.
- Create another variable **`greeting`** and concatenate it with the **`name`** variable to create a greeting message.
- Print the greeting message to the console.

<details>
<summary>Answer</summary>
<p>  

```jsx
    let name = "Watsamon";
    let greeting = "Hello!, " + name;
    
    console.log(greeting); //Output "Hello!, Watsamon"
```
</p>
</details>

### Number

Most programming languages have many number types. Javascript numbers are always one type: double (64-bit floating point). All JavaScript numbers are stored as decimal numbers (floating point). Numbers can be written with, or without decimals:

```jsx
// With decimals:
let some_number = 34.00;

// Without decimals:
let another_number = 34;
```

### BigInt

JavaScript BigInt is a new datatype that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

Example:

```jsx
let x = BigInt("123456789012345678901234567890");
```

### Boolean

Booleans can only have two values: true or false.

Example:

```jsx
let x = true;
let y = false;
```

Additionally, boolean data can be returned from expressions

Example:

```jsx
let x = 5;
let y = 5;
let z = 6;

console.log(x == y)       // Returns true
console.log(x == z)       // Returns false
```

### Undefined

In JavaScript, a variable without a value, has the value undefined. The type is also undefined or you can directly assign the value to undefined.

Example:

```jsx
let car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined
```

### Null

In JavaScript, null is an assigned value that represents the intentional absence of any object value. It is one of JavaScript's primitive values.

Example:

```jsx
let person = null;
```

### Symbol

A symbol is a unique and immutable primitive value and may be used as the key of an Object property.

Example:

```jsx
const sym = Symbol('foo');
```

## Composite Data Types

### Arrays

Think of arrays as a collection of your favorite books. 1. You have a list of titles: "Harry Potter," "Percy Jackson," and "The Hunger Games." In JavaScript, you can use an array to store these book titles together.

Items in arrays are called ***“Elements”***

JavaScript arrays are written with square brackets. Elements are separated by commas.

```jsx
const my_book_collection = ["Harry Potter", "Percy Jackson", "The Hunger Games"];

const cars = ["Saab", "Volvo", "BMW"];
```

*Note: the element can be of any type, it does not necessarily have to be string as shown in the example.*

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

In the above example:

```jsx
cars[0] // Saab
cars[1] // Volvo
cars[2] // BMW
```

Further explanations are available in the ***Arrays*** chapter!

### Objects

Consider a recipe for a sandwich. It has different parts: "ingredients," "steps," and "prep time." In JavaScript, you can create an object to hold all these details in a structured way.

JavaScript objects are written with curly braces `{}`

Object properties are written as name: value pairs, separated by commas.

Example:

```jsx
const sandwich = {
		name: "Ham Cheese Sandwich",
		ingredients: ["bread", "ham", "cheese"],
		steps: [......],
		preptime: ....
}
```

An easier example would be an object of a person

```jsx
const person = {
		firstName: "John",
		lastName: "Doe",
		age: 50,
		eyeColor: "blue"
}
```

The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

With the defined properties, we can access them easily via

```jsx
console.log(person.firstName) // "John"
console.log(person.lastName) // "Doe"
```

As well as manipulating them

```jsx
console.log(person.firstName) // Currently is "John"

person.firstName = "Christopher"

console.log(person.firstname) // Will now become "Christopher"
```

What if you try to manipulate a non-existing property?

```jsx
person.phoneNumber = 1235666;
```

The new property `phoneNumber` will be added to that object automatically!

Try it yourself?

- Create an object representing a book with properties like **`title`**, **`author`**, and **`year`**.
- Add a new property **`genre`** to the object and set its value.
- Access and print the author's name from the object.

<details>
<summary>Answer</summary>
<p>

```jsx
    const book = {
    		title: "Harry Potter",
    		author: "J K Rolling",
    		year: 1997
    };
    
    book.genre = "fantasy"
    
    console.log(book.author)
```
</p>    
</details>

## The typeof Operator

You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

Example:

```jsx
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
```