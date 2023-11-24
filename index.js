// Creating elements using javascript

// const root = document.getElementById("root");

// const p = document.createElement("p");
// p.innerText = "Hello, World from javascript";

// root.appendChild(p);

// Creating elements using react.
const p = React.createElement("p", {}, "I am a child element");
const strong = React.createElement("strong", {}, "I am a another child element");

const div = React.createElement("div", {className: "text-div"}, ["Hello, World from React", p, strong]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);