import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.SearchResults = [{
      id: 1,
      name: 'whole lotta love',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}, {
      id: 2,
      name: 'imigrant song',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}, {
      id: 3,
      name: 'rock \'n\' roll',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}, {
      id: 4,
      name: 'babe, I\'m gonna leave you',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}];
    this.state.playlistTracks = [{
      id: 5,
      name: 'moby dick',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}, {
      id: 6,
      name: 'lemon song',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}, {
      id: 7,
      name: 'double d',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}, {
      id: 8,
      name: 'babe, I\'m gonna leave you',
      artist: 'led zeppelin',
      album: 'led zeppelin I'}];
    this.state.playlistName = 'Playlist';

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    };

  addTrack(track) {
    if (this.state.playlistTracks.every(savedTrack => savedTrack.id !== track.id)) {   
      this.state.playlistTracks.push(track);
      //console.log(this.state.playlistTracks);
      this.setState(this.state.playlistTracks);
    }
  }

  removeTrack(track) {
    console.log(track.id);
    this.state.playlistTracks.forEach((savedTrack, index) => {
      if (savedTrack.id === track.id) {
        delete this.state.playlistTracks[index];
        this.setState(this.state.playlistTracks);
      }
    })
  }

  updatePlaylistName(name) {
    //console.log(name);
    this.setState({playlistName: name});
    setTimeout(() => console.log(this.state.playlistName), 0);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">

            <SearchResults 
              searchResults={this.state.SearchResults} 
              onAdd={this.addTrack} />
            <Playlist 
              playlist={this.state.playlistTracks} 
              onRemove={this.removeTrack} 
              playlistName={this.state.playlistName}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
