import React from 'react';
import './tonyStarkHeart1.css';

function TonyStarkHeart(props) {
    const {toggled} = props;
    const heartStyle = ["circle"];

    if(toggled) heartStyle.push("redHeart");
    return (
        <div class="view">
            <div class="tooltip">
                <span class="tooltiptext">Another proof that Tony Stark has a heart</span>
                <div class="plane main">
                    <div className={heartStyle.join(" ")}></div>
                    <div className={heartStyle.join(" ")}></div>
                    <div className={heartStyle.join(" ")}></div>
                    <div className={heartStyle.join(" ")}></div>
                    <div className={heartStyle.join(" ")}></div>
                    <div className={heartStyle.join(" ")}></div>
                </div>
            </div>
        </div>
    )
}

export default TonyStarkHeart;