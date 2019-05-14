import React from 'react';
import Pebble from './pebble';
import Toggle from '../toggle/toggle';

function PebbleComponent(props) {
    
    const infinityStoneColors = ['#266EF6', '#E429F2', '#FF8B00', '#FFD300', '#12E772'];
    const {pebbles, toggled, toggleState} = props
    return(
        <div>
            <Toggle className="toggler" toggled={toggled} toggle={toggleState} />
            <Pebble 
                height="3rem" 
                width="2rem" 
                backgroundColor={infinityStoneColors[0]}
                opacity="0.7" 
                top="1rem" 
                left="-20rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="30%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="50%"
                animationTiming="5s"
                moveIn='moveInFromLeft'
                show={pebbles[0]}
            />
            <Pebble 
                height="4rem" 
                width="3rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity=".9" 
                top="2rem" 
                left="0rem" 
                borderTopLeftRadius="30%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="100%" 
                borderBottomLeftRadius="50%"
                animationTiming="2.4s"
                moveIn='moveInFromLeft'
                show={pebbles[1]}
            />
            <Pebble 
                height="1rem" 
                width="2rem" 
                backgroundColor={infinityStoneColors[1]} 
                opacity=".5" 
                top="10rem" 
                left="-10rem" 
                borderTopLeftRadius="100%" 
                borderTopRightRadius="30%" 
                borderBottomRightRadius="70%" 
                borderBottomLeftRadius="50%"
                animationTiming="4s"
                moveIn='moveInFromLeft'
                show={pebbles[2]}
            />
            <Pebble 
                height="1rem" 
                width="1rem" 
                backgroundColor={infinityStoneColors[4]} 
                opacity="1" 
                top="17rem" 
                left="-20rem" 
                borderTopLeftRadius="160%" 
                borderTopRightRadius="80%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="160%"
                animationTiming="7s"
                moveIn='moveInFromLeft'
                show={pebbles[3]}
            />
            <Pebble 
                height="2.5rem" 
                width="1.5rem" 
                backgroundColor={infinityStoneColors[3]} 
                opacity="0.3" 
                top="20rem" 
                left="20rem" 
                borderTopLeftRadius="100%" 
                borderTopRightRadius="50%" 
                borderBottomRightRadius="140%" 
                borderBottomLeftRadius="30%"
                animationTiming="3.5s"
                moveIn='moveInFromLeft'
                show={pebbles[4]}
            />
            <Pebble 
                height="3rem" 
                width="3rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity="0.7" 
                top="1rem" 
                left="40rem" 
                borderTopLeftRadius="60%" 
                borderTopRightRadius="90%" 
                borderBottomRightRadius="100%" 
                borderBottomLeftRadius="40%"
                animationTiming="3.8s"
                show={pebbles[5]}
            />
            <Pebble 
                height="2rem" 
                width="2rem" 
                backgroundColor={infinityStoneColors[4]} 
                opacity="1.5" 
                top="30rem" 
                left="30rem" 
                borderTopLeftRadius="100%" 
                borderTopRightRadius="70%" 
                borderBottomRightRadius="70%" 
                borderBottomLeftRadius="100%"
                animationTiming="1s"
                moveIn='moveInFromLeft'
                show={pebbles[6]}
            />
            <Pebble 
                height="4rem" 
                width="4rem" 
                backgroundColor={infinityStoneColors[0]} 
                opacity="0.3" 
                top="17rem" 
                left="40rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="130%" 
                borderBottomRightRadius="60%" 
                borderBottomLeftRadius="90%"
                animationTiming="6s"
                show={pebbles[7]}
            />
            <Pebble 
                height="1.6rem" 
                width="1.2rem" 
                backgroundColor={infinityStoneColors[3]} 
                opacity="0.9" 
                top="2rem" 
                left="32rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="30%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="50%"
                animationTiming="2s"
                moveIn='moveInFromLeft'
                show={pebbles[8]}
            />
            <Pebble 
                height="1.3rem" 
                width="1.6rem" 
                backgroundColor={infinityStoneColors[1]} 
                opacity="0.8" 
                top="12rem" 
                left="28rem" 
                borderTopLeftRadius="70%" 
                borderTopRightRadius="80%" 
                borderBottomRightRadius="120%" 
                borderBottomLeftRadius="40%"
                animationTiming="3.1s"
                show={pebbles[9]}
            />
            <Pebble 
                height="1.9rem" 
                width="1.1rem" 
                backgroundColor={infinityStoneColors[3]} 
                opacity="0.5" 
                top="20rem" 
                left="12rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="30%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="50%"
                animationTiming="2.2s"
                show={pebbles[10]}
            />
            <Pebble 
                height="1rem" 
                width="1.2rem" 
                backgroundColor={infinityStoneColors[1]} 
                opacity="0.9" 
                top="25rem" 
                left="-5rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="100%" 
                borderBottomRightRadius="80%" 
                borderBottomLeftRadius="70%"
                animationTiming="4.7s"
                show={pebbles[11]}
            />
            <Pebble 
                height="2.8rem" 
                width="1.2rem" 
                backgroundColor={infinityStoneColors[4]} 
                opacity="0.3" 
                top="40rem" 
                left="-10rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="30%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="50%"
                animationTiming="1.7s"
                moveIn='moveInFromLeft'
                show={pebbles[12]}
            />
            <Pebble 
                height="1.8rem" 
                width="2rem" 
                backgroundColor={infinityStoneColors[0]} 
                opacity="0.9" 
                top="30rem" 
                left="-20rem" 
                borderTopLeftRadius="80%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="40%" 
                borderBottomLeftRadius="100%"
                animationTiming="3.7s"
                moveIn='moveInFromLeft'
                show={pebbles[13]}
            />
            <Pebble 
                height="1.7rem" 
                width="1.5rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity="0.9" 
                top="40rem" 
                left="10rem" 
                borderTopLeftRadius="80%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="40%" 
                borderBottomLeftRadius="100%"
                animationTiming="5.8s"
                show={pebbles[14]}
            />
            <Pebble 
                height="3rem" 
                width="3rem" 
                backgroundColor={infinityStoneColors[3]} 
                opacity="0.6" 
                top="5rem" 
                left="14rem" 
                borderTopLeftRadius="100%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="70%" 
                borderBottomLeftRadius="40%"
                animationTiming="2.5s"
                show={pebbles[15]}
            />
            <Pebble 
                height="3rem" 
                width="4rem" 
                backgroundColor={infinityStoneColors[1]} 
                opacity="0.8" 
                top="43rem" 
                left="28rem" 
                borderTopLeftRadius="80%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="40%" 
                borderBottomLeftRadius="100%"
                animationTiming="6s"
                moveIn='moveInFromLeft'
                show={pebbles[16]}
            />
            <Pebble 
                height="2rem" 
                width="1.3rem" 
                backgroundColor={infinityStoneColors[4]} 
                opacity="0.5" 
                top="30rem" 
                left="40rem" 
                borderTopLeftRadius="150%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="100%"
                animationTiming="5s"
                show={pebbles[17]}
            />
            <Pebble 
                height="1.3rem" 
                width="2.3rem" 
                backgroundColor={infinityStoneColors[1]} 
                opacity="0.9" 
                top="35rem" 
                left="-3rem" 
                borderTopLeftRadius="50%" 
                borderTopRightRadius="70%" 
                borderBottomRightRadius="90%" 
                borderBottomLeftRadius="110%"
                animationTiming="3.9s"
                moveIn='moveInFromLeft'
                show={pebbles[18]}
            />
            <Pebble 
                height="1.8rem" 
                width="2rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity="0.9" 
                top="18rem" 
                left="-10rem" 
                borderTopLeftRadius="80%" 
                borderTopRightRadius="60%" 
                borderBottomRightRadius="40%" 
                borderBottomLeftRadius="100%"
                animationTiming="4.2s"
                show={pebbles[19]}
            />
            <Pebble 
                height="1.2rem" 
                width="1.7rem" 
                backgroundColor={infinityStoneColors[4]} 
                opacity="0.6" 
                top="50rem" 
                left="-20rem" 
                borderTopLeftRadius="60%" 
                borderTopRightRadius="90%" 
                borderBottomRightRadius="100%" 
                borderBottomLeftRadius="100%"
                animationTiming="6.3s"
                moveIn='moveInFromLeft'
                show={pebbles[20]}
            />
            <Pebble 
                height="1.1rem" 
                width="1.9rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity="0.8" 
                top="50rem" 
                left="40rem" 
                borderTopLeftRadius="55%" 
                borderTopRightRadius="98%" 
                borderBottomRightRadius="70%" 
                borderBottomLeftRadius="48%"
                animationTiming="5s"
                moveIn='moveInFromLeft'
                show={pebbles[21]}
            />
            <Pebble 
                height=".7rem" 
                width="1.2rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity="0.8" 
                top="18rem" 
                left="3rem" 
                borderTopLeftRadius="75%" 
                borderTopRightRadius="98%" 
                borderBottomRightRadius="61%" 
                borderBottomLeftRadius="48%"
                animationTiming="4s"
                moveIn='moveInFromLeft'
                show={pebbles[22]}
            />
            <Pebble 
                height="1.7rem" 
                width="1.9rem" 
                backgroundColor={infinityStoneColors[2]} 
                opacity="0.8" 
                top="33rem" 
                left="22rem" 
                borderTopLeftRadius="55%" 
                borderTopRightRadius="98%" 
                borderBottomRightRadius="70%" 
                borderBottomLeftRadius="48%"
                animationTiming="5s"
                show={pebbles[23]}
            />
        </div>
    )
}

export default PebbleComponent;