import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //Breve introduccion  a useState
    //coonst [variable, metodo para actualizarlo] = useState(valor inicial)

    const [age, setage] = useState(1);

    const birthday = () => {
        //actualizamos el state
        setage(age +1)
    }

    return (
        <div>
                <h1>
                HOLA { props.name } BIENVENIDO AL MUNDO DE LA PROGRAMACIÓN!
                </h1>
                <img src="https://i.pinimg.com/564x/65/d8/51/65d85111169ec3624489fe52e6076b6e.jpg" className="App-logo" alt="logo" />
                <h2>
                    Tu edad es de: { age }
                </h2>
                <div>
                    <button type="button" class="btn btn-outline-primary fw-bold" onClick={birthday}>
                        Cuantos años tienes
                    </button>

                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
