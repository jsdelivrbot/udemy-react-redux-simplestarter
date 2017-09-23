import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import API_KEY from './config';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// Create a new component. This component should produce some HTML.
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('avett brothers');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
			// console.log(videos);
			// this.setState({ videos: videos }); // Condense this using ES6
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce((term)=>{ this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}
				/>
			</div>
		)
	}
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));