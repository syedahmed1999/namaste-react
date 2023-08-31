# What is Emmet

Emmet is basically a plugin for editors that improves the HTML and CSS workflows. It can also be used with the programming languages.
It is a CSS like expression that can be parsed dynamically and produces some output
For Example: if we type `div.class#id` it will be parsed as <div class='class' id='id'></div>


# Difference between a library and a framework

Library can be used in some specific part of a project. It is generally light-weight as compared to the framework. 
It focuses on doing some specific task and more libraries may be need to complement the used library

Framwork itself is the project. It has in-built functionalites and generally does not rely on third party libraries for specific tasks


# What is CDN? And why do we use it?

CDN stands for content delivery network and it is basically a piece of code or a libaray that is hosted somewhere. 
The purpose of CDN includes
    -> Caching
    -> Edge Servers
    -> Routing and load balancing
    -> Reduced latency
    -> Global reach


# Why is React known as React?

React is known as  `React` because of the following points
    -> React is a javascript library for building user interfaces.
    -> Its concept of reacting to changes in data and efficiently updating the user interface in response
    -> Its built arount the idea of VirtualDOM
    -> Updating DOM is the most expensive task and React main idea revolves around making it more efficient


# What is cross-origin in the script tag?

When the web page is hosted on some domain and it is attempting get resources from another domain then the browser restricts it
known as CORS. In order to allow the web page to get resources from another page hosted on a different domain, we use cross-origin


# What is the difference between React and ReactDOM?

They are both libraries developed by Facebook in order to facilitate the developers in building the web pages

    -> React
        React is the core library that provides the tools and components for building user interfaces using a component-based architecture.

    -> ReactDOM
        ReactDOM on the other hand is the bridge between react and the browser. Whatever the react produces, it will be rendered with the 
        help of ReactDOM


# What is the difference between react.development.js and react.production.js files via CDN

These are the different versions provided by Facebook. It is just like when we use different keys for development and production builts
    -> Prod:
        It has smaller bundle size
        No debugging checkes
        Optimized version of Dev
    -> Dev:
        Debugging is really easy
        Error messages
        Slow performance


# What are async and defer?

Async:
    It allows the script to execute as soon as it is loaded, without blocking the other elements on the page

Defer:
    It also loads the script without blocking the other elements on the page but it is only executed after all the content is loaded