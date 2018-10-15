import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
//import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
//import MoviesResults from '../movies-results/MoviesResults';


class Search extends Component {
	state={
		searchText:'',
		apiUrl:'http://api.tvmaze.com/search/shows',
		apiKey:'896-QWywyNH6JGcZFu5exlRbamIT1meE',
		shows:[]
	};

	 onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ shows: [] });
      } else {
        axios
          .get(
            `http://api.tvmaze.com/search/shows?q=${this.searchText}`
          )
          .then(res => this.setState({ shows: res.data.show }))
          .catch(err => console.log(err));
      }
    });
  };


	  render() {
    console.log(this.state.shows);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Movies"
          fullWidth={true}
        />
        <br />
      
     

      </div>
    );
  }

}
export default Search;