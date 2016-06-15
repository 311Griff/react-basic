import React, {Component} from 'react'; // same as const Component = React.Component.  the reference in the {} is a class we want to access from the React library.


//JSX function...'functional component'
/*const SearchBar = () => {
    return <input />;
};*/
//create event handler, pass handler to element to monitor

/* method to check if input is in the search bar, this is the way to write it as a separate event, but you can also include the code inside
 the curly object brackets using the => notation in jsx.
 */
/*onInputChange(event) {
 console.log(event.target.value); //getting the changes in the input field and throwing it on the console
 }*/

//state: whenever we change our state, the component instantly re-renders along with any children contained in the component.

class SearchBar extends Component {
    constructor(props) {
        super (props); //calling the parent class (OOP)

        this.state = { term: ''};  //create a new object and assign to this.state - creates state (required in all classes)
    }

//pass a condition to the original state object, use setState

    render() {
        return (
            <div className = "search-bar">
                <label htmlFor="input">Search: </label>
                <input
                    value = {this.state.term}
                    onChange = {event =>  this.onInputChange(event.target.value)}/>
            </div>
         );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}


export default SearchBar; //exports SearchBar class and its constructor to be used by other files