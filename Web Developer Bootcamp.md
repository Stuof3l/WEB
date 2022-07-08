#   1.0 

CSS - purple - adjective

HTML - dino - nouns

JS - danced - verbs

1. `parseInt()` string--->int
2. 

# 2.0 HTML

## 2.1 HTML Element

### 2.1.1 

div, span, sub, sup, ul, ol, li, main, nav, section, article, aside, header, footer, time, figure

### 2.1.2 Table Element

```HTML
<table>
  <thead>
    <tr>
      <th>1</th>
      <th>1</th>
    </tr>
    
  </thead>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
```



### 2.1.3 Forms and Input

#### 2.1.3.1 `<input>` Types

How an `<input>` works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is `text`.

- Button 

- Checkbox

`<input>`elements of type **`checkbox`** are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not).

```HTML
<form action="/birds">
  <input type="checkbox" name="agree_tos" id="agree" checked>
  <label for="agree">I agree to everything</label>
</form>
```

- Color
- Date 
- password
- radio
- range

`<input type="range">`let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type.

```html
<p>
  <label for="cheese">Amount of Cheese</label>
  <input type="range" id="cheese" min="1" max="10" name="cheese">
</p>
<button>submit</button>
```

- search
- Submit 
- Text (Most common)

### 2.1.4 Button

The **`<button>`** HTML element represents a clickable button, used to submit forms anywhere in a document for accessible, standard button functionality.
### 2.1.5 Label

Label element represents a caption for an item in a user interface. 

`for` The value of the `for` attribute must be a single [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) for a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#form_labelable) form-related element in the same document as the `<label>` element. So, any given `label`element can be associated with only one form control. **Match label and input**

```HTML
<div class="preference">
  <!-- id matches label for -->
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
    <label for="peas">Do you like peas?</label>
    <input type="checkbox" name="peas" id="peas">
</div>
```
### 2.1.6 Select and Options

The **`<select>`** HTML element represents a control that provides a menu of options. 

```html
<p>
  <label for="meal"Please Select></label>
  <select name="meal" id="meal">
    <option value="" selected>--Please choose an option--</option>
    <option value="fish">Fish</option>
    <option value="veg">Vegetarian</option>
    <option value="steak" >Steak</option>
  </select>
</p>
<button>submit</button>
```

### 2.1.7 Textarea

The **`<textarea>`** HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

```html
<p>
  <label for="requests">Any Special Requests?</label>
  <textarea id="requests" rows="10" name="requests" cols="40" placeholder="Type something here"></textarea>
</p>
```



## 2.2 Input Attributes

### 2.2.1 Type

To 2.1.3.1

### 2.2.2 Name

Name of the element. For example used by the server to identify the fields in form submits. Consider the `name` a required attribute (even though it's not). If an input has no `name` specified, or `name` is empty, the input's value is not **submitted with the form! **

```HTML
<form action="http://www.google.com/search">
  <input type="text" name="q">
  <button>Search Google</button>
</form>
```

### **2.2.3 Id**

The **`id`** global attribute defines an identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking, scripting, or styling 

### 2.2.4 Placeholder

The `placeholder` attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that provides a hint as to the expected type of data, rather than an explanation or prompt. 

```html
<form action="/search">
  <input type="text" placeholder="username">
  <input type="color">
</form>
```

### 2.2.5 (Radio and) Value

`<input>` elements of type **`radio`** are generally used in **radio groups**—collections of radio buttons describing a set of related options.

Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.

`value`  defines a default value which will be displayed in the element on page load.

```HTML
<form action="/birds">
        <input type="checkbox" name="agree_tos" id="agree" checked>
        <label for="agree">I agree to everything</label>
        <p>

            <input type="radio" name="size" id="xs" value="xs">
            <label for="xs">xs</label>
            <input type="radio" name="size" id="s" value="s">
            <label for="s">s</label>
            <input type="radio" name="size" id="m" value="m">
            <label for="m">m</label>
            <button>submit</button>
        </p>
    </form>
```

### 2.2.6 Min and Max



## 3.0 CSS

### 3.1.1 Intro

- CSS is a language for describing how documents are presented visually - how they are arranged and stylled. 
- CSS stands for Cascading Style Sheets

- CSS Rules

```Css
selector {
	property: value;
}

img {
  width: 100px;
  height: 200px;
}
```

### 3.1.2 The Cascade

The order your styles are declared in and linked to matters.  

### 3.1.3 Specificity

Specificity is how the browser decides which rules to apply when multiple rules could apply to the same element. It is a measure of how specific a given selector if. The more specific selector wins. 

INLINE STYLE > ID > CLASS > ELEMENT

https://specificity.keegan.st

### 3.1.4 The !important exception

```css
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

### 3.1.5 Inheritance



## 3.2 Including Styles

1. incline styles

   - Write your styles directly inline on each element, but this is not a good idea most of the time. It is complicated. 

   ```html
   <h1 style="color: aqua;">Hello World</h1>
   <button style="background-color: palegoldenrod;">I AM BUTTON</button>
   ```

2. The <style> element

   - Write sytles inside of a <style> element. This is easy, but it makes it impossible to share styles between documents. Not recommended either. 

   ```html
   <style>
     h2 {
       color: palevioletred;
     }
   </style>
   ```

3. external stylesheet

   - Write your style in a .css file, and then include the using a <link> in the head of your html document. Recommended!

   ```html
   <link rel="stylesheet" href="app.css">
   ```

   ```css
   /* app.css */
   h2 {
       color: indigo;
   }
   ```



## 3.3 Properties

### 3.3.1 `text-align`

The **`text-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) but in the horizontal direction.

```Css
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
```

### 3.3.2 `font-weight`

The **`font-weight`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) that is currently set.

```css
/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;// normal
font-weight: 500;
font-weight: 600;
font-weight: 700;// bold
font-weight: 800;
font-weight: 900;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: unset;
```

### 3.3.3 `text-decoration`

The **`text-decoration`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the appearance of decorative lines on text. It is a shorthand for [`text-decoration-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line), [`text-decoration-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color), [`text-decoration-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style), and the newer [`text-decoration-thickness`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness) property.

```css
h1{
  text-decoration: blue underline wavy;
}

a {
  text-decoration: none;
}
```

### 3.3.4 `letter-spacing`

The **`letter-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.

```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### 3.3.5 `line-height`

The **`line-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-[replaced](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) inline elements, it specifies the height that is used to calculate line box height.

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: unset;
```

### 3.3.6 `font-family`

The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element. You should always include at least one generic family name in a `font-family` list, since there's no guarantee that any given font is available. 

A complete collection of web safe CSS font stacks: https://www.cssfontstack.com

```css
font-family: Arial, Futura;
/* A generic family name only, pick one for users */
font-family: serif;
font-family: sans-serif;
```

### 3.3.7 Box Model

1. Width, height, border, border-radius

```css
#three {
    background-color: #f07167;
    border: 4px solid #0081a7;
    border-left-style: dotted;
    box-sizing: border-box;
    border-radius: 20px;
    /* border-radius: 50%; */
}
```

2. Padding and Margin

   The `padding` property may be specified using one, two, three, or four values. Each value is a <length> or a <percentage>. Negative values are invalid.

   **Padding is Inside of the border, margin is spacing outside**

   - When **one** value is specified, it applies the same padding to **all four sides**.
   - When **two** values are specified, the first padding applies to the **top and bottom**, the second to the **left and right**.
   - When **three** values are specified, the first padding applies to the **top**, the second to the **right and left**, the third to the **bottom**.
   - When **four** values are specified, the paddings apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

	```css
    /* Apply to all four sides */
    padding: 1em;
	
    /* vertical | horizontal */
    padding: 5% 10%;
	
    /* top | horizontal | bottom */
    padding: 1em 2em 2em;
	
    /* top | right | bottom | left */
    padding: 5px 1em 0 2em;
	
    /* Global values */
    padding: inherit;
    padding: initial;
    padding: revert;
    padding: unset;
	```

### 3.3.8 Display

Inline: Width and height are ignored. Margin and padding push elements away horizontally  but not vertically. 

Block: Block elements break the flow of a document. Width, height, margin and padding are respected. 

Incline-block: Behaved like an inline element except width, height, margin and padding are respected. 

### 3.3.9 Unit

Relative: em, rem, vh, vw, %

Absolute: px, pt, cm, in, mm

### 3.3.10 Opacity and Alpha

```css
#rgba {
    width: 50%;
    height: 50%;
    /* Only background color */
    background-color: rgba(205, 180, 219, 0.7);
}

#opacity {
    width: 50%;
    height: 50%;
    background-color: #BDE0FE;
    /* Entire element */
    opacity: 0.5;
}
```

### 3.3.11 Position

sets how an element is positioned in a document. The [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top), [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right), [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom), and [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left) properties determine the final location of positioned. 

1. `static`

   The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.

2. `relative`

   The element is positioned according to the normal flow of the document, and then offset *relative to itself* based on the values of `top`, `right`, `bottom`, and `left`. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were `static`.

3. `absolute`

   The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block). Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.

4. `fixed`

   The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) established by the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport), except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than `none` (see the [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), in which case that ancestor behaves as the containing block. (Note that there are browser inconsistencies with `perspective` and `filter`contributing to containing block formation.) Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.

5. `sticky`

   The element is positioned according to the normal flow of the document, and then offset relative to its *nearest scrolling ancestor* and [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) (nearest block-level ancestor), including table-related elements, based on the values of `top`, `right`, `bottom`, and `left`. The offset does not affect the position of any other elements.

### 3.3.12 Transform

The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. 

### 3.3.13 Transition

Transitions enable you to define the transition between two states of an element. his property is a shorthand for the following CSS properties:

- `transition-delay`
- `transition-duration`
- `transition-property`
- `transition-timing-function`

Properties:

1. `rotate()`
2. `scale()`
3. `translate()`
4. `skew()`

### 3.3.14 Background

sets all background style properties at once, such as color, image, origin and size, or repeat method.

This property is a shorthand for the following CSS properties:

- [`background-attachment`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
- [`background-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)
- [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
- [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
- [`background-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin)
- [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
- [`background-repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
- [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

<bg-size> may only be included immediately after <position>, separated with the `/` character, like `center/80%`

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url("../img/image.png");

/* Global values */
background: inherit;
background: initial;
background: revert;
background: unset;
```



## 3.4 CSS Selectors

1. Universal selector

   select everything.

   ```css
   * {
     color: black;
   }
   ```

2. ID selector

   ```css
   #logout {
     color: orange;
     height: 200px;
   }
   ```

3. Class selector

   Select elements with class of 'complete'

   id: single element; class: multiple elements

   ```css
   .complete {
     color: green;
   }
   ```

4. Descendant selector

   Select all <a>'s that are nested inside an <li>

   ```css
   li a {
     color: teal;
   }
   ```

5. Adjacent Selector

   Select only the paragraphs that are immediately preceded by an <h1>

   ```css
   h1 + p {
     color: red;
   }
   ```

6. Direct Child

   Select only the <li>'s that are direct children of a <div> element

   ```css
   div > li {
     color: white;
   }
   ```

7. Attribute Selector

   Select all input elements where the type attribute is set to "text"

   ```css
   input[type="text"] {
     width: 300px;
     color: yellow;
   }
   
   /* href containing "google" */
   a[href*="google"] {
     font-size= 2em;
   }
   ```

```css
selector {
  property: value;
}

input[type="text"]:nth-of-type(2n) {
  border:2px solid red;
}

h1, h2 {
    color: blueviolet;
}
```

## 3.5 Pseudo Classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected elements.

### 3.5.1 `:hover`

matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor (mouse pointer).

### 3.5.2 `:active`

represents an element (such as a button) that is being activated by the user. When using a mouse, "activation" typically starts when the user presses down the primary mouse button.

### 3.5.3 `:checked`

selector represents any **radio** ('<input type="radio">') **checkbox** ('<input type="checkbox">'), or **option** ('<option>' in a '<select>') element that is checked or toggled to an `on` state.

```css
/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

### 3.5.4 `:nth-of-type()`

matches elements based on their position among siblings of the same type (tag name).

```css
/* Selects every fourth <p> element
   among any group of siblings */
p:nth-of-type(4n) {
  color: lime;
}

/* Odd paragraphs */
p:nth-of-type(2n+1) {
  color: red;
}

/* Even paragraphs */
p:nth-of-type(2n) {
  color: blue;
}

/* First paragraph */
p:nth-of-type(1) {
  font-weight: bold;
}
```



## 3.6 Pseudo Elements

A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, [`::first-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) can be used to change the font of the first line of a paragraph.

`::after`

`::before`

`::first-letter`

`::first-line`

`::selection`



## 3.7 Google Fonts

https://fonts.google.com



## 3.8 Flexbox

### 3.8.1 Intro

Flex box is a one-dimensional layout method for arranging items in rows or columns. Items *flex*(expand) to fill additional space or shrink to fit into smaller spaces. 

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## 3.9 Bootstrap

### 3.9.1 Layout

1. Containers 

   Containers are the most basic layout element in Bootstrap and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

   - `container`: is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.
   - `container-fluid`:  for a full width container, spanning the entire width of the viewport.
   - responsive container: allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. `<div class="container-sm">`

2. Grid

   Grid uses a series of containers, rows, and columns to layout and align content.
   
   Use flexbox alignment utilities to vertically and horizontally align columns: `align-items-end`, `align-self-start`, `justify-content-start`, `justify-content-between`

### 3.9.2 Components

1. Buttons

   https://getbootstrap.com/docs/5.1/components/buttons/

2. Forms

3. Navbar

### 3.9.3 Content

1. Typography: Bootstrap sets basic global display, typography, and link styles. 



# 4 JavaScript

## 4.1 Intro

1. Null

   - "Intentional absence of any value"

   - Must be assigned
   - Lack of assigned
   - `let loggedInUser = null;`

2. Undefined

   - Variables that do not have an assigned value are undefined. 
   - Not defined

3. Math object

   ```javascript
   Math.floor(23.90);  // round down
   Math.ceil(34.1);  // round up
   Math.random();  // [0, 1)
   
   // RANDOM INTEGERS	
   const step1 = Math.random();
   const step2 = step1 * 10;
   const step3 = Math.floor(step2);
   const step4 = step3 + 1;
   
   // 1 to 10
   Math.floor(Math.random() * 10) + 1;
   // 50 to 54
   Math.floor(Math.random() * 5) + 50;
   ```

   

```javascript
let someName = Value;
var someNmae = Value;
let isLoggedIn = true;
isLoggedIn = 23;  // variable change type
let firstName = "Danny" 
let secondName = 'HH'
firstName[0]
firstName.length
"lol".length
"lol"+"lol"
firstName + lastName

let year = "1999";
year + 1 // 19991


```

## 4.2 Method

`thing.method()` `thing.method(arg)`

## 4.3 String

Strings are indexed. 

**In JavaScript, strings are immutable **

1. String.prototype.trim()

   The **`trim()`** method removes whitespace from both ends of a string and returns a new string, without modifying the original string. 

   ```javascript
   	let greeting = "   Yes, it's me.   "
     greeting.trim()  // "Yes, it's me."
   ```

2. String.prototype.indexOf()

   ```javascript
    	let tvShow = 'catdog';
     tvShow.indexOf('cat');  // 0
     tvShow.indexOv('z');  // -1
   ```

3. String.prototype.slice()

   The **`slice()`** method extracts a section of a string and returns it as a new string, without modifying the original string. The zero-based index *before* which to end extraction. The character at this index will not be included.

   If `endIndex` is negative, `slice()` treats it as `str.length + endIndex`. (E.g, if `endIndex` is `-2`, it is treated as `str.length - 2` and `"test".slice(1, -2)` returns `"e"`) .

   ```javascript
   tvShow.slice(0, 3);  // cat
   tvShow.slice(0);  // catdog
   tvShow.slice(0, -1);  // catdo
   tvShow.slice(0, -2);  // catd
   tvShow.slice(-1);  // g
   tvShow.slice(-2);  // og
   ```

4. String.prototype.replace()

   The **`replace()`** method returns a new string with some or all matches of a `pattern` replaced by a `replacement`. If `pattern` is a string, only the first occurrence will be replaced.

   ```javascript
   let annoyingLaugh = "teehee so funny! teehee!";
   annoyingLaugh.replace("teehee", "haha")
   ```

5. String.prototype.repeat()

   The **`repeat()`** method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

   ```javascript
   "lol".repeat(2)
   ```

6. String template literals

   ```javascript
   `I counted ${3 + 4} sheep`
   let year = 1999;
   `You bought ${year} year.`
   `You bought ${qty} ${product}. Total is: $${price * qty}`
   ```

   

## 4.4 Decision Making

1. `==` checks for equality of value, but not equality of type. It coerces both values to the same type and then compares them. 

2. `===` checks for equality of value and type. 

3. `console.log()` prints arguments to the console. `console.warn()` `console.error()`

4. `alert("HI ThERE!")`

5. `prompt("please enter a number")`

6. Running code rom a file: 

   ```html
   <head>
     <title>JS Demo</title>
     <script src="app.js"></script>
   </head>
   ```

7. ELSE IF

   ```javascript
   if () {
     ...
   } else if() {
     ...
   }
   ```


## 4.5 Array

```javascript
let students = [];
let colors = ['red', 'orange', 'yellow'];
let lottoNums = [19, 22, 56]
let stuff = [true, 68, 'cat', null];
```

### 4.5.1 Methods

1. `Array.isArray()`

2. ``Array.length` without parentheses

3. `Arrary.push()` 

   Add to end

4. `Array.pop()` 

   Remove from end

5. `Array.shift` 

   Remove from start and return that element

6. `Array.unshift()` 

   Add to start, return the length of array

7. `Array.prototype.concat()` 

   Merge arrays `const array3 = array1.concat(array2);``

8. ``Array.prototype.inlcudes()`  

   Look for a value

9. `Array.prototype.indexOf()`

    Just like string.indexOf

10. `Array.prototype.join()` 

    Creates a string from an array

11. `Array.prototype.reverse()` 

     Reverses an array

12. `Array.prototype.slice()` 

     Copies a portion on an array `array1.slice(2, 4)` Not include the last element

13. `Array.prototype.splice(start, deleteCount, item1, item2, itemN)` 

     Removes/replaces elements

14. `Array.prototype.sort()` 

     Sorts an array

15. `Array.prototype.forEach()`

     Accepts a callback function. Calls the function once per element in the array. 

     ```javascript
     array = [1, 2, 3, 4, 5]
     
     array.forEach(function (el) {
       console.log(el)
     })
     
     const array1 = ['a', 'b', 'c'];
     array1.forEach(element => console.log(element));
     ```

16. `Array.prototype.map()`

     Creates a new array with the results of calling a callback on every element in the array

     ```javascript
     const texts = ['rofl', 'lol', 'omg']
     const caps = texts.map(function (t){
       return t.toUpperCase();
     })
     
     caps // ROFL, LOL, OMG
     
     const array1 = [1, 4, 9, 16];
     // pass a function to map
     const map1 = array1.map(x => x * 2);
     console.log(map1);
     // expected output: Array [2, 8, 18, 32]
     
     ```

17. `Array.prototype.filter()`

     The **`filter()`** method **creates a new array** with all elements that pass the test implemented by the provided function. 

     ```javascript
     const result = words.filter(word => word.length > 6);
     console.log(result);
     ```

18. `Array.prototype.find()`

     Returns the value of the first element in the array that satisfies the provided testing function.

     ```javascript
     const array1 = [5, 12, 8, 130, 44];
     const found = array1.find(element => element > 10);
     console.log(found);
     // expected output: 12
     ```

     - If you need the **index** of the found element in the array, use [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
     - If you need to find the **index of a value**, use [`Array.prototype.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf). (It's similar to [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), but checks each element for equality with the value instead of using a testing function.)
     - If you need to find if a value **exists** in an array, use [`Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). Again, it checks each element for equality with the value instead of using a testing function.
     - If you need to find if any element satisfies the provided testing function, use [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

     19. `Array.prototype.every()`

         Tests whether all elements in the array pass the provided function. It returns a Boolean value.

     20. `Array.prototype.some()`

         Similar to every, but returns true if ANY of the array elements pass the test function

         ```javascript
         const array = [1, 2, 3, 4, 5];
         
         // checks whether an element is even
         const even = (element) => element % 2 === 0;
         
         console.log(array.some(even));
         // expected output: true
         ```

     21. `Array.prototype.reduce()`

         The **`reduce()`** method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

         ```javascript
         const array1 = [1, 2, 3, 4];
         
         // 0 + 1 + 2 + 3 + 4
         const initialValue = 0;
         const sumWithInitial = array1.reduce(
           (previousValue, currentValue) => previousValue + currentValue, initialValue
         );
         const sumWithInitial = array1.reduce(
           (previousValue, currentValue) => {return previousValue + currentValue}
         );
         
         console.log(sumWithInitial);
         // expected output: 10
         ```

         Finding max value

         ```javascript
         const grades = [1,2 4, 8, 22, 7, 52, 88]
         const topScore = grades.reduce((max, currVal) => {
           if (currVal > max) return currVal;
           return max;
         });
         
         const topScore = grades.reduce((max, currVal) => Math.max(max, currVal))
         ```

         

         

         

     

### 4.5.2 Const Array

```javascript
const nums = [1, 2, 3, 4]
nums.push(5);  // valid
nums[0] = "green";

nums = [2, 3, 4]  // INVALID, can't reassign
```

### 4.5.3 Nested Array

```javascript
const gameBoard = [[1, 2, 3], [1, 2, 3]];
```



## 4.6 Object

The **`Object`** class represents one of JavaScript's data typesIt is used to store various keyed collections and more complex entities.

- Objects are collections of properties. 
- Properties are a key-value pair
- All keys are converted to strings (except for symbols)
- Array+objects

```javascript
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  workouts: '5 of 7'
}

fitBitData.totalSteps;
fitBitData["totalSteps"] = 33;

const shoppingCart = [{...}, {...}, {...}]
```



## 4.7 Loop

### 4.7.1 for

### 4.7.2 while

### 4.7.3 for...in

```javascript
let iterable = [...];
for (let variable of iterable) {
	statement }
```

### 4.7.4 Iterable objects

```javascript
const test = {
  keenan: 80;
  damon: 67;
}


for (let person in test) {
  // key
  console.log(person);
  // key and value
  console.log(`${person} scored ${test[person]}`);
}

// return array of keys
Object.keys(test);
// return key-value
Object.entries(test);
// return array of values
Object.values(test);
```

## 4.8 Function

### 4.8.1 Function definition 

1. Function declarations

```javascript
function funName() {
  // do something
}

// run function
funName();

// arguments, does not need type of arguments
function findLargest(x, y) {
  ...
  return x+y;
}
```

2. Function expressions

   Such a function can be **anonymous**; it does not have to have a name. 

   ```javascript
   const square = function(number) { 
     return number * number 
   }
   ```

   However, a name *can* be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces.

   ```javascript
   const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
   console.log(factorial(3))
   ```

   Function expressions are convenient when passing a function as an argument to another function. 

   In JavaScript, a function can be defined based on a condition. For example, the following function definition defines `myFunc` only if `num` equals `0`:

   ```javascript
   var myFunc;
   if (num === 0) {
     myFunc = function(theObject) {
       theObject.make = 'Toyota';
     }
   }
   ```

3. Arrow functions

   An arrow funciton has a shorter syntax compared to function expressions and does not have its own [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), or [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target). Arrow functions are always anonymous.

   Arrow function only works when there is one expression. 

   ```javascript
   const add = (x, y) => {
     return x+y;
   }
   add(9, 4)
   
   // single optional parameter
   const square = x => {
     return x*x;
   }
   ```

   implicit return

   ```javascript
   const isEven = function (num) {
     return num%2 === 0;
   }
   const isEven = (num) => {
     return num%2 === 0;
   }
   const isEven = num => {
     return num%2 === 0;
   }
   const isEven = num => (
     num%2 === 0;
   );
   
   const isEven = num => num%2 === 0;
   ```

   Does not have its own bindings to [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) or [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and should not be used as [`methods`](https://developer.mozilla.org/en-US/docs/Glossary/Method).

### 4.8.2 Common Functions

1. toUpperCase() `string.toUpperCase()`

### 4.8.3 Functions are Objects 

- *Accept other functions as arguments*
	```javascript
	function callTwice(func) {
    func();
    func();
  }
  function laugh() {
    console.log("HAHAHAHAHAHAHAHHAHAHAHAH");
  }
  callTwice(laugh);
  ```
- *Return a function*
  
  ```javascript
  function makeBetweenFunc(min, max) {
    return function (val) {
      return val>= min && val<= max;
    }
  }
  const inAgeRange = makeBetweenFunc(l8, l00);
  inAgeRange(17);
  inAgeRange(68);
  ```



### 4.8.4 Methods

REMEMBER **const**

```javascript
const math = {
  // multiply is the function name
	multiply : function(x, y) {
		return x * y;
	},
	divide : function(x, y) {
  	return x / y;
  },
  square : function(x) {
    return x * x;
  }
};

const math = {
  blah: "Hi!",
  count: 0,
  add(x, y) {
    return x+y;
  },
  multiply(x, y) {
    return x*y;
  }
}

math.add(50, 60); // 110
math["blah"] // "Hi!"
math["add"](3, 4)  // 7
```

**this**

```javascript
const person = {
  first: "robert",
  last: "Herjavec",
  fullName() {
    return `${this.first} ${this.last}`
  }
}

person.fullName(); // "Robert Jerjavec"
person.last = "Plant";
person.fullName(); // "Robert Plant"
```





## 4.9 Try/Catch

```javascript
try {
  hello.toUpperCase();
}catch {
  console.log("Error");
}
```



## 4.10 New javascript feature 

### 4.10.1 Default params

```javascript
function multiply(x, y=1) {
  return x*y;
}
```

### 4.10.2 Spread

expand an iterable(array, string, etc. ) into a list of argument. 

```javascript
const nums = [12, 3, 4, 5]
Math.max(...nums)

const cats = ["yes", 'red', 'blue']
const dogs = ['rusty', 'wyatt']
const allPets = [...csts, ...dogs]
```

### 4.10.3 Rest

Collects all remaining arguments into an actual array. 

```javascript
function sum(...nums) {
  // console.log(nums);
  return nums.reduce((total, el) => total + el)
}
```

### 4.10.4 Array destructuring

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

1. Array destructuring

   ```javascript
   // Basic variable assignment
   const [first] = [10, 29, 30]
   first // 10
   
   // Default values
   let a, b;
   [a=5, b=7] = [1];
   console.log(a); // 1
   console.log(b); // 7
   
   // Assigning the rest of an array to a variable
   [a, b, ...rest] = [10, 20, 30, 40, 50];
   console.log(rest);
   // expected output: Array [30,40,50]
   
   // Swapping variables
   const arr = [1,2,3];
   [arr[2], arr[1]] = [arr[1], arr[2]];
   console.log(arr); // [1,3,2]
   
   // Ignoring some returned values
   function f() {
     return [1, 2, 3];
   }
   const [a, , b] = f();
   console.log(a); // 1
   console.log(b); // 3
   ```

2. Object destructuring

   ```javascript
   // Basic assignment
   const user = {
       id: 42,
       isVerified: true
   };
   const {id, isVerified} = user;
   console.log(id); // 42
   console.log(isVerified); // true
   
   // Assignment separate from declaration
   let a, b;
   ({a, b} = {a: 1, b: 2});
   ```

   

# 5.0 DOM

The **Document Object Model** (**DOM**) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

## 5.1 Document

The **`Document`** interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the [DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core).

### 5.1.1 Constructor

- Document()

Creates a new `Document` object.

### 5.1.2 Properties

## 5.2 Selecting

### 5.2.1 Methods

1. `Document.getElementById()`

   ```javascript
   var element = document.getElementById(id);
   ```

2. `getElementsByTagName()`

   The **`getElementsByTagName`** method of [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface returns an[`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of elements with the given tag name.

   ```javascript
   var elements = document.getElementsByTagName(name);
   ```

3. `getElementsByClassName()`

   The **`getElementsByClassName`** method of [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) interface returns an array-like object of all child elements which have all of the given class name(s).

   ```javascript
   var elements = document.getElementsByClassName(names); // or:
   var elements = rootElement.getElementsByClassName(names);
   ```

4. `Document.querySelector()`

   The [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) method **`querySelector()`** returns the first [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.

   ```javascript
   // Syntax
   element = document.querySelector(selectors);
   let element = document.querySelector('#banner') // id="banner"
   
   let checkbox = document.querySelector('input[type="checkbox"]');
   ```

5. `Document.querySelectorAll()`

   The [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) method **`querySelectorAll()`** returns a static (not live) [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)representing a list of the document's elements that match the specified group of selectors.

   ```javascript
   elementList = parentNode.querySelectorAll(selectors);
   let doneTodos = document.querySelectorAll(".done"); // class="done"
   ```




## 5.3 Manipulate

`classList`

`getAttribute()`

`setAttribute()`

`appendChild()`

`append()`

`prepend()`

`removeChild()`

`remove()`

`before()`

`after()`

`createElement`

`innerText` `document.querySelector('p').innerText`

`textContent` 

`innerHTML`

`value` 

`parentElement` 

`children`

`nextSibling`

`previousSibling` 

`style`

```javascript
const h1 = document.querySelector('h1')
window.getComputedStyle(h1).color
```

## 5.4 Events

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.



```javascript
// 1
const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}
// 2
function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}
btn.onmouseenter = scream;
// 3
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

// summary
function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}
const tasButton = document.querySelector('#tas');
// summary - 1
tasButton.onclick = twist;
tasButton.onclick = shout;
// summary - 2
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
```

### 5.4.2 this

```js
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
```

### 5.4.3 Event Object

```js
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})
```

### 5.4.4 Form Event

The **`submit`** event fires when a <form> is submitted.

```html
<form id="form">
  <label>Test field: <input type="text"></label>
  <br><br>
  <button type="submit">Submit form</button>
</form>
<p id="log"></p>
```

```js
function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
```

**从input中提取内容-JS**

```html
<form action="/dogs" id="tweetForm">
  <input type="text" name="username" placeholder="username">
  <input type="text" name="tweet" placeholder="tweet">
  <button>
    Post Tweet
  </button>
</form>
```

```js
const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit", function(e){
  // 1
  const usernameInput = document.querySelectorAll('input')[0];
  const tweetInput = document.querySelectorAll('input')[1];
  // 2
  console.log(tweetForm.elements.username.value)
  console.log(tweetForm.elements.tweet.value)
})
```

### 5.4.5 Chang Event

```js
const input = document.querySelector('input')
input.addEventListener('change', ...)
```



# 6.0 Async

## 6.1 Call Back

A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. 

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. 

Too many call callbacks inside callbacks sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

```js
searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        //if it works, run this:
    }, () => {
        //if it doesn't work, run this:
    })
}, () => {
    //if API is down, or request failed
})
```

## 6.2 Promise

### 6.2.1 Intro

The **`Promise`** object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```js
// 依次执行多个异步操作
// 如果其中任何一个then()块失败，则在末尾运行catch()块
// 像promise这样的异步操作被放入事件队列中，事件队列在主线程完成处理后运行，这样它们就不会阻止后续JavaScript代码的运行。排队操作将尽快完成，然后将结果返回到JavaScript环境。
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
```

### 6.2.2 Promise.prototype.then()

The **`then()`** method returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). It takes up to two arguments: callback functions for the success and failure cases of the `Promise`.

### 6.2.3 Chained Promises

```js
const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA,handleRejectedA)
  .then(handleFulfilledB,handleRejectedB)
  .then(handleFulfilledC,handleRejectedC);

// 或者，这样可能会更好...

const myPromise =
  (new Promise(myExecutorFunc))
  .then((handleFulfilledA)=>{
    ... 
    return...
  })
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

```js
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })
```

## 6.3 ASYNC FUNCTIONS

A newer and cleaner syntax for working with async code! Syntax *"makeup"* for promises

An async function is a function declared with the `async` keyword, and the `await`keyword is permitted within it. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

### 6.3.1 Syntax

- Async functions always return a promise.
- If the function returns a value, the promise will be resolved with that value
- If the function throws an exception, the promise will be rejected

```js
async function name([param[, param[, ...param]]]) {
   statements
}
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
// let a = async () =>{...}
```



# 7. AJAX

AJAX: ASYNCHRONOUS JAVASCRIPT AND XML

AJAJ: ASYNCHRONOUS JAVASCRIPT AND  JSON

JSON: Java Script Object Notation

## 7.1 JSON

### 7.1.1 `JSON.parse()`

The **`JSON.parse()`** method parses a JSON string, constructing the JavaScript value or object described by the string. An optional **reviver** function can be provided to perform a transformation on the resulting object before it is returned.

```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

### 7.1.2 `JSON.stringify()`

The **`JSON.stringify()`** method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
```

### 7.1.3 `Response.json()`

The **`json()`** method of the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) interface takes a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).

Note that despite the method being named `json()`, the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

```js
response.json().then(data => {
  // do something with your data
});
```

## 7.2 FETCH API

The Fetch API provides an interface for fetching resources (including across the network). 

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request — as soon as the server responds with headers — **even if the server response is an HTTP error status**.

```js
fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

// using async function
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};
```

## 7.3 AXIOS

### 7.3.1 Introduction

Axios is a *[promise-based](https://javascript.info/promise-basics)* HTTP Client for [`node.js`](https://nodejs.org/) and the browser.



```js
// 1
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
  // data in res, not need to res.json();
    console.log("RESPONSE: ", res);
  })
  .catch((e) => {
    console.log("ERROR! ", e);
  });

// 2
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR", e);
  }
};
```

# 8. OOP

## 8.1 Object prototypes

Every object in JavaScript has a built-in property, which is called its **prototype**. The prototype is itself an object, so the prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype that has `null` for its own prototype.

## 8.2 Factory Function

When a function creates and returns a new object, it is called a factory function. In JavaScript, any function can return an object. When it does so without the `new` keyword, it’s a factory function.

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());
```

## 8.3 Constructor Function

The **`new` operator** lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

### 8.3.1 Syntax

```js
new constructor[([arguments])]
```

### 8.3.2 Description

The **`new`** keyword does the following things:

1. Creates a blank, plain JavaScript object.
2. Adds a property to the new object (`__proto__`) that links to the constructor function's prototype object
3. Binds the newly created object instance as the `this` context (i.e. all references to `this` in the constructor function now refer to the object created in the first step).
4. Returns `this` if the function doesn't return an object.

```js
// captial letter indicate it is not a regular function, instead it is a function that creates a object
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected output: "Eagle"
```

## 8.4 Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

### 8.4.1 Defining Class

1. class declaration

   One way to define a class is using a **class declaration**. To declare a class, you use the `class` keyword with the name of the class.

   The `constructor` method is a special method of a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) for creating and initializing an object instance of that class. It executed immediately after the class was built. 

   ```js
   class Rectangle {
     constructor(height, width) {
       this.height = height;
       this.width = width;
     }
     greet(){
       return "Hello!";
     }
   }
   ```

2. class expression

   A **class expression** is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the [`name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property.

   ```js
   // unnamed
   let Rectangle = class {
     constructor(height, width) {
       this.height = height;
       this.width = width;
     }
   };
   console.log(Rectangle.name);
   // output: "Rectangle"
   
   // named
   let Rectangle = class Rectangle2 {
     constructor(height, width) {
       this.height = height;
       this.width = width;
     }
   };
   console.log(Rectangle.name);
   // output: "Rectangle2"
   ```

### 8.4.3 Create a Class

```js
const r = new Rectangle(10, 20);

r.greet() // output "Hello!"
```





An important difference between **function declarations** and **class declarations** is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.

# 9. Terminal 

## 9.1 Intro

Terminal is a text-based interface to your computer. Originally a physical object, but now we use software terminals. 

Shell is the program running on the terminal. 

The **Z shell (Zsh)** is a Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting. Zsh is an extended Bourne shell with many improvements, including some features of Bash, ksh, and tcsh.

Bash is one of the most popular shells. 

## 9.2 Command

`ls`: list

`pwd`: print working directory

`cd`: change directory, use `cd ..` to "back up" one directory, `cd~` change to home directory

`touch`: create a file, `touch yes.txt`

`mkdir`: create a new directory

`rm`: delete a file or files, no trush can

`rm -rf`: delete a directory



# 10. Node.js

Node is a JavaScript run time that executes code outside of the browser.

```js
const PI = 3.14;
exports.PI = PI;
```



### WebAssembly.Module.exports()

The **`WebAssembly.Module.exports()`** function returns an array containing descriptions of all the declared exports of the given `Module`.

```js
WebAssembly.Module.exports(module)

module.exports = {
  name: 'janet',
  color: 'orange'
}
```

Require the module using the `require` keyword and assign the result to a variable.

```js
const user = require('./user');
```



### Process.argv

The `process.argv` property returns an array containing the command-line arguments passed when the Node.js process was launched. 

- The first element will be [`process.execPath`](https://nodejs.org/docs/latest/api/process.html#processexecpath).
- The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments.

```command line
$ node process-args.js one two=three four

// output
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
```

## 10.2 NPM

### 10.2.1 Intro

NPM is the package manager used by Node.js applications – you can find a ton of modules here, so you don’t have to reinvent the wheel. 

```cmd
npm init  // create package.json
// npm init -y // skip all the questions
npm i franc  // install module
touch index.js  // create a javascript file

// install all dependencies for a project
npm install
```



### 10.2.2 Install Package

```js
$ npm install --save give-me-a-joke

// install globally
npm install -g cowsay
```

### 10.2.3 Use Package 

```js
var giveMeAJoke = require('give-me-a-joke');

// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    //=> console.log(joke);
});
```

### 10.2.4 Method override

Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

```cmd
$ npm install method-override
```



# 11. Express

Express is a "fast, unopinionated, minimalist web frameworkforNode.js:" Ithelpsusbuildwebapps!

It's just an NPM package which comes with a bunch of methods and optional plugins that we can use to build web applications and API's

- Start up a server to listen for requests 
- Parse incoming requests
- Match those requests to particular routes 
- Craft our http response and associated content

## 11.1 Application

The `app` object conventionally denotes the Express application. Create it by calling the top-level `express()` function exported by the Express module:

```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
```

### 11.1.1 Methods

1. `app.use()`

   **The function is executed every time the app receives a request.**

   ```js
   const express = require('express')
   const app = express()
   
   app.use((req, res, next) => {
     console.log('Time:', Date.now())
     next()
   })
   ```

2. `app.get(path, callback [, callback ...])`

   Routes HTTP GET requests to the specified path with the specified callback functions.

   ```js
   app.get('/dogs', function (req, res) {
     res.send('GET request to homepage')
   })
   
   app.get('*', (req, res) =>{
     res.send("I don't know that path!")
   })
   ```

3. `app.post(path, callback [, callback ...])`

   Routes HTTP POST requests to the specified path with the specified callback functions. 

   Path: the path for which the middleware function is invoked;
   
   ```js
   app.post('/', function (req, res) {
     res.send('POST request to homepage')
   })
   ```
   
   

## 11.2 Request

The `req` object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as `req` (and the HTTP response is `res`) but its actual name is determined by the parameters to the callback function in which you’re working.

```js
app.get('/user/:id', function (req, res) {
  res.send('user ' + req.params.id)
})
```

**`req.query`** is a request object that is populated by request query strings that are found in a URL. These query strings are in key-value form. They start after the question mark in any URL. And if there are more than one, they are separated with the ampersand.

```js
https://educative.io/user?name=Theodore&isAuthor=true

req.query = {name: "Theodore", isAuthor: true}
```



## 11.3 Response

The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.

### 11.3.1 Methods

1. `res.send([body])`

   Sends the HTTP response. The `body` parameter can be a `Buffer` object, a `String`, an object, `Boolean`, or an `Array`. 

2. `res.redirect([status,] path)`

   Redirects to the URL derived from the specified `path`, with specified `status`, a positive integer that corresponds to an [HTTP status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) . If not specified, `status` defaults to “302 “Found”.

   `res.redirect('http://google.com')`

## 11.4 Router

### 11.4.1 express.Router

A `router` object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.

A router behaves like middleware itself, so you can use it as an argument to [app.use()](https://expressjs.com/en/4x/api.html#app.use) or as the argument to another router’s [use()](https://expressjs.com/en/4x/api.html#router.use) method.

The top-level `express` object has a [Router()](https://expressjs.com/en/4x/api.html#express.router) method that creates a new `router` object.

Once you’ve created a router object, you can add middleware and HTTP method routes (such as `get`, `put`, `post`, and so on) to it just like an application. For example:

```js
// invoked for any requests passed to this router
router.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next()
})

// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function (req, res, next) {
  // ..
})
```

```js
// only requests to /calendar/* will be sent to our "router"
app.use('/calendar', router)
```

与普通的express().get()的区别
1、根据不同功能，利用express.Router()中的get去创建接口，导出不同功能接口模块
2、通过express().use()对功能接口进行接口路径拼接
3、页面调用接口，需要加上use中拼接的第一个参数



## 11.5 Routing (Express Path Params)

*Routing* refers to how an application’s endpoints (URIs) respond to client requests. Routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. 

In fact, the routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide `next` as an argument to the callback function and then call `next()` within the body of the function to hand off control to the next callback.

### 11.5.1 Route paths

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

The characters `?`, `+`, `*`, and `()` are subsets of their regular expression counterparts. The hyphen (`-`) and the dot (`.`) are interpreted literally by string-based paths.

1. This route path will match requests to `/about`

   ```js
   app.get('/about', (req, res) => {
     res.send('about')
   })
   ```

2. This route path will match `acd` and `abcd`

   ```js
   app.get('/ab?cd', (req, res) => {
     res.send('ab?cd')
   })
   ```

3. This route path will match `abcd`, `abbcd`, `abbbcd`, and so on.

   ```js
   app.get('/ab+cd', (req, res) => {
     res.send('ab+cd')
   })
   ```

4. This route path will match `abcd`, `abxcd`, `abRANDOMcd`, `ab123cd`, and so on.

   ```js
   app.get('/ab*cd', (req, res) => {
     res.send('ab*cd')
   })
   ```

5. This route path will match `/abe` and `/abcde`

   ```js
   app.get('/ab(cd)?e', (req, res) => {
     res.send('ab(cd)?e')
   })
   ```

6. This route path will match anything with an “a” in it.

   ```js
   app.get(/a/, (req, res) => {
     res.send('/a/')
   })
   ```

7. This route path will match `butterfly` and `dragonfly`, but not `butterflyman`, `dragonflyman`, and so on.

   ```js
   app.get(/.*fly$/, (req, res) => {
     res.send('/.*fly$/')
   })
   ```

### 11.5.2 Route parameters

1. Route path: /users/:userId/books/:bookId
   Request URL: http://localhost:3000/users/34/books/8989
   req.params: { "userId": "34", "bookId": "8989" }

```js
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```

2. Route path: /flights/:from-:to
   Request URL: http://localhost:3000/flights/LAX-SFO
   req.params: { "from": "LAX", "to": "SFO" }

3. Route path: /plantae/:genus.:species
   Request URL: http://localhost:3000/plantae/Prunus.persica
   req.params: { "genus": "Prunus", "species": "persica" }
4. Route path: /user/:userId(\d+)
   Request URL: http://localhost:3000/user/42
   req.params: {"userId": "42"}

### 11.5.3 Route Handlers

You can provide multiple callback functions that behave like [middleware](https://expressjs.com/en/guide/using-middleware.html) to handle a request. The only exception is that these callbacks might invoke `next('route')` to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

Route handlers can be in the form of a function, an array of functions, or combinations of both, as shown in the following examples.

A single callback function can handle a route. 

```js
app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})
```

### 11.5.4 Response methods

1. app.route()

   You can create chainable route handlers for a route path by using `app.route()`. Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. 

   ```js
   app.route('/book')
     .get((req, res) => {
       res.send('Get a random book')
     })
     .post((req, res) => {
       res.send('Add a book')
     })
     .put((req, res) => {
       res.send('Update the book')
     })
   ```

2. res.render()

   The **res.render()** function is used to render a view and sends the rendered HTML string to the client. 

   **Syntax** 

   `res.render(view [, locals] [, callback])`

   **Parameters:** This function accept two parameters as mentioned above and described below: 

   - **Locals:** It is basically an object whose properties define local variables for the view.
   - **Callback** It is a callback function.

   **Returns:** It returns an Object.

   ```js
   app.get('/', (req, res)=>{
     // home.ejs
     res.render('home')
   })
   
   app.get('/rand', (req, res) => {
     const num = 10;
   	// random.ejs
     res.render('random', {rand: num})
   })
   ```

   ```html
   // in random.ejs
   <body> 
     <h1>Your random number is <%= rand %></%></h1>
   </body>
   ```

   ```js
   app.get('/r/:subreddit', (req, res)=>{
     const {subreddit} = req.params;
     res.render('subreddit', {subreddit});
   })
   ```

## 11.6 Serving static files in Express

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

```js
express.static(root, [options])

app.use(express.static('public'))
```

The `root` argument specifies the root directory from which to serve static assets. 

However, the path that you provide to the `express.static` function is relative to the directory from where you launch your `node`process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:

```js
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
```

## 11.7 Method-override

Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.

### override using a query value

To use a query string value to override the method, specify the query string key as a string argument to the `methodOverride` function. To then make the call, send a `POST` request to a URL with the overridden method as the value of that query string key. This method of using a query value would typically be used in conjunction with plain HTML `<form>` elements when trying to support legacy browsers but still use newer methods.



## 11.8 Error Handling

1. Catching Errors

```js
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
// or write own error catching class
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('password required', 401);
    // res.send("PASSWORD NEEDED!")
    // throw new AppError('Password required!', 400)
}

// In AppError.js 
class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}
module.exports = AppError;
```

For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the `next()`function, where Express will catch and process them.

```javascript
app.get('/products/:id/edit', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw next(new AppError('Product Not Found', 404));
    }
    res.render('products/edit', { product, categories })
})
// or
app.get('/products/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', { product, categories })
  } catch(e) {
    next(e);
  }
})
// or
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', { product, categories })
}))
```

Starting with Express 5, route handlers and middleware that return a Promise will call `next(value)` automatically when they reject or throw an error.

```js
app.get('/user/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id)
  res.send(user)
})
```



2. The default error handler

```javascript
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
```

3. Writing error handlers

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
// or
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})
```

If you pass anything to the `next()`function (except the string `'route'`), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions. 



# 12 EJS

1. `<%=` : Outputs the value into the template (HTML escaped), which means that we can write JS in html

2. `<%` : 'Scriptlet' tag, for control-flow, no output

   ```html
   <body> 
     <h1>Your random number is <%= rand %></%></h1>
     <% if(num%2 === 0){ %>
        <h2> This is an even number! </h2>
     <% } %>
   </body>
   ```

3. `<%-`: Outputs the unescaped value into the template

   includes

   ```js
   <%- include('user/show', {user: user}); %>
   ```




# 13 REST

**REPRESENTATIONAL STATE TRANSFER**

It's basically a set of guidelines for how a client + server should communicate and perform CRUD operations on a given resource



# 14 DataBases

1. Start `brew services start mongodb-community@5.0`

2. Connect MongoDB Shell 

   ```cmd
   mongo # connects to mongodb://127.0.0.1:27017 by default
   mongo --host <host> --port <port> -u <user> -p <pwd> # omit the password if you want a prompt
   mongo "mongodb://192.168.1.1:27017"
   mongo "mongodb+srv://cluster-name.abcde.mongodb.net/<dbname>" --username <username> # MongoDB Atlas
   ```

3. Show current database`db`

4. Show databases `show dbs`

5. Switch database `use <database_name>` `use animalShelter`

6. Show collections `show collections`

7. Run javascript file `load("myScript.js")`

8. Show all data `db.campgrounds.find()`

## 14.2 MongoDB CRUD Operations

CRUD operations *create*, *read*, *update*, and *delete* documents

### 14.2.1 Create Operations

1. `db.collection.insertOne()` Inserts a single document into a collection.

   ```cmd
   db.collection.insertOne(
      <document>,
      {
         writeConcern: <document>
      }
   )
   
   db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi"})
   ```

2. `db.collection.insertMany()` Inserts multiple documents into a collection.

3. `db.collection.insert()` Inserts a document or documents into a collection.

   ```cmd
   db.coll.insertOne({name: "Max"})
   db.coll.insert([{name: "Max"}, {name:"Alex"}])
   ```

### 14.2.2 Read Operations

1. `db.collection.find()`

   ```cmd
   db.coll.findOne() // returns a single document
   db.coll.find()    // returns a cursor - show 20 results - "it" to display more
   db.coll.find({name: "Max", age: 32}) // implicit logical "AND".
   db.coll.find({date: ISODate("2020-09-25T13:57:17.180Z")})
   db.coll.find({name: "Max", age: 32}).explain("executionStats") // or "queryPlanner" or "allPlansExecution"
   db.coll.distinct("name")
   ```

### 14.2.3 Update Operations 

1. `db.collection.updateOne()` Update the first one that matches

2. `db.collection.updateMany()`

3. `db.collection.replaceOne()`

   ```MongoDB Shell
   db.coll.update({"_id": 1}, {$set: {"year": 2016, name: "Max"}})
   ```

Update operation:

- The [`$set`](https://www.mongodb.com/docs/manual/reference/operator/update/set/#mongodb-update-up.-set) operator replaces the value of a field with the specified value.
- The [`$currentDate`](https://www.mongodb.com/docs/manual/reference/operator/update/currentDate/#mongodb-update-up.-currentDate) operator sets the value of a field to the current date, either as a [Date](https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-document-bson-type-date) or a [timestamp](https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-document-bson-type-timestamp). The default type is [Date](https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-document-bson-type-date)

### 14.2.4 Delete Operations

1. `db.collection.deleteOne()`

2. `db.collection.deleteMany()`

   ```cmd
   db.cats.deleteOne({name: "Blue Steele"})
   db.dogs.deleteMany({}) // delete everything
   ```

## 14.3 Mongoose

Object Data/Document Mapper(ODM): ODMs like Mongoose map documents coming from a database inro usable JavaScript objects. 

### 14.3.1 Connect 

```js
// don't forget to start mongodb first
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

### 14.3.2 Schemas

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```js
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});
```

**Schema Types**

A SchemaType is just a configuration object for Mongoose. 

- `type`: When Mongoose finds a nested property named `type` in your schema, Mongoose assumes that it needs to define a SchemaType with the given type.
- `required`: boolean or function, if true adds a [required validator](https://mongoosejs.com/docs/validation.html#built-in-validators) for this property
- `default`: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
- `index`: boolean, whether to define an [index](https://docs.mongodb.com/manual/indexes/) on this property.
- `unique`: boolean, whether to define a [unique index](https://docs.mongodb.com/manual/core/index-unique/) on this property.
- `lowercase`: boolean, whether to always call `.toLowerCase()` on the value
- `maxLength`: Number, creates a [validator](https://mongoosejs.com/docs/validation.html) that checks if the value length is not greater than the given number

```js
const schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const schema1 = new Schema({
  test: String // `test` is a path of type String
});

const schema2 = new Schema({
  // The `test` object contains the "SchemaType options"
  test: { type: String } // `test` is a path of type string
});
```

**Instance Methods**

Instances of `Models` are [documents](https://mongoosejs.com/docs/documents.html). Documents have many of their own [built-in instance methods](https://mongoosejs.com/docs/api/document.html). We may also define our own custom document instance methods.

```js
// define a schema
const animalSchema = new Schema({ name: String, type: String });

// assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  return mongoose.model('Animal').find({ type: this.type }, cb);
};

const Animal = mongoose.model('Animal', animalSchema);
const dog = new Animal({ type: 'dog' });

dog.findSimilarTypes((err, dogs) => {
  console.log(dogs); // woof
});
```

**Static Methods**

- Add a function property to `schema.statics`

- Call the `Schema#static()` function

  ```js
  animalSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
  };
  
  const Animal = mongoose.model('Animal', animalSchema);
  let animals = await Animal.findByName('fido');
  animals = animals.concat(await Animal.findByBreed('Poodle'));
  ```

  

### 14.3.3 Models

A model is a class with which we construct documents.

```js
// a model class
const Movie = mongoose.model('Movie', movieSchema);
// new instance of movie
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
```

```js
amadeus.year = 1999;
amadeus.save(); // save after update
```

- Model.updateOne() 

  ```js
  const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' }); // return Query
  ```

- Model.findOneAndUpdate

  Finds a matching document, updates it according to the `update` arg, passing any `options`, and returns the found document (if any) to the callback. The query executes if `callback` is passed else a Query object is returned.

  *Options*:

  `new`: bool - if true, return the modified document rather than the original. defaults to false

  `runValidators`: if true, runs [update validators](https://mongoosejs.com/docs/validation.html#update-validators) on this command. Update validators validate the update operation against the model's schema.

  ```js
  A.findOneAndUpdate(conditions, update)           // returns Query
  A.findOneAndUpdate(conditions, update, options)  // returns Query
  ```

- Model.remove()

  Removes all documents that match `conditions` from the collection.

- Model.findOneAndDelete()

  ```js
  A.findOneAndDelete(conditions, options, callback) // executes
  Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m))  // print the movie that just deleted
  ```

- Model.deleteOne()

  Deletes the first document that matches `conditions` from the collection. It returns an object with the property `deletedCount` indicating how many documents were deleted. Behaves like `remove()`, but deletes at most one document regardless of the `single` option.

  ```js
  await Character.deleteOne({ name: 'Eddard Stark' }); // returns {deletedCount: 1}
  ```




### 14.3.4 [Promises]((https://mongoosejs.com/docs/promises.html))

Mongoose async operations, like `.save()` and queries, return thenables. This means that you can do things like `MyModel.findOne({}).then()` and `await MyModel.findOne({}).exec()` if you're using [async/await](http://thecodebarbarian.com/80-20-guide-to-async-await-in-node.js.html).



### 14.3.5 Virtuals

In Mongoose, a virtual is a property that is **not** stored in MongoDB. Virtuals are typically used for computed properties on documents.

```js
const userSchema = mongoose.Schema({
  email: String
});
// Create a virtual property `domain` that's computed from `email`.
userSchema.virtual('domain').get(function() {
  return this.email.slice(this.email.indexOf('@') + 1);
});
const User = mongoose.model('User', userSchema);

let doc = await User.create({ email: 'test@gmail.com' });
// `domain` is now a property on User documents.
doc.domain; // 'gmail.com'
```



### 14.3.6 Mongoose Relationships

1. One to Few: **Embed the data directly in the document!**
2. One to Many: **One option is to store your data separately, but then store references to document ID's somewhere inside the parent:**
3. One to Bajillions: **With thousands or more documents, it's more efficient to store a reference to the parent on the child document.**





```js
const express = require('express')
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res)=>{
    res.send('WOOF!')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
```



# 15 Middleware

Middleware are just functions. 

Each middleware has access to the request and response objects

Middleware can end the HTTP request by sending back a response with methods like res.send()

OR middleware can be chained together, one after another by calling next()

*Middleware* functions are functions that have access to the [request object](https://expressjs.com/en/4x/api.html#req) (`req`), the [response object](https://expressjs.com/en/4x/api.html#res) (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.



Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

```js
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
```



```js
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("YOU NEED A PASSWORD!")
}

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

// password only used in "secret"
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})
```



# 16 Cookie and Session

## 16.1 Cookie



## 16.2 Session

Cookies and URL parameters are both suitable ways to transport data between the client and the server. But they are both readable and on the client side. Sessions solve exactly this problem. You assign the client an ID and it makes all further requests using that ID. Information associated with the client is stored on the server linked to this ID.



```js
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);
```

What the above code does is, when a user visits the site, it creates a new session for the user and assigns them a cookie. Next time the user comes, the cookie is checked and the **page_view** session variable is updated accordingly.









[Build a RESTful API with Express and Mongoose](https://rahmanfadhil.com/express-rest-api/)

1. basic express server `npm init -y`
2. setup mongoose
3. mongoose model
4. get all posts
5. create posts
6. get individual post
7. update post
8. delete post









