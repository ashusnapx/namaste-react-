import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement( "h1", {
    id: "title"
}, "This is a heading with size h1" );

const heading2 = React.createElement( "h2", {
    id: "container"
}, "This is a heading with size h2" );

const container = React.createElement( "div", {
    id: "container"
}, [ heading, heading2 ] );

const root = document.getElementById( "root" );
ReactDOM.render( container, root );

/* Reasons why i should use parcel : 
1. HMR (Hot module reloading)
2. File watcher algorithm written in C++
3. bundling
4. minify
5. cleaning your code(like removing console.log()'s, etc)
6. development and production build
7. super fast build algorithm
8. image optimization
9. caching while development
10. compression
11. also makes it compatible for old browsers
12. HTTPS on dev
13. port number
14. consistent hashing algorithms
15. zero config bundler

*/