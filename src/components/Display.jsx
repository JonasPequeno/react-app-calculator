import React from "react";
import '../components/Display.css';

export default (props) => {
    return (
        <div className="display">
            {props.value}
        </div>
    )
}