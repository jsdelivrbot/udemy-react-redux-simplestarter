import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		// This is how we initialize state in a class based component
		super(props);

		this.state = { term: 'Starting value' };
	}

	render(){
		return(
			<div>
				<input
					value = {this.state.term}
					onChange={event => this.setState({ term: event.target.value })}
				/>
				{/*Value of the input: {this.state.term}*/}
			</div>
		);
	}
}

export default SearchBar;