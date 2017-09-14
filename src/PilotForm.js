import React, { Component } from 'react';

class PilotForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
        };

    }
    //functions
    handleNameChange(event) {

        this.setState({
            name: event.target.value,
        });
    }

    render() {
        return (
            <div className="input-box">
            <input onChange={(event) => this.handleNameChange(event)} name="name" type="text"
              value={this.state.name} placeholder="Enter Your Name"/>
              <h1> Welcome, Intergalactic Space Officer {this.state.name}</h1>
            </div>
        );
    };
}

export default PilotForm;