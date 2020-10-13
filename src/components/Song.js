import React from 'react';

export default function Song(props){
    return(
        <div className='song-list'>
            <li><a href={props.song.link[1].attributes.href}>{props.song["im:name"].label}</a> by {props.song["im:artist"].label}
            <p><img src={props.song['im:image'][0].label}/></p></li>
        </div>
    )
}