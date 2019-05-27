---
title: Why CSS in JS deserves your attention
date: 2018-07-29 08:14:31
tags: [css-in-js, front-end, frameworks]
---

I gave a presentation at work recently about the whole **CSS vs CSS in JS** debacle and about why we should be looking at CSS in JS more seriously. I’m pretty sure I messed it up but I think the slides came out to be kinda nice even though I made them in 2 hours 😐.

<div class="py-1"></div>

> These slides go in two directions - top-down and left-right. If you’re looking through them remember to go down before going to the next slide. Also the TL;DR version of the talk is right below, just in case anyone’s interested.

<div class="py-2"></div>

<iframe src="//slides.com/harrisjose/cssinjs/embed?style=dark" width="600" height="400">
</iframe>

<div class="py-2"></div>

CSS by itself is a very good way to style **documents**. I emphasize documents because I believe CSS is not the best way to style apps. A few annoying things about having to use CSS at scale, in web apps are

- There is currently no way to enforce scoping for your styles. The cascade is a good idea for documents, not applications.
- No dependency management built in. The previous point about the cascade applies here too.
- No way to get data into and out of CSS. Particularly frustrating when you have to maintain constants in both JS and CSS.
- Dead Code Elimination is hard to do in CSS because we don’t know what will be used, until it is used.

There are newer specifications coming out in CSS like [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) for example, but these are designed to solve problems of style. But styling isn’t the only problem we have.

When styling apps you want **style to be a function of your state**. Which is a rather nice way of describing CSS in JS if you think about it. Well parts of it, at least. Css in JS solves the problems I’ve listed above elegantly and for me that alone is enough to justify using it, even in existing projects.

### Recommended Reading

- [CSS in JS: Style as a function of State](https://medium.com/@rofrischmann/styles-as-functions-of-state-1885627a63f7)
- [Farewell CSS](https://moox.io/blog/farewell-css/)
- [An unified Styling Language](https://www.youtube.com/watch?v=X_uTCnaRe94)