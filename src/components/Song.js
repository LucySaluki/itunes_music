import React from 'react';

export default function Song(props){
    return(
        <div>
            <li>{props.song["im:name"].label} by {props.song["im:artist"].label} </li>
        </div>
    )
}