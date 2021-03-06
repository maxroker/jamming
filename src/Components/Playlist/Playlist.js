import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }  

  handleNameChange(event) {
    //event.preventDefault();
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input 
          defaultValue={this.props.playlistName} 
          onChange={this.handleNameChange} />
        <TrackList 
          tracks={this.props.playlist} 
          onRemove={this.props.onRemove} 
          isRemoval={true}
          onNameChange={this.props.onNameChange} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
