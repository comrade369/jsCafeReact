// learning react elements, functional components, conditional rendering, fragments, javascript in jsx ...etc.

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Element Rendering.
const reactElement0 = <>This is a React Element</>;
// root.render(reactElement0);

// Functional Component Rendering.
const FunctionalComponent = () => {
    return (
        <>
            This is a Functional Component 
        </>
    );
}
// root.render(FunctionalComponent());

// Conditional Rendering.
const isMorning = false;
const reactElement1 = <p>It is morning,<strong> react Element</strong></p>;
const reactElement2 = <p>It is Night,<strong> Another react Element</strong></p>
const conditionalRender = isMorning ? reactElement1 : reactElement2;
// root.render(conditionalRender);

// Javascript in jsx.
const myName = window.prompt("Enter your name:");
const reactElement = <h1>Your name is {myName}, we write javascript in jsx using curly brackets.</h1>
// root.render(reactElement);

// Attributes in jsx.
const attribute = <button onClick={() => handleClick(myName)}>Click here to alert message.</button>
const handleClick = (myName) => {
    return window.alert("You Clicked button, your name is " + myName);
}

// All react elements in on functional component.
function AllElementsComponents() {
    return (
        <>
            {reactElement0}
            {conditionalRender}
            {reactElement}
            {FunctionalComponent()} {" "}
            {attribute}
        </>
    );
}
root.render(AllElementsComponents());

