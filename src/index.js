import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
const API_KEY = 'AIzaSyDBM39aVfUOMJnytt3djfPezHANHxKYOx8';

// Create a new component. This component
// produce some HTML
class App extends Component {        //const vs. var   const = constantly // () =>  == function () 
    constructor(props) {
        super(props);
    
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});  //this.setState({videos: videos}) ES6 Syntax
        });
    }

    render () {   
    return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
    </div>      //JSX can not be interpreted by the browser -> JSX is turned into HTML babeljs.io
    );
    }
}

//Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));