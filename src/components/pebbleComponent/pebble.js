import React from 'react';
import './pebble.css';

function Pebble(props) {

    const {
        height, 
        width, 
        backgroundColor, 
        opacity,
        top, 
        left, 
        borderTopLeftRadius, 
        borderTopRightRadius, 
        borderBottomRightRadius, 
        borderBottomLeftRadius,
        animationTiming,
        moveIn,
        show
    } = props;

    console.log(show)
    const showStyle = ['toggle']
    if(show === 1) {
        showStyle.push("toggle-on")
    }

    const style = moveIn === 'moveInFromLeft' ? {
        animation: 'moveFromLeft 1s linear'
    } : {
        animation: 'moveFromRight 1s linear'
    }
      
    const rockStyle = {
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        opacity: opacity,
        position: 'absolute',
        top: top,
        left: left,
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        animation: `rotateAnim ${animationTiming} linear infinite`, 
        boxShadow: `0 0px 20px ${backgroundColor}, inset 0 10px 30px ${backgroundColor}`
    }

    return (
        <div className="wrapper">
            <div className={showStyle.join(" ")}>
                <div style={style}>
                    <div style={rockStyle}>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Pebble;