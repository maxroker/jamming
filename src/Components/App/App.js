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
      album: 'led zeppelin I',
      isRemoval: true }, {
      id: 2,
      name: 'imigrant song',
      artist: 'led zeppelin',
      album: 'led zeppelin I',
      isRemoval: false }, {
      id: 3,
      name: 'rock \'n\' roll',
      artist: 'led zeppelin',
      album: 'led zeppelin I',
      isRemoval: false }, {
      id: 4,
      name: 'babe, I\'m gonna leave you',
      artist: 'led zeppelin',
      album: 'led zeppelin I',
      isRemoval: false }]
    };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">

            <SearchResults searchResults={this.state.SearchResults} />
            <Playlist playlist={this.state.SearchResults} />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
