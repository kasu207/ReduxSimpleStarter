import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };  //state -- class Based component standard |state wird nur im Construtor gesetzt
    }
    render() {    // render unbedingt notwendig bei Class based components  vs function based components
    return (
    <div>    
        <input
         value={this.state.term}
         onChange={(event) => this.setState({ term: event.target.value }) }/>
    </div>
    );
}
}


export default SearchBar;