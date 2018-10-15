import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import ListMovies from './components/list-movies/ListMovies';
import './App.css';

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
    		<div>
    		  <NavBar />
              <Search />
              <ListMovies />
    		 
    		</div> 
    	</MuiThemeProvider>
    );
  }
}

export default App;
