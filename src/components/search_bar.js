import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		// This is how we initialize state in a class based component
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render(){
		return(
			<div className="search-bar">
				<input
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

export default SearchBar;