import React, { useState } from 'react';

function BulletPoint(props) {

    const [isclicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked((prevValue) => {
            return (!prevValue)
        })
    }

    return (
        <ul>
            <li onClick={handleClick} style={{ textDecoration: isclicked && "line-through" }} >{props.bullet}</li>
        </ul>
    )
}

export default BulletPoint;


//Function returns User's entry in as a bullet point.

