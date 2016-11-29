# Become the Starchitect

![Frank Gehry](http://aasarchitecture.com/wp-content/uploads/Frank-Gehry-defends-Lucas-Museum-by-MAD-00.jpg)

### Intro to HTML

Lesson Objectives

- Structure a basic HTML page using a "doctype" and the `<html>`,`<head>`, and `<body>` elements.
- List and explain the role of HTML `<head>` elements, including `<title>`, `<link>`, `<script>`, and `<meta>`.
- List and give use cases for common HTML elements: `<img>`, `<h1>`...`<h6>`, `<p>`, `<span>`, `<a>`, `<ul>` & `<ol>`, `<li>`, `<!--…-->`, and `<div>`.
- List the most important structural HTML5 semantic elements: `<footer>`, `<header>`, `<nav>`, `<main>`, and `<section>`.
- Explain the purpose and benefits of using HTML5 semantic elements.
- Explain the purpose of HTML attributes as opposed to their content.
- Identify the parts of an HTML element (tagname/type, attributes and values, content, and closing tag).
- Assign attributes to HTML elements using the correct format.

##### Road Map

1. What is HTML?
2. The Doctype, `<head>` and `<body>`
3. Structural HTML Tags
4. Tags with Distinct Attributes
5. Outro

## What is HTML?

![Kazuyo Sejima and Ryue Nishizawa](https://s-media-cache-ak0.pinimg.com/736x/fc/1a/e3/fc1ae3eb137cbe737f0e88a0788a6419.jpg)

In short: HyperText Markup Language.

HTML is the essential building blocks of website. It is the steel beams of your soon to be impressive, awe-inspiring, skyscraping website. Because it is so essential to every website, people often have a difficult time explaining what exactly the language does. In order to avoid any confusion, lets breakdown that garbled, unabbreviated title.

*Hypertext* - The method by which you move around on the web — by clicking on special text called **hyperlinks** which bring you to the next page. The fact that it is *hyper* just means it is not linear — i.e. you can go to any place on the Internet whenever you want by clicking on links — there is no set order to do things in.

*Markup*  - This is what **HTML tags** do to the text inside them. They mark it as a certain type of text (*italicised* text, for example).

*Language* - This one is pretty straightforward. HTML has its own syntax and structure like any other language, programmatic or human.

For the most part, tags have an opening, and a closing tag with the content sandwiched in the middle.

## The Doctype, `<head>` and `<body>`

![Jeanne Gang](http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2011/09/Jeanne-Gang-MacArthur-Genius-Grant-537x357.jpg)

Let's talk about the major pillars of every HTML Page:

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Intro to HTML</title>
</head>
<body>
    <!-- Put all your site stuff in here!! -->
</body>
</html>
```

First, lets make sure everyone's emmet is working. Type the following into a blank `index.html` file:

`html5` + `tab`

You should see essentially what's typed above appear into your text editor.

#### Doctype

`<!DOCTYPE html>` belongs at the top of each of your html pages. This informs the browser that this file is written in HTML.

It's important to include this despite the fact that the browser will **PROBABLY** understand you anyway. The reason is shown in bold above.

Don't take chances with your code! Programming is all about being exact. You don't want your code to fail for some simple reason like you forget to put `<!DOCTYPE html>` at the top of the page.

After this, the remainder of the document should be enclosed within an `<html>` tag.

#### `<head>`

The `<head>` tag provides all general information (metadata) for the webpage. For instance, in the bit of code above, we're setting the character encoding to 'utf-8' (the dominant character encoding for the internet, made to be backwards compatible with ASCII), telling the browser if the page is supported by it, and setting our title.

Other common parts of the `<head>` are attaching stylesheets (`<link>`), libraries, and scripts (`<script>`).

#### `<body>`

The `<body>` tag contains all our content. It contains the majority of what we see on the page.

## Structural HTML Tags

![Sheila Sri Prakash](http://www.thehindu.com/multimedia/dynamic/01532/28KIMP_SHEILA_1532282g.jpg)

Once we're inside the `<body>` of our document, we can actually begin building out our content.

First, let's look at the structure of any given html tag.

![html tag structure](http://tutorial.techaltum.com/images/element.png)

We see that each tag is built from a tag, an attribute, and content. Let's look at each part in detail.

#### Nesting

HTML tags are nested inside eachother.

```
<div><p><h1><a href="/surprise">Click Me</a></h1></p></div>
```

Reading from left to right the `div` contains a `p` that contains an `h1` that contains an `a`.
This also means our tags need to be closed in the correct order too.
This is hard to read so we can write this on multiple lines and indent nested elements.

```
<div>
    <p>
        <h1><a href="/surprise">Click Me</a></h1>
    </p>
</div>
```

#### Content Tags

Lets take a tour of content tags:

##### `<h1>...<h6>`

Headers, going from biggest(`<h1>`) to smallest (`<h6>`).

##### `<p>`

Paragraph tag. Put your prose in the `<p>` tag!

##### `<span>`

The span tag is unique in that it's generally used to highlight a small section of writing (a generic inline conatiner). This is most commonly used in regards to CSS, which we'll cover later, but to see what I mean:

``` html
<p>Why isn't this <span>interesting?</span></p>
```

##### `<div>`

Div tags are a generic container for content. It's often used to group things together for styling purposes.

##### `<ul>`, `<ol>`, & `<li>`

Unordered and Ordered Lists. Unordered come with bullets, ordered come with numbers. The lists within them must be made of `<li>`, or list item, tags. For example:

``` html
<ul>
    <li>Stuff 1</li>
    <li>Stuff 2</li>
</ul>
```

##### `<!--…-->`

HTML comment tag. Anything between these double hyphens will be ignored by the browser.

### Semantic Tags

Certain tags tell you exactly what they are in their naming. 

Again, an important rule in programming is clarity! These assist in that. Examples are `<footer>`, `<header>`, `<code>`, `<em>`, `<nav>`, `<main>`, and `<section>`.

## Tags with Distinct Attributes

![Rem Koolhaas](http://www.knoll.com/media/593/861/Rem%20Koolhaas%20Portrait_Low.jpg)

Some tags are very specific in nature.  They contain attributes, or additional metadata, in order to work. Let's look at some and see how to use them in our HTML documents.

##### `<a>`

Anchor tag. They link us to other pages. Within them are the special attribute `href` (hypertext reference). You set the `href` to a url using an `=`, then surround a word in the `<a>`. For example:

``` html
<a href="http://www.google.com">Google</a>
```

##### `<img>`

The image tag is a *self-closing tag*. That means you do not need a closing tag! It uses `src`, or source, to find the required image. The url can be a relative path or full http path. `<img>` also uses `alt` which can be filled by text if the image is not found. For instance:

``` html
<img src="http://images.ftw.usatoday.com/wp-content/uploads/2013/05/freehugs.jpg" alt="Tim wants a hug">
<img src="/wp-content/uploads/2013/05/freehugs.jpg" alt="Tim wants a hug">
```

If the image is not found, the text "Tim wants a hug" will appear in the site instead.

##### `<form>` & `<input>`

We'll be using these a ton in the future when we have data we want to persist, but for now, just understand that they have their own attributes, such as `for`, `value`, and `type`.

Additionally, `<input>` is also a self-closing tag.

## Outro

![Alejandro Aravena](http://www.detail-online.com/fileadmin/uploads/01-Themen/biennale-direktor-alejandro-aravena-teaser1500.jpg)

We've now covered the basics of an HTML page. Below are some references beyond this markdown if you ever need any additional resources.

We're officially starchitect of the internet! Let's test our knowledge:

1. Explain the roles of the following in an html document: tag, attribute, and content.
2. What does the `alt` attribute do for us in an `<img>` tag?
3. What is a self-closing tag and name an example?

### References

[MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[MDN HTML Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
