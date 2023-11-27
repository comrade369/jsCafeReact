// learning about useEffect, dependency array with empty or state variables or props, use case of useEffect,
// toggle component, setInterval in useEffect, cleanup function, and memory leaks.

import React from "react";
import { useState, useEffect } from "react";
// import Text from "./Text.jsx";
import Timer from "./Timer.jsx";

function EffectExample() {

    // const [data1, setData1] = useState(0);
    
    // const [data2, setData2] = useState(0);

    // These Effects listen to state variables.
    // useEffect(() => {
    //     console.log("Data1 printed");
    // }, [data1]);

    // useEffect(() => {
    //     console.log("Data2 printed");
    // }, [data2]);

    // return (
    //     <>
    //         <Text externalData={data1}></Text>
    //         <button onClick={() => setData1((preData) => preData + 1)}>change data1</button> <br />

    //         <Text externalData={data2}></Text>
    //         <button
    //             onClick={() => setData2((preData) => preData + 1)}
    //         >change data2</button>
    //     </>
    // );

    // use case for useEffect hook

    // const [counter, setCounter] = useState(0);

    // // make the counter start at mount or load.
    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter((preData) => preData + 1);
    //     }, 1000);
    // }, []);

    // return (
    //     <>
    //         <span>The count is = {counter}</span>
    //     </>
    // );
    //  there is a catch in this.

    const [timer, toggleTimer] = useState(true);

    const toggleTimerFunc = () => {
        toggleTimer((preData) => !preData);
    }

    return (
        <>
            {timer && <Timer customText="This is the timer"/>}
            <br />
            <button onClick={toggleTimerFunc}>Toggle Timer</button>

        </>
    );
    // when we toggle the timer, but setInterval function still runs.
    // This indicates memory leaks.
    // This is because we not add clean up functions.

    // CleanUp function ==> if the component unmounts the cleanup function runs, for every useEffect.
    // whether it has empty dependency array, or some props init.
    // we write cleanup function components useEffect hook using return statement.

}

export default EffectExample;