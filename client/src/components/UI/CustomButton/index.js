import React from "react";
import { Link } from 'react-router-dom';

import "./style.scss";

function CustomButton(props) {
    return (
        <Link to={props.to} style={{ textDecoration: 'none', color: 'black' }}>
            <button>{props.children}</button>
        </Link>
    )
}

export default CustomButton;