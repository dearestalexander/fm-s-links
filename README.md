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
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop screenshot](/s-link-desktop-jessica.png)
![Desktop screenshot](/s-link-desktop-alexander.png)
![Mobile screenshot](/s-link-mobile-jessica.png)
![Mobile screenshot](/s-link-mobile-alexander.png)

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

### What I learned

On the template:

I did some additional reading on variable fonts following on with from the last exercise. I was interested in the rational of providing variable fonts and static fonts. I considered adding references to both with @font-face and using the static fonts as a back-up. But I realised that this makes the use of variable fonts redundant as we don't save anything in terms of file download optimisation. I suppose you could just use one style of static font to replace multiple style usages of a variable font. But perhaps in real life it's better to just use standard fonts as a back up for failed variable font download.

On adding my own variant:

The style changes are fairly minor. Just color, image etc. However, I had some struggles with precedence in JavaScript. It took me a while to realise that if you have a style with an id as the selector then to toggle by class to a different style it won't work with just the class, you need to toggle to id.class to beat the id precedence. Coming out of this I feel like I have a better understanding of precedence and inheritence.

I also hadn't realised that getElementByClassName returns a live collection, this caused some problems with my attempt to loop through the links, until I realised it's better to use querySelectorAll which returns a static nodelist.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [Alexander Roan](https://www.alexroan.com)
- Frontend Mentor - [@dearestalexander](https://www.frontendmentor.io/profile/dearestalexander)
- Twitter - [@xander_roan](https://x.com/xander_roan)

## Acknowledgments

Thanks to frontend mentor for providing this exercise.
