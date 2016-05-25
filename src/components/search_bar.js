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



//es6 class based component...
//define new class and give it access to all of added functionality in react.Component
//defines method on the class  ... ALL React classes have a render method
//return JSX
//all Class based functions have constructors
//first and only function called automatically when the class is called, reserved for doing setup in our class, such as initializing
//variables and state

class SearchBar extends Component {
    constructor(props) {
        super (props); //calling the parent class (OOP)

        this.state = { term: ''};  //create a new object and assign to this.state - creates state (required in all classes)
    }

//pass a condition to the original state object, use setState
    render() {
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange = {event =>  this.setState({ term: event.target.value })}/>
            </div>
         );
    }

}



export default SearchBar; //exports SearchBar to be used by other files