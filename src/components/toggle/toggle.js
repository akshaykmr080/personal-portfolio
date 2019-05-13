import React from 'react';
import './toggle.css';

function Toggle(props) {

    const bodyStyle = ["toggle-body"];
    const btnStyle = ["toggle-btn"];

    if(props.toggled) {
        bodyStyle.push("toggle-body--on");
        btnStyle.push("toggle-btn--on");
    }

    return (
    
        <div className={bodyStyle.join(" ")}>
            <div className={btnStyle.join(" ")} onClick={props.toggle}></div>
        </div>
    
    )
}

export default Toggle;