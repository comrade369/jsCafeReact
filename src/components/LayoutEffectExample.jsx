// learning about useLayoutEffect, difference between useEffect and useLayoutEffect, createPortal, ...etc.

import React, {useLayoutEffect, useEffect} from "react";
import ButtonWithTooltip from "./ButtonWithTooltip.jsx";

function LayoutEffectExample() {


    // useLayoutEffect only used at the places, where we want to make some calculations
    // of any element, before the elements appear on the screen.
    // It helps us avoid lags and jitters in our applications.
    // useLayoutEffect(function() {
    //     console.log("I am useLayoutEffect");
    // });

    // useEffect(function() {
    //     console.log("I am useEffect");
    // });

    // return (
    //     <h1>useLayoutEffect runs before any thing reprints in the browser, and before any useEffect.</h1>
    // );

    // Example of useLayoutEffect.
    return (
        <>
            <ButtonWithTooltip
                tooltipcontent={
                    <div>
                        This tooltip does not fit above the button.
                        <br />
                        This is why it's displayed below instead!
                    </div>
                }
            >
                Hoover over me (tooltip above)
            </ButtonWithTooltip>

            <div style={{height: 50}} />

            <ButtonWithTooltip
                tooltipcontent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hoover over me (tooltip below)
            </ButtonWithTooltip>

            <div style={{height: 50}} />

            <ButtonWithTooltip
                tooltipcontent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hoover over me (tooltip below)
            </ButtonWithTooltip>

        </>
        
    );

}

export default LayoutEffectExample;