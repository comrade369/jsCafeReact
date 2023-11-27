
import React, {useEffect} from "react";

function Text(props) {

    const {children, externalData} = props;

    // This Effect listens to props, and accepts functions as dependencies as well.
    useEffect(() => {
        console.log("External data changed to ", externalData);
    }, [externalData]);

    return (
        <div>
            {externalData}
        </div>
    );
}

export default Text;