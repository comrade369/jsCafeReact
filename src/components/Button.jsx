import React from "react";

function Button(props) {

    console.log(props);
    const {children, onClick, data} = props;

    const handleClick = () => {
        // console.log("This is clicked from child component");
        onClick?.(); // ?. is optional chain.
    }

    return (
        <button onClick={handleClick}>{children}+{data?.a?.b?.c}</button>
    );
}

export default Button;