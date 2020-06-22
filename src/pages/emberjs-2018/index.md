---
title: EmberJS 2018 - My Wishlist
date: 2018-05-15T08:14:31.000+00:00
tags:
- ember
- ember-cli
- front-end
- frameworks

---
I'm holding off on a couple of other posts because this one is far more important. The EmberJS core team has called for blog posts as the first step in setting the 2018 roadmap. Here's what I'd like to see in Ember over this year and the next.

## Hot Module Reloading

Before you point it out, [this](https://github.com/toranb/ember-cli-hot-loader) doesn't exactly count. I want to see HMR, enabled for all projects out of the box. In my opinion (and experience) this is something you think of as a _nice to have_ until you start playing around with the likes of React or Vue - frameworks that have first class support for it.

_But why is this the first thing on my list?_

Before I get into specifics, go watch [this talk](https://vimeo.com/36579366) by Bret Victor on how fast feedback loops are a pre-requisite for creativity. Bret also makes it very clear that preserving application state while you're making changes can unlock ideas that would not have occurred to us with our current workflows.

Imagine you're working on an on-boarding popup that has successive screens. With HMR, I can first open up the popup, make changes on the first screen, have it update instantly, then click next to go to the second screen and make changes on it.

Right now, you either start batching your changes, reload and repeat _or_ you start tweaking your code so that the screen you're iterating on opens right away. This is frustrating, and once you get used to immediate feedback with other frameworks, it's very hard to adjust to the slow rebuild, refresh cycle in ember-cli apps (particularly the large ones at work).

## Better Components

I like handlebars a lot. It probably is my favorite templating language. But consuming components with the handlebars syntax just feels wrong, particularly when the angle bracket syntax feels much more closer to html and more in line with other modern frameworks.

The core team has been working really hard on [Glimmer components](https://github.com/emberjs/ember.js/issues/16301) and they really do look very promising. A particularly significant improvement in Glimmer components is how they make the separation between props and attributes [explicit](https://www.emberjs.com/blog/2017/10/10/glimmer-progress-report.html#toc_component-attributes). 'Splattributes' and not requiring a wrapper element for every component is also very cool.

Not being able to use all these in existing apps (particularly when, newer features in Ember have been always been very straightforward to adopt) is a real bummer. Besides this, I'd also like to see [single file components](https://vuejs.org/v2/guide/single-file-components.html) but that is much more of a personal peeve than a deal-breaker.

## Native NPM Module Support

I'd love it if I could `npm install package@version` and have it just work instead of importing files from it into the app tree (comments about broccoli to follow) or go looking for a suitable ember-cli-addon that wraps this up for consumption.

An add-on might make sense in particular cases but **npm** is a treasure trove of small modules that solve very specific use cases. Take a look at this [lovely little module](https://github.com/feross/clipboard-copy) by Feross. I would love it if I could just do this and have it work,

```javascript
import copy from 'clipboard-copy';
...
export default Component.extend({
  actions: {
    click() {
      copy('Yaay!!').then(() => {
        /*do something*/
      });
    }
  }
});
```

## Easier Code Splitting

Engines are great. I really do think they solve a particularly nasty use case where you have entire routes shared across multiple apps. However, for small to medium sized apps, would I really go through with the effort of splitting up code into engines so that I can have a smaller initial bundle? Probably not.

Afaik, effort is already underway for code-splitting and tree-shaking and it would be really nice to be able to use this as soon as possible.

## Better & Faster Build Pipelines

I don't really like [Broccoli](http://broccolijs.com/#). Maybe **_understand_** would be a better word. What is Broccoli supposed to manage in ember-cli apps? Is it equivalent to what webpack does for React and Vue apps? Or is it supposed to function as a base layer for the ember-cli add-on system? (If you've got a link that explains all this, please share).

I've seen Broccoli being used to create asset pipeline for a smallish project and I'm imagining that it somewhat does the same thing for ember. But the lack of documentation makes it very frustrating to understand what it's being used for and harder to hack into, when needed.

> _Update_: [@jwwweber](https://twitter.com/jwwweber) pointed [this article](http://www.oligriffiths.com/broccolijs/) out to me recently and although I haven't had time to go through this entirely yet, it does look like Oli Griffiths has a good starting point for people wanting to know more about Broccoli.

Besides Broccoli, an easier way to generate multiple builds (one for newer browsers and one for legacy) would also be very useful.

## Curated Best Practices and Add-ons

Ember has been around for quite some time now and it's kinda hard to keep track of the best practices (I sometimes get confused on whether something I'm doing out of habit has been anti-pattern'd). I guess better documentation and examples should take care of this.

Also, it would be really nice to have a set of recommended add-ons, curated by the community. Plugins like _route-action-helpers_ and _ember-concurrency_ make life a lot easier and developers should be actively encouraged to use them whenever appropriate.

## Concluding Thoughts

2018 is the year Ember should play catch up. As a community, a lot of us value stability maybe a little too much, and it has probably made us a bit stagnant.

Certain things, like HMR, CSS in JS and Code-Splitting that have been widely adopted across the JavaScript community are still not must-have's inside the Ember community. I believe we can alleviate a lot of this disconnect if we work on getting these features shipped to users as soon as possible.

I'm also excited to read what fellow developers in the community have to say. Here's to hoping the core team takes all our opinions into account for the 2018 Roadmap.