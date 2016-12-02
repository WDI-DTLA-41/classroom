![](https://scalerablog.files.wordpress.com/2015/05/meme-functions.jpg
)
# JavaScript Functions & Scope

| Learning Objectives - SWBAT |
| :--- |
| Define Functions and Explain Their Use Cases |
| Define & Invoke Functions With & Without Parameters |
| Describe Scope |

## Roadmap
1. Why Functions Anyway? (5 mins)
2. Defining and Calling Functions (45 mins)
3. Parameters (10 mins)
4. Scope (15 mins)
5. Further Study

### 1. Why Functions Anyway?<small> (5 mins)</small>

One way of answering this question is to imagine the world of programming **without** functions...

Without functions:

- ...we would not be able to break up our programs into more manageable chunks - our code would be a huge monolithic scroll. As developers, we solve complex problems with complex programs; and as humans, we tackle complexity by breaking it down into more manageable pieces.
- ...if we needed to execute the same code more than once (outside of a loop), we would have to write the same code again and again. In programming, there's a key principle known as **DRY** - Don't Repeat Yourself!
- ...we could not easily find a section of code that needs debugging and/or modification.

Coding without functions would be unproductive, error-prone, tedious; nay, **impossible**!

#### So, what is a function?

A function is a group of statements that can be called by other sections of code, including other functions, as many times as necessary.

Typically, a JavaScript **program** consists of a collection of functions, along with a small amount of application code that kicks off the application by calling a "main" function. **Otherwise, if ALL of the program's code was in functions, what would happen when the program is loaded into the browser?**

**? - What is a function and why would you use one?**

### 2. Defining and Calling Functions<small> (45 mins)</small>

Having endured _Rock, Paper, Scissors_, you should be somewhat familiar with functions.

#### Defining Functions

There are two primary ways to define functions in JS:

**Function Declaration**

```js
function sayHello(name) {
    console.log('Hello ' + name + '!');
}
```

**Function Expression**

```js
var sayHello = function(name) {
    console.log('Hello ' + name + '!');
};
```

**? - What similarities between the two approaches are there?**

**? - Differences?**

#### Calling Functions

In both cases, we could call, or **invoke**, the function like this:

```js
sayHello('Mickey');
// "Hello Mickey!"
```

#### Function Declarations vs. Function Expressions

##### Why Are There Function Expressions?

Well, functions in JS were always meant to be treated like first-class objects. In fact, they **are** objects - we can pass them as arguments to other functions, we can return them as the result of a function, and we can even dynamically add properties on them.

Soon enough, you will learn about the convenience of using **anonymous functions**, and these babies are made possible by function expressions.

Lastly, function expressions can be **immediately invoked**, which can come in handy as you'll learn later as well.

With the above in mind, function expressions just feel right to JS developers.

##### Why Are There Function Declarations?

A developer coming over from most other programming languages would be more familiar with the Function Declaration method of defining functions.

One advantage function declarations (also called function definitions) have is that they are fully parsed by the interpreter prior to execution and can therefore be invoked even if they are defined later in the source code. For example:

```js
var s = f1();  // blows chunks!
var t = f2();  // thank you function declarations :)

var f1 = function() { return "I'm coming from a function expression"; };

function f2() { return "I'm coming from a function declaration"; }
```

For all practical purposes, the above distinction is really the only "functional" difference you need to be concerned with.

Attempting to execute a function expression before it's been defined is the source of many an error for new JS developers.

#### Practice Writing Functions

You're going to write two functions, one as a function declaration & the other as a function expression.

This will be an individual exercise, however, feel free to seek guidance from your neighbors and instructors if you get stuck.

##### repl.it (Code Playground)

Writing functions in the console sucks. So, let's use one of the many "code playgrounds", [repl.it](https://repl.it/). Open it up and ensure that Javascript is the selected language.  This is similar to JSBin, which you were introduced to in the pre-work.

##### Write a Function Declaration

Write a function named _computeArea_ using the function declaration approach.

It will have two parameters: _width_ & _height_.

It will compute the area of a rectangle (_width_ X _height_) and return a string in the following form:
>The area of a rectangle with a width of ___ and a height of ___ is ___ square units.

Invoke the function to test it.

##### Write a Function Expression

Write a function named _planetHasWater_ using the function expression syntax.

It will have one parameter: _planet_.

Return _true_ if the _planet_ argument is either "Earth" or "Mars", otherwise return _false_.

Bonus points if you ensure the function will work regardless of the casing of the _planet_ being passed in ('earth', 'MARS', etc.).

Invoke the function a couple of times to test it!

### 3. Parameters/Arguments<small> (10 mins)</small>

Heck, we've already defined and invoked functions with parameters/arguments - next topic...

Not so fast! There are a few more tidbits about parameters/arguments to ponder:

- First, let's get this question out of the way:  _"What's the difference between a parameter and an argument?"_

  This question is best answered with an example (no need to run this):
  
  ```js
   var drive = function(miles) {    // miles is a parameter
     if (miles > 500) {
       return 'Take a break';
     } else {
       return 'Pedal to the metal';
     }
   };
   
   var result = drive(222);     // 222 is an argument
  ```

  So, they are called parameters when we are defining the function, and arguments when we are calling the function.
  
  FYI, in this example, our single argument is a number literal (`222`), however, you will commonly pass in variables as arguments also...

- Parameters in essence become local variables inside the function body. Therefore, in the example above, `miles` can be accessed anywhere within the function.

  **? - In the example above, what would the variable `result` equal?**

- Inside of the function we are automatically provided a variable named `arguments`.  `arguments` is an object that behaves like an array, that is, it has a `length` property and we can access the "elements" of `arguments` using _bracket notation_:

  ```js
   var func = function(p1, p2, p3) {
     console.log(arguments, arguments.length);
   };
   
   func(5, true, null, 'extra!');
   
   // console output: [5, true, null, "extra!"]   4
  ```
  
  Notice that we passed **more** arguments than there are parameters! JavaScript is very flexible and won't complain about this. That extra arg shows up nicely in the `arguments` variable.
  
  If we were to pass in fewer args than params, then the params without a matching argument would be set to `undefined`. 

  **? - In the above example, when `func` is executing, what are the values for `p1`, `p2` & `p3`?**
  
- Functions as Arguments

  In JavaScript, it's amazingly easy to pass around functions just like objects (because they are objects).

  Later this week, you'll see this concept in action when you start to use JS to manipulate the DOM (document object model, aka, elements) and handle events...

### 4. Scope<small> (15 mins)</small>

#### What is Scope?

>Disclaimer: This discussion of scope will not cover a third type of scope, block scope, being ushered in with ES2015/ES6's `let` keyword.

In general, the concept of **scope** in computer programming pertains to the accessibility of variables and functions from a given point of the code. In other words, as you write a line of code, what variables and functions do you have access to?

JavaScript has a single **global scope** and as many **local scopes** as there are functions. Yes, each function creates a new scope as shown in this diagram:

![](http://www.datchley.name/content/images/2015/08/js-es5-scope-2.png)

**? - How many scopes does the diagram show?**

#### You can look up, but you can't look down!

A key takeaway is that functions have access to the set of variables and functions defined within their own scope AND in the scopes **up** the chain of scopes, but **not down** it.

**? - What variables and functions are _accessible_ within the scope of `foo`?**

**? - What variables and functions are _accessible_ within the scope of `bar`?**

**? - Does the function `foo` have access to the variable `c`?**

It may also help you to envision the relationship between scopes as being nested similarly to the way we think about HTML elements; and when doing so, realize that children have access to parent scope, but parents do not have access to child scope.

Let's examine this code:

```js
var x = 5;

var myFun1 = function () {
  console.log(x);   // logs out 5
  myFun2();
  
  var myFun2 = function () {
    console.log(x);   // logs out 5
  };
};

myFun1();
```
Note how we go right up the scope chain looking for a variable (or function). Once the variable is found, the JS runtime engine will stop looking up the chain because, well, it found what it was looking for. If it progresses all the way up to the global scope and still does not find the the variable it's looking for, **what do you think is returned?**

**? - In the example above, what if `myFun1` had its own variable `x` defined like this:<br>`var x = 100;`<br>What would the value of `x` be within `myFun1`?**<br>**Within `myFun2`?** 

#### Global Scope

In our browsers, the global scope is represented by the `window` object. As far as scopes are concerned, it is at the top of the food chain and it's properties are available to **every** function we write.

It is generally bad form for our programs to create variables in the global scope.  Doing so risks us overwriting data in use by JS libraries/frameworks or other routines. Creating global variables is referred to as "polluting the global scope", and we all know that it's not good to pollute.

If we define a variable within the global scope, it becomes a property on the `window` object. You can see this in action by typing `var smog = 'sucks'` in the console, then type `window.` (don't forget the dot), scroll down and find the pollution we have created - yuck!

One way we can prevent our code from leaking into the global scope is by wrapping it with a construct known as an Immediately Invoked Function Expression, or "IIFE" (pronounced "iffy").  It looks like this:

```js
(function() {
    'use strict';

    // your code here...
    
})();
```
**? - Why does this construct virtually prevent variables and functions from being created in the global scope?**

We'll use IIFE's regularly later in the course.


**? - Scope refers to the set of ________ and ________ that are accessible within a given point in the code.**

**? - When is a new scope created?**

### 5. Further Study

#### Nesting Functions

As the examples above have shown, we can define functions within functions!

Why would we want to do this? Well, Perhaps an outer function needs a "helper" function that would only be relevant only to to the outer function. It would be good programming practice to "hide" that function from the rest of the program.

For example (no need to execute this):

```js
function openNewAccount(name, openingBalance) {
  var acctNum = generateAcctNum();
  
  // createAccount is a function available outside this function
  var acct = createAccount(acctNum, openingBalance);
  return acct;
   
  function generateAcctNum() {
    return Date.now();  // super amazing algorithm :)
  }
}
```

As you can see, there's a nifty `generateAcctNum` function in there and it's only relevant to when a new account is created, so it's nested within the `openNewAcount` function.

Next week, you'll learn that nested functions are the creators of something known as _closures_.

## References

[MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
