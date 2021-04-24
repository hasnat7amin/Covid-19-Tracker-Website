import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import './SelectData.css';
function SelectData() {
    return (
        <div className="container">
            <div className="box1">
                <Link to="/country" className="link1">Countries statistics</Link>
            </div>
            <div className="box1">
                <Link to="/" className="link1">World statistics</Link>
            </div>
        </div>
    )
}

export default SelectData


