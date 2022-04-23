import React from 'react'
import { Link } from "react-router-dom";

const NavCode = ({c_topic, mode}) => {
    return (
        <Link to="/" className={`list-group-item list-group-item-action list-group-item-${mode}`} aria-current="true">{c_topic}</Link>
    )
}

export default NavCode