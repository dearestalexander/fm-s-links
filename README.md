# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Social links profile solution](#frontend-mentor---social-links-profile-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Feedback I received for reference](#feedback-i-received-for-reference)
      - [@grace-snow (Grace)](#grace-snow-grace)
      - [@Stroudy (Steven)](#stroudy-steven)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop screenshot](/screenshots/Jessica-desktop.png)
![Desktop screenshot - hover](/screenshots/Jessica-desktop-hover.png)
![Desktop screenshot](/screenshots/Jessica-mobile.png)
![Desktop screenshot - hover](/screenshots/Alexander-desktop.png)
![Desktop screenshot](/screenshots/Alexander-desktop-hover.png)
![Desktop screenshot - hover](/screenshots/Alexander-mobile.png)

### Links

- Solution URL: [Github Repository](https://github.com/dearestalexander/fm-s-links)
- Live Site URL: [Github Pages Live View](https://dearestalexander.github.io/fm-s-links/)

## My process

### Built with

- Plain HTML and CSS, featuring use of
  - CSS variables
  - CSS flexbox (as always lol)
  - CSS @media for width adjustment for mobile
- JavaScript
  - To toggle between different styles for the template vs. my own profile.

After receiving good feedback from @grace-snow, @stroudy and @TedJenkler I made a bunch of changes:

- Replaced any use of absolute with flexbox
- Replaced any px measurements with rem
- Re-worked class names using the block element method
- Replaced any id references for styling with classes
- Added js- prefix to ids used in javascript
- Changed 'display option' button with a checkbox, maybe not ideal yet, but better I think.

### What I learned

On the template:

I did some additional reading on variable fonts following on with from the last exercise. I was interested in the rational of providing variable fonts and static fonts. I considered adding references to both with @font-face and using the static fonts as a back-up. But I realised that this makes the use of variable fonts redundant as we don't save anything in terms of file download optimisation. I suppose you could just use one style of static font to replace multiple style usages of a variable font. But perhaps in real life it's better to just use standard fonts as a back up for failed variable font download.

On adding my own variant:

The style changes are fairly minor. Just color, image etc. However, I had some struggles with precedence in JavaScript. It took me a while to realise that if you have a style with an id as the selector then to toggle by class to a different style it won't work with just the class, you need to toggle to id.class to beat the id precedence. Coming out of this I feel like I have a better understanding of precedence and inheritence.

I also hadn't realised that getElementByClassName returns a live collection, this caused some problems with my attempt to loop through the links, until I realised it's better to use querySelectorAll which returns a static nodelist.

### Feedback I received for reference

#### @grace-snow (Grace)

Design buttons:

- it has no visual indicator of which is selected (this must be more than just a colour change).
- it has no *programmatic* indicator of which is selected.
- Usually a toggle button would be done with aria-pressed, or perhaps these should be radio inputs. It's honestly very hard to know from this unusual design.

- Updates made:
  - Toggle - I think it would be clearer than my button approach but to implement a toggle looks a bit complicated, maybe not worth it for the purposes of this use case.
  - Checkbox - I had the thought to use a single checkbox as a “view alternate design” option. After checking I discovered I can use and ‘input’ listener and then adjust styling based on checkbox.checked === true or false. This also simplifies the JS from 2 event listeners down to one.
  - It seems a better visual indicator. I am unsure about ‘programmatic indicator’. Is the programming logic obvious and the function clear from the element used? Unsure?

Other points:

you shouldn't be styling on IDs. They have important purposes where you'll need them later. Style on single class selectors

- Update made:  I hadn’t realised this. I’m glad as I have less precedence issues now

the list of links should really be in a list.

- Update made: Done. This had never crossed my mind with these kind of social media links laid out this way, but makes sense. I guess lists can be used quite often. Will keep this in mind.

I recommend you use separate hooks when you need them for javascript
selectors so it's really obvious that they are there for a different
reason. Eg I like to use "js-" prefixed classes, or some people like to
use data attributes

- Update made: I like the js- prefix. What’s your view on using id’s. I find getElementById easy to use. I’ve kept my use of id’s for now, but open to switch more to using classes.

to center the component on the screen use flex properties and min-height 100svh. Remove all position properties.

- Update made: Okay, I think I have this sorted now.

the component must not have a width. All it needs is a max-width in rem.
  
- Update made: Updated. but I have a question on this. I don’t have any specific widths specified now. The width of my frame is now based on the widest element (incl. any padding). In my case it’s the bio text. I found that my social links frame looks a bit thin compared to the template screenshots, so I added a bit of extra padding to the bio text to make it a bit wider. I then remove that in the @media for mobile. I feel like I am still maybe going about this wrong. I saw in your blog post you mentioned we probably don’t need @media for this kind of design (at least for qr code). What’s the best approach to have some width for styling purposes on desktop, but still allow it to shrink narrower?

you don't need to change all the classes in javascript. Just change one
class on the body and let that class change the variable values for
colours in css. This needs all those variables to be set on the body not root. Then you can get rid of lots of unnecessary css tied to --alt
classes.

- Update made: I think this is the one point I didn’t understand. I tried to think through how can I just put a class on body to change multiple elements in different ways, but my brain is going blank lol. Could you give a bit more of a tip?

the image should have an explicit height and width in this.

- Update made: done, with rem

the card should have padding and then you can get rid of all the unusual
percentage widths. The links need to be display block or flex or width
100%.

- Update made: done, added 2rem padding

try not to remove borders on buttons. Either keep the same colour as the
background or make them transparent in colour. This is important for
when users switch to high contrast colour modes.

- Update made: buttons now removed, but noted for future.

remove the position absolute from the footer. It's overlapping the content sometimes.

- Update made: done

same with the buttons. They shouldn't be position absolute either. Let them
sit above the content. If you want to lay out elements at the top and
bottom of the screen you need to do that with flex or grid properties.

- Update made: removed and noted

text center is needed (can be on the body)

- Update made: done

#### @Stroudy (Steven)

Missing a `<meta>` description tag for SEO purposes

- Update made: Added. If I understood correctly should also be good for screen readers.

You should apply a full modern reset to make things easier as you build, check out this site for a [**Full modern reset**](https://www.joshwcomeau.com/css/custom-css-reset/)

- Update made: Thanks for sharing this. I read the Meyer Web and Josh Comeau resets. Some of it is clear, some of it is a bit beyond my knowledge at the moment. I’ve noted them down for now. I’m still a bit undecided on which parts of a reset to use for this challenge, so will leave it out for now, but it’s on my list to work on as I learn more.

Using a naming convention like [**BEM**](https://getbem.com/), Using proper naming will prepare you for the changes in design of the website.

- Update made: This is great, I was looking for more structure in my CSS. I’ve had a go at updating in line with BEM. One thing I like about this is it makes it easy to work on your CSS and JS without having to remind yourself of your class names.

You should avoid using `ID selectors #` and use `class=""` Instead because `#ID` is usually used for JavaScript or other reasons not styling.

- Update made: Updated. This also resolved precedence issues I had.

‍Using `max-width: 100%` or `min-width: 100%` is way more responsive then just `width:100%`, check out this article also from the same Frontend mentor dev [**responsive-meaning**](https://fedmentor.dev/posts/responsive-meaning/), she goes into more detail.

- Update made: I’ve gotten all my fixed widths out. The width is now driving by the widest content + padding

You should avoid using `px` as it is an absolute unit and not a responsive unit like `rem` or `em`, You should look at this article from a Frontend mentor dev, [**Why font-size must NEVER be in pixels**](https://fedmentor.dev/posts/font-size-px/).

- Update made: The approach I’ve taken is to set the base paragraph size in the spec as a variable and specified all other sizes as calc() based on that. I understand normally we should use REM, but I’m unsure how we should do this when the spec has a size in px.

Another great resource for [**px to rem converter**](https://nekocalc.com/px-to-rem-converter).

- Update made: Bookmarked - very useful

You should add a `font-display: swap;` property to your `@font-face`, Leverage the font-display CSS feature to ensure that text is user-visible while web fonts are loading, Increasing performance.

- Update made: Thanks, updated

Setting a height and width attribute to your `<img>` will increase performance to reduce layout shifts and improve CLS, It reserves the space on the page for the image,

- Update made: I wanted to specify width and height in rem. I looked into it and if I put that in the HTML it doesn’t offer any performance improvement over putting it in CSS

Using `position: absolute` is not the best practice and should only be used in very few cases, Stick with `flex` or `grid` in most cases.

- Update made: Yep, got rid of that

@TedJenkler (Teodor)

Centering: "Use flex properties and min-height: 100svh to center your component." Avoid fixed width; use max-width in rem.

- Update made: Thanks, updated
Naming conventions: Try BEM for more scalable CSS.

- Update made: Read up on this, it’s great. Have had a go at implementing it.
ID selectors: "Stick with class="" for styling, as #ID is best for JavaScript."

- Update made: Thanks, updated. This helped resolve some precedence complexities too.

Responsive design: "Use max-width: 100% for responsiveness over width: 100%."

- Update made: Thanks, updated. I’m starting to understand the idea now with responsive designs

Font-size: "Avoid px; use rem or em for responsive typography."

- Update made:  Thanks, updated

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

Still a bit unsure about how to simplify the number of 'alt' CSS selectors for the display change.

## Author

- Website - [Alexander Roan](https://www.alexroan.com)
- Frontend Mentor - [@dearestalexander](https://www.frontendmentor.io/profile/dearestalexander)
- Twitter - [@xander_roan](https://x.com/xander_roan)

## Acknowledgments

Thanks to frontend mentor for providing this exercise.
