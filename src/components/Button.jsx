import React from "react";
import '../components/Button.css';

export default (props) => {

    return (
        <button
            onClick={e => props.click && props.click(e.innerHTML)}
            className={`
                button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button >
    )

}