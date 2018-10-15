import React, { Component } from 'react';

import axios from 'axios';


class ListMovies extends Component {
constructor(props){
  super(props)
  this.state = {
    shows: [],
  }
}

	componentDidMount(){
  axios.get('http://api.tvmaze.com/schedule')
  .then(json => console.log(json))
}

 
	 render() {
	console.log(this.state)
 return (
<div>
 
      </div>
 )
}
}
export default ListMovies;
