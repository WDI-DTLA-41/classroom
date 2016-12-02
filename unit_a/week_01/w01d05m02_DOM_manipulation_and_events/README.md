# DOMination

## Contents

1.  **[What is the DOM](#what-is-the-dom)**
  - [The `document` object](#the-document-object)
  - [DOM Node objects (HTML elements)](#dom-node-objects)
2.  **[Retrieving Elements](#retrieving-elements)**
  - [Using `document.querySelectorAll`](#using-documentqueryselectorall)
3.  **[Editing Elements](#editing-elements)**
  - [JavaScript and Classes](#javascript-and-classes)
4.  **[Adding and Removing Elements](#adding-and-removing-elements)**
  - [Exercise: Seeming Wasteland](#seeming-wasteland)
5.  **[Attaching Events](#attaching-events)**
  - [Essential Events](#essential-events)
  - [Event Listeners](#event-listeners)
6.  **[Writing Complex Event Handlers](#writing-complex-event-handlers)**
  - [Event Propagation, aka "Bubbling"](#event-propagation-aka-bubbling)
  - [The Event Object](#the-event-object)
7.  **[Modifying Events](#modifying-events)**

## Lesson Objectives

| Section                        | Objectives                                                                          |
|:-------------------------------|:------------------------------------------------------------------------------------|
| What is the DOM                | Define DOM and identify where to find it in the browser API.                        |
| What is the DOM                | Define what is meant by DOM node (element), and identify nodes on an HTML page.     |
| Retrieving Elements            | Create a JS reference to a DOM Node/element using `document.getElementById`.        |
| Retrieving Elements            | Create JS references to DOM Nodes/elements using `document.querySelectorAll`.       |
| Editing Elements               | Directly edit the attributes of DOM Nodes/elements, including `id`.                 |
| Editing Elements               | Access and edit the text of DOM Node/elements.                                      |
| Editing Elements               | Find, add or remove classes on DOM Nodes/elements.                                  |
| Adding and Removing Elements   | Use `Node#remove` and `Node#replaceChild` to remove or replace DOM Nodes/elements.  |
| Adding and Removing Elements   | Use `document.createElement()` to create new DOM Nodes/elements.                    |
| Adding and Removing Elements   | Use `Node#appendChild` and `Node#insertBefore` to add DOM Nodes/elements to an HTML page. |
| Attaching Events               | Use `Node#addEventListener` to create "listeners" for DOM events.                   |
| Attaching Events               | Write event handlers as inline anonymous functions.                                 |
| Attaching Events               | Explain what is meant by "event listener" and "event handler", and identify the<br> parts of an `.addEventListener()` expression. |
| Attaching Events               | Name important DOM events and give use cases for attaching interaction to each:<br> `DOMContentLoaded`, `click`, `submit`, `focus`, `keyup`, `mouseover`. |
| Writing Complex Event Handlers | Access and edit DOM event information inside an event handler from an event object. |
| Writing Complex Event Handlers | Have an event handler listen to multiple DOM elements' events.                      |
| Writing Complex Event Handlers | Explain "event bubbling", or propogation, in the DOM.                               |
| Modifying Events               | Prevent the default DOM event handler from firing.                                  |
| Modifying Events               | Prevent the propogation of events in through the DOM.                               |
| Modifying Events               | Differentiate between using `event.stopPropogation` and `event.preventDefault`,<br> and give use cases for each. |
| Modifying Events               | Use event bubbling / propogation to write "smart" event handlers.                   |

The DOM is a **huge** topic. Before we begin, here are resources that
can help you learn about it.

- **[Our cheatsheet][cheatsheet]**
- [A DOM tutorial][tutorial]
- [MDN Docs][mdn-dm]
- [Another DOM cheatsheet][ch-dom]
- [A good, concise list of DOM events][wiki-events]

---

## What is the DOM?

<!-- 
| Objectives                                                                      |
|---------------------------------------------------------------------------------|
| Define DOM and identify where to find it in the browser API.                    |
| Define what is meant by DOM node (element), and identify nodes on an HTML page. |
-->

**The DOM is the interface (API) that we use to access our web page 
(HTML/CSS) from our JavaScript.**

```html
<ul class="cool-list hotness" style="margin: 0;">
    <li>Item 1</li>
    <li>Item 2 <span>(more?)</span></li>
    <li class="special">Item 3 (wow!)</li>
</ul>
```

> Think about the HTML code above, about what information each element 
> contains and how they relate to each other. How might we represent this 
> information and these relationships as a JavaScript object?

As we've learned, usually we model things in JavaScript as objects. These
may be modeled as:

```javascript
var html = { 
  // the HTML Element, or Node, <ul>
  tag: "ul",
  classList: [
    "cool-list", 
    "hotness"
  ],
  styles: {
    margin: 0
  },
  children: [
    { // the HTML Element, or Node, <li>
      tag: "li",
      text: "Item 1"
    },
    { // the HTML Element, or Node, <li>
      tag: "li",
      text: "Item 2",
      children: [
        { // the HTML Element, or Node, <span>
          tag: "span",
          text: "(more?)"
        }
      ]
    },
    { // the HTML Element, or Node, <li>
      tag: "li",
      text: "Item 3 (wow!)",
      classList: ["special"]
    }
  ]
};
```

> **And, in fact, this is what happens!**

Our browser loads all of the HTML into a JS object that is available on
the global scope, called `document`.

---

#### The `document` object

> Let's use the [`example.html` file](example.html) packaged with this 
> lesson. Open the page in your browser and type the following into the
> console. What is the return value of each?

```js
document.documentURI
document.body
document.images
document.scripts
document.styleSheets
document.anchors
```

`document` holds the ***Document Object Model***, or the document (web 
page) modeled as a JS object. That means it has a lot of attributes and
methods, and many of these attributes are also JS objects. It's a very
complex structure.

The most important thing to remember is this: what we most need to know
about anything in programming is *why* to use it, and *how* to use it.
For the DOM:

- we locate HTML elements on a web page, edit them, add new ones, and
  make them interactive by writing JavaScript that uses the DOM
- we work with the DOM by calling methods on the global `document`
  object

---

#### DOM "Node" objects

Every single part of web page is represented by a DOM Node JavaScript 
object. "Node" is a type of object that has certain properties
and methods, which [you can explore on MDN][node-api], including:
  - `.textContent`,
  - `.parentNode`,
  - `.appendChild()`,
  - `.insertBefore()`,
  - and more…

Nodes which represent HTML elements also have 
[Element-specific properties and methods][element-api], including:
  - `.tagName`,
  - `.id`,
  - `.classList` & `.className`,
  - `.innerHTML`,
  - `.children`,
  - `.remove()`,
  - `.addEventListener()`,
  - and more…

Using all of these properties and methods we can interact with our
web page! But first, we need to retrieve the nodes we want directly from
the DOM (`document` object).

---

## Retrieving Elements

<!-- 
| Objectives                                                                    |
|:------------------------------------------------------------------------------|
| Create a JS reference to a DOM Node/element using `document.getElementById`.  |
| Create JS references to DOM Nodes/elements using `document.querySelectorAll`. |
-->

In order to get to elements on our web page, we *could* access them from
the DOM like so:

```javascript
var someParagraphEl = document.body.children[1].children[0].children[0];
```

*But to do that you would be insane!*

Instead, there a lot of search methods built in to `document`. We're
going to learn to use two of these: `document.getElementById`, and 
`document.querySelectorAll`.

The simple rule is this:

***If you want to get ONE, specific element, give it an `id` attribute,
and use `document.getElementById`.*** Eg (in `example.html`):

```javascript
var niceImageEl = document.getElementById("nice-pic-bro");
```

***If you want to get a GROUP of elements, or if you can't give an 
element an `id`, you should use `document.querySelectorAll`.***
Eg (in `example.html`):

```javascript
var paraWithoutLinkEls = document.querySelectorAll("p.no-links");
```

> **Note: Chrome's console displays DOM Nodes like HTML elements in the
> console, not like most other JavaScript objects. This can be confusing!
> Keep in mind, they are actually just objects.**

---

#### Using `document.querySelectorAll`

The great thing about `document.querySelectorAll` is that it picks nodes
from the DOM based on the same rules as CSS selectors! Eg, if we wanted
to pick and element with the class `no-links` inside the element 
`<main>`, we would write:

```javascript
document.querySelectorAll("main .no-links");
// just like:
// main .no-links {
//   ...
// }
```

**But there is something to look out for!**

`document.querySelectorAll` *always returns an array of elements*, also
known as a NodeList. Even if there is only one item! Eg:

```javascript
var imgEl = document.querySelectorAll("#nice-pic-bro");

// imgEl is NOT an element! It's an array!
```

Thus, if you want to access that item from the list, you would need to
write one of:

```javascript
// Way #1:
var nodeList = document.querySelectorAll("#nice-pic-bro");
var imgEl    = nodeList[0];

// Way #2:
var imgEl = document.querySelectorAll("#nice-pic-bro")[0];
```

<!--
**For practice, you can use the exercise 
[Catch Me If You Can](exercises/catch_me_if_you_can)!**
-->

---

## Editing Elements

<!-- 
| Objectives                                                          |
|:--------------------------------------------------------------------|
| Directly edit the attributes of DOM Nodes/elements, including `id`. |
| Access and edit the text of DOM Node/elements.                      |
| Find, add or remove classes on DOM Nodes/elements.                  |
 -->

Once you have a DOM node representing an HTML element, you can make all
kinds of changes to it!

Any HTML attributes (like `src`, `alt`, `disabled`, `name`, and `id`)
can be accessed or assigned new values directly, as properties:

```javascript
var imgEl = document.getElementById("nice-pic-bro");

console.log(imgEl.id);
console.log(imgEl.alt);

imgEl.src = "http://www.catholic.org/files/images/saints/43.jpg";
imgEl.alt = "St Dominic Savio, who died of pleurisy, gives the camera sleepy eyes.";
imgEl.id  = "i-mean-yeah-its-still-an-ok-pic";
```

You can access and edit the text of any node easily with the property
`.textContent`:

```javascript
var headingEl = document.querySelectorAll("header .no-links")[0];

console.log(headingEl.textContent);

headingEl.textContent = "Are you prepared to meet St. Dominic Savio?"
```

---

#### JavaScript and Classes

More complex than simply using properties to edit the element, however,
is working with the classes that are attached to one.

> Remember: classes are stored on HTML elements in the attribute `class`
> as a space-delimited list (a list of class names separated by spaces).

Since the word "class" has so many uses in programming, and since the 
`class` attribute in HTML actually represents a list of values, instead
of one value, the DOM API gives us two oddly-named properties to use
with classes:

1.  If we want to simply access the string value of the class propery,
    we can use `Node#className`. Eg:
 
    ```javascript
    var secondPara = document.querySelectorAll("main p")[1];
 
    console.log(secondPara.className);
    #=> "no-links code"
    ```
2.  Otherwise, we will use `Node#classList` to add, remove, or check for
    a class, with:
    - **`Node#classList.contains()`**
    - **`Node#classList.remove()`**
    - **`Node#classList.add()`**

For example:

```javascript
var imgEl = document.querySelectorAll("img")[0];

console.log(imgEl.classList);
```

Since we are now looking at St. Dominic Savio, let's check for and remove
any inappropriate classes using `Node#classList.contains()` and 
`Node#classList.remove()`.

```javascript
var imgEl = document.querySelectorAll("img")[0];

// if the element has the class "parole-violation"
if (imgEl.classList.contains("parole-violation")) {

  // remove it!
  imgEl.classList.remove("parole-violation");
}

console.log(imgEl.classList.contains("parole-violation"));
#=> false
```

Now, let's give St. Dom a new, cool class, using `Node#classList.add()`!

```javascript
var imgEl = document.querySelectorAll("img")[0];

imgEl.classList.add("halo");

console.log(imgEl.classList);
```

<!--
**For practice, you can use the exercise 
[Extreme Makeover](exercises/extreme_makeover)!**
-->

---

## Adding and Removing Elements

<!-- 
| Objectives                                                                                |
|:------------------------------------------------------------------------------------------|
| Use `Node#remove` and `Node#replaceChild` to remove or replace DOM Nodes/elements.        |
| Use `document.createElement()` to create new DOM Nodes/elements.                          |
| Use `Node#appendChild` and `Node#insertBefore` to add DOM Nodes/elements to an HTML page. |
 -->

The final way we will change our DOM is by creating and adding new
elements to it and removing elements that are on it.

Easiest is removing nodes. To remove our final paragraph we could write:

```javascript
var finalParaEl = document.getElementById("outside-link");

finalParaEl.remove(); // tada!
```

In order to add a new element to the page, however, we need to create
one first. You create new, empty elements with `document.createElement()`.
These nodes can be stored in variables, but aren't added to the DOM by
default. To do that, you must "insert" them into the DOM somewhere.

The most common ways to insert DOM nodes are either with 
`Node#appendChild` or `Node#insertBefore`. Both of these are called
**on** nodes and are **passed** nodes as a parameter.

- `Node#appendChild`: inserts the new node as the **last "child" inside**
   of the called node.
- `Node#insertBefore`: inserts the new node as **a child** of the called
   node, **directly before** the second node passed as a parameter. You 
   can also use `Node#insertAfter`.

For example, to add another paragraph to the `<main>` element, as the
last paragraph, you could write:

```javascript
var mainEl    = document.querySelectorAll("main")[0];
var newParaEl = document.createElement("p");

newParaEl.textContent = "A boy of heroic virtue.";

mainEl.appendChild(newParaEl);
```

However, if you want to add it as the first paragraph, you would have to
write:

```javascript
var mainEl      = document.querySelectorAll("main")[0];
var firstParaEl = mainEl.children[0];
var newParaEl   = document.createElement("p");

newParaEl.textContent = "The pious son of a blacksmith.";

mainEl.insertBefore(newParaEl, firstParaEl);
```

<a name="seeming-wasteland"></a>
**For practice, you can use the exercise 
[Seeming Wasteland][seeming-wasteland]!**

---

## Attaching Events

<!-- 
| Objectives                                                                                  |
|:--------------------------------------------------------------------------------------------|
| Name important DOM events and give use cases for attaching interaction to each:<br> `DOMContentLoaded`, `click`, `submit`, `focus`, `keyup`, `scroll`, and `mouseover`. |
| Use `Node#addEventListener` to create "listeners" for DOM events.                           |
| Explain what is meant by "event listener" and "event handler", and identify the<br> parts of an `.addEventListener()` expression. |
| Write event handlers as inline anonymous functions.                                 |
 -->

Once you know how to access, edit and insert new nodes into the DOM, you
can begin to make your web page interactive. How? By attaching such
actions to *user-triggered* **events**.

> The big secret to events and **event-driven development** is this: you
> don't *create* events. The events are described by the designers of the
> DOM API, and are built in to the browser. They are happenning (or
> *firing*) all the time! Some cause things to happen, like form `submit`
> events, but most do not.

Events are created by DOM nodes, when the user interacts with them in a
certain way. The term for the node that created the event is its *target*.
Very common events include:

#### Essential Events

|   Target(s)   |    Event Name   | User Interaction | Default Effect |
|:-------------:|:---------------:|:-----------------|:---------------|
|   `document`  | `DOMContentLoaded` | When the page is done loading. | |
| `document`, inputs |   `keyup`  | Presses (releases) a key while on… | |
| inputs, links |     `focus`     | Tabs to or clicks on… | Highlights. |
| forms (via an input) | `submit` | Clicks submit or presses enter inside of… | Send request, refresh page. |
|   any node    |   `mouseover`   | Moves mouse over… | |
|   any node    |     `click`     | Clicks on… | |
|   `window`    |     `scroll`    | Scrolls the window. | Move the viewport up or down. |

#### Event Listeners

In order to write JavaScript that is triggered by, or reacts to, these
events / user interactions, we need to attach **event listeners** to
elements (nodes on the DOM). Every event listener has 4 parts:

1. the element that is listening for the event,
2. `.addEventListener()`,
3. the type of event to listen for (first parameter),
4. the action to perform, as a function (second parameter). This is 
   called the *event handler*.

For example:

```javascript
var el = document.getElementById("example");
var action = function() {
  alert("You clicked the element #example!");
};

el.addEventListener("click", action);
```

> Now, when someone clicks on that element, the function `action` is run!

The same piece of code would usually be written with an *inline,
anonymous function*:

```javascript
var el = document.getElementById("example");

el.addEventListener("click", function () {
  alert("You clicked the element #example!");
});
```

For either of these listeners, we can refer to the action, or function,
as the **event handler**. The handler is a part of the listener if
written as an inline anonymous function; but it can exist separately.

Event listeners can be added and removed dynamically, and new handlers
can be "registered" to listen to events. A single event may have many
handlers registered to run. To find out more, see the MDN documentation
for [`Node#addEventListener`][mdn-add] and for 
[`Node#removeEventListener`][mdn-rem].

<!--
**For practice, you can use the exercise 
[We Can Rebuild Her](exercises/we_can_rebuild_her)!**
-->

---

## Writing Complex Event Handlers

<!-- 
| Objectives                                                                          |
|:------------------------------------------------------------------------------------|
| Access and edit DOM event information inside an event handler from an event object. |
| Have an event handler listen to multiple DOM elements' events.                      |
| Explain "event bubbling", or propagation, in the DOM.                               |
-->

While the above examples can work for very trivial uses, almost every
event handler you write will need to do more complex activities. These
handlers need to be aware of certain things:

- what element was the *target* of the event?
- what element *heard* the event / is this handler registered to?
- what kind of event is it?
- if it's a key press, what key was it?
- if it's a scroll, which direction?
- etc…

> How can an event's *target* be separate from the element that "heard" 
> it (had a listener capture the event)? Think about a list: if you 
> click on an item in the list, you're still clicking on the list itself
> too, right? You could register a listener on the list, and when a user
> clicks on an item the listener will trigger too! This happens due to
> a property of events called "propagation," or "event bubbling."

First off, we will begin to look at writing more useful listeners, that
cover multiple elements we want to listen to. Then we'll look at how to
uncover information about the event by looking at the object that
represents it.

---

#### Event Propagation, aka "Bubbling"

<!--**[Example: "Event Propagation" (JS Fiddle)][propagation-example]**
-->

**[Example: "Stop Propagation" (JSFiddle)][stop-prop-example]**

---

#### The Event Object

**[Example: "Using the Event Object" (JSFiddle)][event-object-example]**

---


<!-- LINKS -->

[cheatsheet]:  ../../../cheatsheets/dom_js_cheatsheet.md
[tutorial]:    http://tutorialzine.com/2014/06/10-tips-for-writing-javascript-without-jquery
[wiki-events]: https://en.wikipedia.org/wiki/DOM_events
[ch-dom]:      https://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf
[mdn-dm]:      https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
[node-api]:    https://developer.mozilla.org/en-US/docs/Web/API/Node
[element-api]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[mdn-add]:     https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
[mdn-rem]:     https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

[propagation-example]:  https://jsfiddle.net/h4w5/vty05yus
[event-object-example]: https://jsfiddle.net/h4w5/r8yLggqt
[stop-prop-example]:    https://jsfiddle.net/h4w5/3y6q4bt0

[seeming-wasteland]: exercises/seeming_wasteland
