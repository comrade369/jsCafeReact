import React, {useState, useEffect} from "react";

function Timer(props) {

    const {customText} = props;

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((preData) => preData + 1);
            console.log("I am running setCounter");
        }, 1000);
        console.log("Created interval with id: ", interval);

        // this is the cleanup function in react.
        return (
            () => {
                console.log("The component is unmount");
                console.log("Removing interval with id: ", interval);
                clearInterval(interval);
            }
        );
    }, []);

    // Every return statement of the Effect will run, whenever we unmount the component.
    useEffect(() => {

        return (
            () => {
                console.log("cleaning up the 2nd Effect for the custom text");
            }
        );
    }, [customText]);

    // All create useEffect with dependency array, or it will render again and again;
    useEffect(() => {
        console.log("I am run again and again");

        return (
            () => {
                console.log("Cleaning up the 3rd Effect with no dependency array");
            }
        );
    });

    // * Return statement of every Effect runs when we unmount the component.

    return (
        <>
            <span>The count is = {counter}</span>
            <br />
            <p>{customText}</p>
        </>
    );

}

export default Timer;