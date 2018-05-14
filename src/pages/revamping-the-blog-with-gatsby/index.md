---
title: Rewriting the blog with Gatsby
date: 2018-04-12 08:14:31
tags: [static-site, build-tools, meta]
---

If you've been following the front-end space it's very likely that you've heard of React. For a long time, I only used React for tiny projects like [this](https://harrisjose.github.io/kolor/#/), because it took a lot of work setting it up. I mean, `create-react-app` gave you nice defaults but you still had to make a lot of other decisions like routing, state management, the css stack, et al.

## React for web pages?

Around this time something that really piqued my interest was that Netflix was using React to build their home page (and maybe the signup page too? I don't really remember).

Now this, at the time, looked totally bonkers to me.

Why? Because, with websites, you'll eventually need to serve a static page to your users. React or No React. So I started digging in. Was React and the ecosystem around it really that good? Is it worth sacrificing the simplicity of HTML + CSS + JS for an elaborate build process plus server-side rendering?

## Abstracting away the complexity.

I eventually got nowhere with this (as with a lot of my other side-projects) but eventually I found Gatsby. Gatsby abstracted away a lot of the complexity and made it really simple to make static websites with React. It has a nice set of community plugins that just work.

It even gives you a nice way (graphQL) to pull in data from whatever database, CMS or raw file(s) you like to keep your content in.

Also, if you're reading this I probably have switched my website over to Gatsby. I'm still not entirely done (tag-pages for example are still not complete), and I'm not sure I ever will be but I can't say I'm not loving this.

## Is this something I would use in production?

*Absolutely*. One of the important things I think Gatsby will do nicely is scale up. It's not hard to imagine building out a shared component library and design system for your company's website that scales along with your team. It's probably a good thing that Gatsby uses graphQL as an abstraction to pull in content cause you bet your ass it will scale.

Besides all this, Gatsby truly does improve developer experience. HMR, code splitting, inlining critical css, are all very easy to set up. So will any new tech that is gonna pop up in the near future.
