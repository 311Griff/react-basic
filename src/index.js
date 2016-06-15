import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; //if it's from a library, we just need to reference the library name after from.
import SearchBar from './components/search_bar'; //if it's code from a file we wrote, we have to make a reference to the file folder and file name.  extention not required.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCIfM31_jqKfzx50HuN7j9_6TuggCJYYG8';

//using the youtube search class, send an object of parameters and then a callback function
YTSearch({key: API_KEY, term: 'savvy nomad'}, function(data){
});

//create new component that should produce some html.

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('savvy nomad');
    }

    videoSearch(term) {
        //using the youtube search class, send an object of parameters and then a callback function
        //this.setState({ videos });// in es6 only, if the key and value are the same, you can use just one variable name in the object callback
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });

    }

    render()
    {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 600); //debounce is a lodash function that throttles the speed of user input search bar
        return ( //in JSX, add the parenthesis if you'd like to wrap a blob of code.
            <div>
                <SearchBar
                    onSearchTermChange = {videoSearch}
                />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
                    videos = {this.state.videos} />
            </div>
        );
    }
}


//put this component's html on the dom to be seen by users.
ReactDOM.render(<App />, document.querySelector('.container'));


//downwards data flow (DDF): most parent component in the app should be responsible for fetching data.