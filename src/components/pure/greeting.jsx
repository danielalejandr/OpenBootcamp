import React, { Component } from 'react';
import propTypes from "prop-types";

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 1
        }
    }
    render() {
        return (
            <div>
                <h1>
                HOLA {this.props.name} BIENVENIDO AL MUNDO DE LA PROGRAMACION!
                </h1>
                <h2>
                    tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button type="button" class="btn btn-outline-primary fw-bold" onClick={this.birthday}>
                        Cuantos años tienes
                    </button>
                </div>
            </div>
        );
    }
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: propTypes.string
};


export default Greeting;
