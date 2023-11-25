// learning about Props, children, export, import, optional chain, destructer ...etc.

import React from "react";
import Button from "./components/Button.jsx";

function App() {

    // console.log(Button());

    const handleParentClick = () => {
        console.log("This is clicked from parent component");
    }

    return (
        <>
            <h1>App Component</h1>
            <Button 
                data={{a: {g: {f: "d"}}}}
                onClick={handleParentClick}>Click me</Button>
        </>
    );
}

export default App;