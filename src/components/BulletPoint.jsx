import React, { useState } from 'react';
import trash_can from '../assets/trash_can.png';

function BulletPoint(props) {

    //declaration of states and state functions.
    const [isclicked, setIsClicked] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);


    //Functions to handle various events
    function handleClick() {
        setIsClicked((prevValue) => {
            return (!prevValue)
        })
    }

    function hovering() {
        setMouseOver(true);
        console.log(mouseOver)
    }

    function notHovering() {
        setMouseOver(false);
    }


    return (
        <div className='bulletItem' >
            <div onMouseOver={hovering} onMouseOut={notHovering} >
                <ul>
                    <li onClick={handleClick} style={{ textDecoration: isclicked && "line-through" }} >
                        {props.bullet}
                    </li>
                </ul>
                <img
                    onClick={() => {
                        props.delete(props.targetId);
                    }}
                    src={trash_can} alt="trash can icon"
                    className='bulletItemImage'
                />
            </div>

        </div>
    )
}

export default BulletPoint;


//Function returns User's entry in as a bullet point.

