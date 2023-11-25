// learning about rendering items in list, map function, importance of key ...etc.

import React from "react";
import Text from "./components/Text.jsx";


function App() {

    const data = [
        {id: 1, text: "javascript"},
        {id: 2, text: "python"},
        {id: 3, text: "java"},
        {id: 4, text: "C/C++"},
        {id: 5, text: "HTML/CSS"},
    ]

    return (
        // <Text>
        //     {data[0].text}
        // </Text>
        <>
            {
                data.map((item) => {
                    return (
                        <Text key={item.id}>{item.text}</Text>
                    );
                })
            }
        </>
    );
}

export default App;