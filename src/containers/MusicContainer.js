import React, {Component} from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';

export default class MusicContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs:[],
            selectedSong: null

        };
        this.handleSongSelect=this.handleSongSelect.bind(this);
    }

    componentDidMount(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => this.setState({songs: data.feed.entry}))
        .catch(err => console.error);  
    }

    handleSongSelect(id){
        const selectedSong=this.state.songs.find(song => song.id.attributes['im:id'] ===id);
        this.setState({selectedSong: selectedSong});
    }
    
    render(){
        return (
        <div>
            <h2>iTunes Top 20 Charts</h2>
            <SongList songs={this.state.songs} onSongSelect={this.handleSongSelect}/>
            {/* <Song song={this.state.selectedSong} /> */}
        </div>
        );
    }
}
