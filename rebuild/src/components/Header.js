import React from "react";

function Header({ menu, header }) {
    return (
        <div className={menu}>
            <h1>{header}</h1>
        </div>
    )
}

export default Header;