import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; //if it's code from a file we wrote, we have to make a reference to the file folder and file name.  extention not required.

const API_KEY = 'AIzaSyCIfM31_jqKfzx50HuN7j9_6TuggCJYYG8';

//create new component that should produce some html.

const App = () => { //the => character means 'function' in JSX
    return ( //in JSX, add the parenthesis if you'd like to wrap a blob of code.
        <div>
        <SearchBar />
    </div>
    );
}


//put this component's html on the dom to be seen by users.
ReactDOM.render(<App />, document.querySelector('.container'));