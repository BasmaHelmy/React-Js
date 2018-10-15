import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {
	state={
		searchText:'',
		amount:15,
		apiUrl:'https://www.tvmaze.com/api',
		apiKey:'896-QWywyNH6JGcZFu5exlRbamIT1meE',
		movies:[]
	};

	onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ movies: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ movies: res.data.hits }))
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
  				fullwidth={true}
  			/>
  			<br/>
 		<SelectField
 			name="amount"
 			floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          >
           
            <MenuItem value={5} primaryText="5"/>
            <MenuItem value={10} primaryText="10"/>
            <MenuItem value={15} primaryText="15"/>
            <MenuItem value={30} primaryText="30"/>
            <MenuItem value={50} primaryText="50"/>
          </SelectField>
          <br/>

	  	</div>
	  )
	}
}

export default Search;