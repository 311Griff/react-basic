import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //if it's code from a file we wrote, we have to make a reference to the file folder and file name.  extention not required.
import VideoList from './components/video_list';


const API_KEY = 'AIzaSyCIfM31_jqKfzx50HuN7j9_6TuggCJYYG8';

//using the youtube search class, send an object of parameters and then a callback function
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

//create new component that should produce some html.

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos:[]
        }

        //using the youtube search class, send an object of parameters and then a callback function
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            //this.setState({ videos: videos })
            this.setState({ videos });// in es6 only
        });

    }

    render()
    {
        return ( //in JSX, add the parenthesis if you'd like to wrap a blob of code.
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


//put this component's html on the dom to be seen by users.
ReactDOM.render(<App />, document.querySelector('.container'));


//downwards data flow (DDF): most parent component in the app should be responsible for fetching data.