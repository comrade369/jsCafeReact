
import React from "react";

function Text(props) {

    console.log(props);
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    );
}

export default Text;