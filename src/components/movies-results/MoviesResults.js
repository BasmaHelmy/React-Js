import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class MoviesResults extends Component {
	render() {
		let showListContent;
		 const { shows } = this.props;
		if(shows){
			showListContent = (
				<GridList cols={3}>
					{shows.map(shws => (
						<GridTile>
							title={shws.tags}
							key={shws.id}
							subtitle={
								<span>
								 by<strong>{shws.user}</strong>
								</span>
							}
							actionIcon={
								<IconButton>
								  <ZoomIn color="white" />
								</IconButton>

							}
							>

							<img src={shws.largeShowURL} />

						</GridTile>

						))}
				</GridList>
				)
		}else{
		showListContent=null;

		}
		return (
          <div>
 			{showListContent}
          </div>

		)
	}
}
MoviesResults.PropTypes ={
	shows: PropTypes.array.isRequired

}
export default MoviesResults;