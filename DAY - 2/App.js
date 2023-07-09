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
