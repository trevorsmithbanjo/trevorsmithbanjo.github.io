import React from "react";

function Wrapper(props) {
    return (
        <div className="container mx-auto">
            {props.children}
        </div>
    )
}

export default Wrapper;