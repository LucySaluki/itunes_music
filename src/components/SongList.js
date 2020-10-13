import React from 'react';
import Song from './Song';

export default function SongList(props){

    const songNodes = props.songs.map(song => {
        return <Song song={song} key = {song.id.attributes['im:id']}></Song>
    });

    return (
        <div>
            <ol>
                {songNodes}
            </ol>
        </div>
    )
}