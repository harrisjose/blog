---
title: EmberJS 2018 - My Wishlist
date: 2018-05-15 08:14:31
tags: [ember, ember-cli, front-end, frameworks]
---

I'm holding off on a couple of other posts because this one is far more important. The EmberJS core team has called for blog posts as the first step in setting the 2018 roadmap. Here's what I'd like to see in Ember over this year and the next.

## Hot Module Reloading

Before you point it out, [this](https://github.com/toranb/ember-cli-hot-loader) doesn't count. I want to see HMR, enabled for all projects out of the box. In my opinion (and experience) this is something you think of as a *'nice to have'* until you start playing around with the likes of React or Vue, frameworks that have first class support for it.

Once you get used to the immediate feedback, it's very hard to go back to the slow rebuild, refresh cycle in `ember-cli` apps (particularly large ones). Maybe the [add-on](https://github.com/toranb/ember-cli-hot-loader) would be a starting point to bring this into ember-cli by default.

## Better Components

The core team has been working really hard on [Glimmer components](https://github.com/emberjs/ember.js/issues/16301) and they really do look very promising. But not being able to use them in existing apps is a bit of a bummer. Like a lot of people have noted, the angle-bracket syntax feels much more in line with other modern frameworks.

Besides this, I'd also like to see [single file components](https://vuejs.org/v2/guide/single-file-components.html) but that is much more of a personal thing than a deal-breaker.

## Native NPM Module Support

I'd love it if I could `npm install package@version` and have it just work instead of importing files from it into the app tree (comments about broccoli to follow) or go looking for a suitable ember-cli-addon that wraps this up for consumption.

## Easier Code Splitting

Engines are great. I really do think they solve a particularly nasty use case where you have entire routes shared across multiple apps. However, for small to medium sized apps, would I really go through with the effort of splitting up code into engines so that I can have a smaller initial bundle? Probably not.

Afaik, effort is already underway for code-splitting and tree-shaking and it would be really nice to be able to use this as soon as possible.

## Better & Faster Build Pipelines

I don't really like [Broccoli](http://broccolijs.com/#). Maybe **'understand'** would be a better word. What is Broccoli supposed to manage in ember-cli apps? Is it equivalent to what webpack does for React and Vue apps. Or is it supposed to function as a base layer for the ember-cli add-on system. (If you've got a link that explains all this, please share).

I've seen Broccoli being used to create asset pipeline for a smallish project and I'm imagining that it somewhat does the same thing for ember. But the lack of documentation makes it very frustrating to understand why it's being used for and harder to hack into, if needed.

Besides Broccoli, an easier way to generate multiple builds (one for newer browsers and one for legacy) would also be very nice.

## Curated Best Practices and Add-ons

Ember has been around for quite some time now and it's kinda hard to keep track of the best practices (I sometimes get confused on whether something I'm doing out of habit has been anti-pattern'd). I guess better documentation and examples should take care of this.

Also, it would be really nice to have a set of recommended add-ons, curated by the community. Plugins like route-action-helpers and ember-concurrency make life a lot easier and users should be actively encouraged to use them whenever appropriate.

## Final Notes

2018 is the year Ember should play catch up. As a community a lot of us value stability, maybe a little too much, that it has made us a bit stagnant.

Certain things, like HMR, CSS in JS and Code-Splitting that have been widely adopted across the JavaScript community are still not must-have's inside the Ember community. I believe we can alleviate a lot of this disconnect if we work on getting these features shipped to users as soon as possible.

I'm also excited to read what fellow developers in the community have to say. Here's to hoping the core team takes all our opinions into account for the 2018 Roadmap.
