import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// default javascript 
const JSP = React.createElement("p", {className: "text-div"}, "Hello, from javascript");

// default jsx (javascript xml)
const JSXP = <p>Hello, from jsx</p>;

const JSDiv = React.createElement("div", {}, [JSP, JSXP]);

root.render(JSDiv);

// npm run serve -- to run app
