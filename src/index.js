import React from 'react';
import ReactDOM from 'react-dom';

//create new component that should produce some html.

const App = () => { //the => character means 'function' in JSX
    return <div>Hi!</div>
}


//put this component's html on the dom to be seen by users.
ReactDOM.render(<App />, document.querySelector('.container'));