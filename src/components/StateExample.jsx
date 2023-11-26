// learning about useState, state variables, 


import React, {useState} from "react";
import Button from "./Button.jsx";

function StateExample() {


    const [message, setMessage] = useState("state variable message");

    const changeMessage = () => {
        // changing the message variable.
        // return message = "changing message variable";
        // Not changing in the jsx, because it is normal variable, and then use state variables.

        // Changing the state variable message, using setMessage function.
        // setMessage("changing message variable"); // this is changing in the jsx.

        // another way is using callback in setMessage function.
        setMessage((previousData) => {
            // this works:
            // previousData = "changing message variable";
            // return previousData; 

            // this also works:
            return "changing message variable";

            // we use callbacks to get previous data from the state variable.
        })
    }

    return (
        <>
            <p>{message}</p>
            <Button onClick={changeMessage}>change message</Button>
            
        </>
    );
}

export default StateExample;