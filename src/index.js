import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import API_KEY from './config';
import SearchBar from './components/search_bar';



// Create a new component. This component should produce some HTML.
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=>{
			// console.log(videos);
			// this.setState({ videos: videos }); // Condense this using ES6
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
			</div>
		)
	}
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));