import React, {useRef, useLayoutEffect, useState} from "react";
import { createPortal } from "react-dom";

function Tooltip(props) {

    const {children, targetPositions} = props;
    const {left, top, right, bottom} = targetPositions;

    const tooltipRef = useRef(null);

    const [tooltipHeight, setTooltipHeight] = useState(0);

    let x = 0;
    let y = 0;

    let now = performance.now();
    while (performance.now() - now < 100) {
        // Do nothing for a bit...
        // This is the render blocking code
        // This blocks code for 100 milli seconds.

    }

    if (targetPositions !== null) {
        x = left;
        y = top - tooltipHeight;

        if (y < 0) {
            y = bottom;
        }
    }

    // we use useLayoutEffect instead of useEffect to avoid jitters.
    // Because useEffect runs after renders.
    // useEffect runs after the component mount.
    // but useLayoutEffect runs before the component mount.
    useLayoutEffect(function() {
        const {height} = tooltipRef.current.getBoundingClientRef();
        console.log(height);
        setTooltipHeight(height);
    });

    const toolTipStyle = {
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
    }


    return (
        <>
            {
                createPortal(<div style={toolTipStyle}>{children}</div>, document.body)
            }
            
        </>
    );
}

export default Tooltip;