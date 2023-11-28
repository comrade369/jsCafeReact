
import React from "react";
import { useState, useRef } from "react";
import Tooltip from "./Tooltip.jsx";

function ButtonWithTooltip(props) {

    const {children, tooltipcontent} = props;

    // using useState to store position of button in variable.
    const [targetPositions, setPositions] = useState();

    // using useRef to get the coordinates of the button.
    const buttonRef = useRef(null);

    const handleMouseEnter = () => {
        // get positions
        const rect = buttonRef.current.getBoundingClientRect();
        setPositions({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
        });
    }

    return (
        <>
            <button
                onPointerEnter={handleMouseEnter}
                onPointerLeave={function() {
                    setPositions(null);
                }}
            >
                {children}
            </button>

            {targetPositions && <Tooltip targetPositions={targetPositions}>{tooltipcontent}</Tooltip>}
        </>
    );

}

export default ButtonWithTooltip;