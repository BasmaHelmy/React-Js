import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';


class Search extends Component {
	constructor(props){
  super(props)
  this.state = {
   searchText:'',
    apiUrl:'http://api.tvmaze.com/schedule',
    apiKey:'896-QWywyNH6JGcZFu5exlRbamIT1meE',
    show:[],
  }
}


	onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ show: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText}`
          )
          .then(res => this.setState({ show: res.data.show }))
          .catch(err => console.log(err));
      }
    });
  };


	render() {
		console.log(this.state)
	  return (
	  	<div>
  			<TextField
  				name="searchText"
  				value={this.state.searchText}
  				onChange={this.onTextChange}
  				floatingLabelText="Search For Movies"
  				
  			/>
  			<br/>
 	
	  	</div>
	  )
	}
}

export default Search;