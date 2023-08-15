---
sidebar_position: 6
---

# Functions

*Written By: Chinathai Panditya*

***Function*** is just a block of code written to perform specific action!

```javascript
function repeat_hello_world_10_times() {
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
}
```

> BTW, feel free to copy the code and play here: [https://runjs.co/](https://runjs.co/)
> 

## Functions in real life…but in JS!

- Cars: drive, brake, park, rollback, drift..?
    
    ```javascript
    function drive() {
    	// start accelerating
    }
    ```
    
- Microwave: set timer, set mode
    
    ```javascript
    function set_time_1_minute() {
    	// set microwave timer for 1 minute
    }
    ```
    

![Untitled](/img/functions/Untitled.png)

## How to use functions?

After you have defined the function, now it is time to "call" it. Simply type in the function name, followed by parentheses `()`

The function only needs to be written once, and used as many time as we want to - Reusability~

Note: *the code inside the function will not run unless is called by us*

```javascript
// we define the function here already
function repeat_hello_world_10_times() {
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
		console.log("Hello World");
}

// simply type in the function name followed by '()'
repeat_hello_world_10_times(); 
// Output:
// Hello World
// Hello World
// Hello World
// Hello World
// Hello World
// ....
```

## Javascript&apos;s Built-in functions

There are plenty of useful functions have already been defined by javascript. This means we can simply use those functions right away without having to define it ourselves

Here&apos;s some example:

```javascript
// alert() displays an alert box with a message and an OK button.

alert("Hello! I am an alert box!!");
```

Here is what it looks like: 

![Untitled](/img/functions/Untitled1.png)

The list of some built-in functions provided by default in Javascript can be found here [https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)

## Example - Add Two Numbers Function

We&apos;re going to write a function that asks user for 2 numbers, then we return the result of adding those two numbers together:

```javascript
function add_two_numbers(){

	// prompt() is a built-in function that takes input and store it as variable
	// parseInt() is a built-in function that converts the value from prompt() to whole number
	// ask user to enter a number and store in variable 'num1' and 'num2'
	let num1 = parseInt(prompt("Enter first number: "))
	let num2 = parseInt(prompt("Enter second number: "))

	// calculate the addition between num1 and num2
	let result = num1 + num2

	// print out the addition result
	alert(result)
}

add_two_numbers() // call the function
```

## Challenge Time~!   Fahrenheit to Celsius Converter

*Mr Chinathai has recently moved from Thailand to United States to work as a janitor at KFC. Not long after, he realizes that Fahrenheit is the standard unit for temperature in the US. However, Mr Chinathai had been using Celsius to measure temperature for his whole life. Your task is to write a function that converts temperature in Fahrenheit unit to Celsius so that Mr Chinathai can read off easily*

Hint:

- you will need to gather temperature input from user via:
    - `let fahrenheit = prompt("Enter temperature in fahrenheit: ")`
- Formula for converting from Fahrenheit to Celsius is:
    - `(fahrenheit - 32) * 5 / 9`
- Show the temperature in Celcius via:
    - `alert(<your celsius value>)`

How to check if the program is correct?

- If Fahrenheit is 120
    - the program should show 48.89 Celsius
- If Fahrenheit is 90
    - the program should show 32.22 Celsius
- Share your wonderful code on discord  :3 we&apos;ll go have a look!

## Parameters

***Parameters*** are inputs to the function. 

Think of it as ingredients you give your chef to cook, different ingredients combination result in different menus being made

```javascript
// ingredient1,2,3 are "parameters"
function cook(ingredient1, ingredient2, ingredient3) {
	// do something with ingredient1

	// do something with ingredient2

	// do something with ingredient3

	// Our food is Ready!
}

cook("Spaghetti", "Chili", "Garlic") // Yes, I'm carving Aglio Olio
cook("Rice", "Chicken", "Egg")
```

The same concept applies here in programming - the use of parameters allows functions to perform different actions depending on the inputs it gets. For example:

```javascript
function say_hello_to(name) {
		console.log("Hello! "+name)
}

say_hello_to("Chinathai") // Output: Hello! Chinathai
say_hello_to("Khing") // // Output: Hello! Khing
```

If you notice, the built-in functions that we used in the previous section also require parameters as well!

```javascript
alert("text here") // use value we pass to display message
prompt("enter something") // use value we pass to prompt user for input
```

But here&apos;s a twist, when we pass some value to parameters, they are now called "arguments"

Confused? Let&apos;s go back to this:

```javascript
function cook(ingredient1, ingredient2, ingredient3) {
	// do something with ingredient1

	// do something with ingredient2

	// do something with ingredient3

	// Our food is Ready!
}

cook("Spaghetti", "Chili", "Garlic")
```

In this code example:

- `ingredient1`, `ingredient2`, and `ingredient3` are called **"Parameters"**
- `Spaghetti`, `Chili`, and `Garlic` are called **"Arguments"**

Parameters are placeholders for values that will be provided when the function is called

Arguments are actual values that are supplied to the function&apos;s parameter

Lots of people use the terms interchangeably, so no worries if you get confused lol

### Why Parameters?

Your food become spicier when you add chili while it will become saltier had you put salt instead.

Parameters can have different values, and those dynamic values allow our functions to behave differently depending on the values we put in!

BUT~!!  In the "Add Two Function" we can see that we get inputs from users just fine without the need of parameter right? So why use it?

```javascript
function add_two_numbers(){
	let num1 = parseInt(prompt("Enter first number: "))
	let num2 = parseInt(prompt("Enter second number: "))

	// now we can use num1 and num2 to create result!
```

The problem is that  `prompt()` requires user interactions which is only available if the function interact directly with users. How about those functions that do not?

We can change the `add_two_numbers` function to use parameters like this:

```javascript
function add_two_numbers(num1, num2) {
	let result = num1 + num2;
	alert(result)
}

add_two_numbers(5,10)
// Output: 15

add_two_numbers(9,12)
// Output: 21
```

## Local Scope and Global Scope

In the real world, we cannot possibly grab something that we cannot see or have no access to it.

In programming, we call this as "scope". It refers to visibility and accessibility of variables within different parts in your code.  There are 2 primary levels of scopes in Javascript, which are local scope, and global scope.

Let&apos;s see an example below:

```javascript
// ----Inside Kitchen----
function cook(ingredient1, ingredient2, ingredient3) {
	let food = "Fried Rice";

	console.log(food) 
	// Output: Fried Rice
}

// ----Customer Table----
console.log(food) 
// Output: 'food' is not defined (not accessible outside the function)
```

You can see that customers cannot access the variable `food` defined in the `cook()`function

In the real world, this problem is probably caused by lazy waiters

But in programming, this is because `food` was declared **inside a function, and therefore has a local scope within that function only**

Whereas in this example:

```javascript
let customer_order = "Spaghetti";

// ----Inside Kitchen----
function cook(ingredient1, ingredient2, ingredient3) {
	console.log(customer_order) 
	// Output: Spaghetti
}

// ----Customer Table----
console.log(customer_order) 
// Output: Spaghetti
```

when `customer_order` is declared at the outermost area **outside a code block, it is now a *********************global scoped variable********************* that can be accessed anywhere**

## Returning value from functions

There are times to times where we need the output of the function for proceeding the next step 

Consider this example:

```javascript
function cook(ingredient1, ingredient2, ingredient3) {
	// do some cooking
	let food = "Spaghetti With Garlic And Chili";
	console.log(food) 
}

function eat(food) {
	console.log("I'm eating " + food)
}

cook("Spaghetti", "Garlic", "Chili") // Output: Spaghetti With Garlic And Chili
eat(food) // Output: 'food' is not defined (not accessible outside the function)
```

We can see that the function `eat()` requires the `food` which is created by function `cook()`

….But we cannot access `food` because it is a local scoped variable of `cook()` ……

To solve this problem, we have 2 choices:

- The Spaghetti Approach
- The Programmer Approach

### The Spaghetti Approach

We can simply call the `eat()`function inside the `cook()` function right away!

```javascript
function cook(ingredient1, ingredient2, ingredient3) {
	// do some cooking
	let food = "Spaghetti With Garlic And Chili";
	eat(food)
}

function eat(food) {
	console.log("I'm eating " + food)
}

cook("Spaghetti", "Garlic", "Chili") // Output: I'm eating Spaghetti With....
```

Although this approach is fine in some cases, it has some potential issues:

- Limited Reusability - function `cook()` and `eat()` are too tightly coupled together like ***spaghetti***.
    - You will be forced to call the function `eat()` every time function `cook()` is called
    - You&apos;re forced to eat the food right after finish cooking it - can&apos;t even take photos of the food you make before eating!
- Readability and Separation of Concerns - as the program gets bigger, calling functions inside functions will end up making the code harder to read and maintain. It&apos;s a good practice to separate different concerns (cooking vs eating) into different functions

### The Programmer Approach

For the sake of readability, reusability, and separation of concern, we can use the keyword `return` to have the function `cook()` returns the output (food) that it creates as variable, which we can then pass it as argument to the `eat()` function.

Confused? Here&apos;s how:

```javascript
function cook(ingredient1, ingredient2, ingredient3) {
	// do some cooking
	let food = "Spaghetti With Garlic And Chili";
	return food // return the value of 'food'
}

function eat(food) {
	console.log("I'm eating " + food)
}

let food = cook("Spaghetti", "Garlic", "Chili") // retrieve value from cook()
eat(food) // Output: I'm eating Spaghetti With Garlic And Chili
```

Now we can be more flexible before eating our food, for example:

```javascript
function cook(ingredient1, ingredient2, ingredient3) {
	// do some cooking
	let food = "Spaghetti With Garlic And Chili";
	return food
}

function eat(food) {
	console.log("I'm eating " + food)
}

function selfie_with(food) {
	console.log("I'm taking a selfie with " + food)
}

let food = cook("Spaghetti", "Garlic", "Chili")
selfie_with(food)
eat(food)
// Output: 
// I'm taking a selfie with Spaghetti WIth Garlic And Chili
// I'm eating Spaghetti With Garlic And Chili
```

Again, if you notice, the function `prompt()` that we use to get user inputs actually returns output as variable for us to use as well~

```javascript
let num = prompt("Enter a number: ")
```

## Challenge Time~!    Height Converter

Apparently, Mr Khing wants to convert his height from meters to millimeters, centimeters, and kilometer. Don&apos;t ask him why, he doesn&apos;t even know the reason. Your task is to write Mr Khing a program that consists of 3 functions:

1. `convert_to_centimeters` that returns Mr Khing&apos;s height in centimeters unit
2. `convert_to_milimeters` that returns Mr Khing&apos;s height in millimeters unit
3. `convert_to_kilometers` that returns Mr Khing&apos;s height in kilometers unit

After successfully convert to the specified units, have the program show an alert box displaying the result of each conversion. Mr Khing&apos;s height is 2.5 meters.

Hint:

- keyword `return` should be used to tell a function to return data
    - retrieve the returned data via
        - `let height_in_cm = convert_to_centimeters(<Mr Khing's Height>)`
- To convert from meters to kilometers, you can use:
    - `height_in_meters / 1000`
- To convert from meters to centimeters, you can use:
    - `height_in_meters * 100`
- To convert from centimeters to millimeters, you can use:
    - `height_in_centimeters * 10`
    

This is the output that you should get:

![Untitled](/img/functions/Untitled2.png)

![Untitled](/img/functions/Untitled3.png)

![Untitled](/img/functions/Untitled4.png)

## Arrow Functions

Additionally, Javascript has a funny way to declare a function! It&apos;s my honor to present you Mr Arrow Function

```javascript
const add_two_numbers = (num1, num2) => {		
		return num1 + num2
}
```

It&apos;s basically the same with `function` keyword, but some differences:

- Shorter Syntax
- No variable hoisting

### Variable Hoisting

Variable declarations(including functions) are moved to the top automatically during compilation, allowing functions to be called before the actual declaration

What does it mean?  Here&apos;s an example:

```javascript
console.log(addRegular(3, 4)); // Output: 7
function addRegular(a, b) {
  return a + b;
};
```

As you can see that we can call `addRegular()` before the function is actually declared. This is because the function gets hoisted to the top before the program runs!

However, arrow functions do not get hoisted, and therefore must be declared first before we can call it

```javascript
console.log(addArrow(3, 4)); // Output: ReferenceError
const addArrow = (a, b) => a + b;
```

## Extras - First Class~

Finally, to complicate things a little bit, it is important to mention that functions in Javascript are **first-classed citizens**

It means that they have the same rights and privileged as other data types such as numbers, strings, and objects in Javascript.

So…..they can be:

- Assigned to a variable just like any other data types
    
    ```javascript
    function add(a, b) {
      return a + b;
    }
    
    function subtract(a, b) {
      return a - b;
    }
    
    // Assign functions to variables
    const operation1 = add;
    const operation2 = subtract;
    ```
    
- Passed as arguments
    
    ```javascript
    // Pass functions as arguments
    function doOperation(func, a, b) {
      return func(a, b);
    }
    
    const result_add = doOperation(add, 3, 5) // result: 8
    const result_subtract = doOperation(subtract, 5, 2) // result: 3
    ```
    
- Returned as an output from another function
    
    ```javascript
    function createMultiplier(multiplier) {
      return function (number) {
        return number * multiplier;
      };
    }
    
    // Create a function that doubles a number
    const double = createMultiplier(2);
    
    // Create a function that triples a number
    const triple = createMultiplier(3);
    
    // Use the returned functions
    console.log(double(5));  // Output: 10 (2 * 5)
    console.log(triple(5));  // Output: 15 (3 * 5)
    ```
    

There are more use cases when you start going deeper, but for now this is enough..

And that wraps up everything for the "Functions in Javascript" chapter, Enjoy Coding! 😃