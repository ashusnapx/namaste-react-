import React from "react";
import { ReactDOM } from "react-dom/client";

const heading = React.createElement( "h1", {
    id: "title"
}, "this is heading with size h1" );
/* 
same as <h1 id="root">this is heading with size h1</h1>
*/

const heading2 = React.createElement( "h2", {
    id: "container"
}, "this is heading with size h2" );

const conatiner = React.createElement( "div", {
    id: "container"
}, [ heading, heading2 ] );

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render( [ heading, heading2 ] );