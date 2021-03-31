import React from "react";

function Container(props) {
    return (
        <div className="w-screen h-full p-4 bg-gradient-to-b from-sunglow-500 via-royalblue-300 to-tomato-100">
            {props.children}
        </div>
    )
}

export default Container;