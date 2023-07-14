# LAB - CodeFellows Class 40

## Project: Javascript and Web Frameworks

### Authors: Reece Renninger, Kaeden O'meara, Heather Holcomb, Ike Steoger

### Problem Domain

- Visit and re-familiarize yourself with the [Salmon Cookies Project](https://ikesteoger.github.io/cookie-stand/)
- Create a new repository for your work, with the name of the framework you have been assigned.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/ReeceRenninger/cookie-stand-improved/actions)
<!-- - [back-end server url](http://xyz.com) (when applicable) -->
- [front-end application](https://spectacular-beijinho-02552b.netlify.app/)

### Collaborators

- Ryan Gallaway  
- Nick Mullaney  
- Ryan Eastman  

### Setup

#### How to initialize/run your application

- Run `npm i` and then `npm start` and navigate to your localhost port that was chosen by your terminal.

#### Features / Routes

- GET : `/` - homepage, summarizing information about the store
- GET : `/SalesData` - A table of sales data, randomized by Minimum Customers and Maximum Customers as well as the Average Cookie sales of the day & you can add new stores as well.

<!-- - GET : `/hello` - specific route to hit -->

#### Tests

- Run `npm test` to see tests running.

#### UMLs

![UML](./public/UML.png)

### JS Framework Comparative Analysis

#### Framework Name: Next.js

##### Research Conducted By: The Helpful Heather, The Keen Kaeden, The Resourceful Reece, The Impressive Ike

##### Overall Score and Comments

Score (Out of 10): 7.42

##### General Comments

Next has full stack capability if you wanted to build a back end out. Next is really cool with how you can set up routes with a pretty simple file structure.  No need to bring in browser router, routes, route to get them set up.  However, it was a small nightmare to figure out how to modify the config files to get that to work.

##### Pros

- Next.js has a lot of the functionality and usability that React provides, which can make it an easier transition, but there are definitely differences.
- Routes are a lot more simple than a traditional BrowserRouter, you can just use your file structure mixed with a `page.js`
- In standard React applications, they do client side rendering. Next.js does pre-rendering via server-side rendering & static site generation.

##### Cons

- Built in components were not very good or user friendly.
- The route documentation has multiple paths to how you can set it up, but it can be very trickey if you mess up your file structure and completely not work.
- Other than the route conveience I do not see a major improvement on top of React, however we only got to use it for a few days so we could be missing some cool features.

#### Ratings and Reviews

##### Documentation

Extremely short time period for us to explore the documentation during this lab period.  There was definitely some cool things we found but also some bad design with how components are used.  It almost feels as though you should just default to another component library.

##### Systems Requirements

The only core requirements we encountered was React. Deployment can still be done through vercel(creators of next),netlify, render, code sandbox.

##### Ramp-Up Projections

I think it would take a couple weeks for junior developers to be able to hit productivity with next. With some small research this framework definitely seems popular within the tech community. Most things found put it in the top 5 frameworks to learn.

##### Framework Links and Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs)
- [FreeCodeCamp Next.js Handbook](https://www.freecodecamp.org/news/the-next-js-handbook/)
- [SaaS Starter Kits](https://www.kirandev.com/saas-starter-kits/nextjs)

##### Code Demos

- [Live Running Application Example](https://nextjs.org/showcase)
- [Netflix Jobs Website: Made with Next.js](https://jobs.netflix.com/)
- [Next.js Code Repository](https://github.com/vercel/next.js/)

##### Operating Instructions

If someone were to download your repo (above), what steps do they need to take to run the application

- npm start
  - Endpoint: `/`
    - Renders homepage.
  - Endpoint: `/SalesData`
    - Renders a sales page.
