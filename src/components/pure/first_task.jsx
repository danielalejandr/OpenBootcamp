import React from 'react';
import PropTypes from 'prop-types';
import { FirstTask } from '../../models/first.task.class';


const FirstTaskComponent = ({ task }) => {
    return (
        <div>
            <h3>
                Nombre: { task.name }
            </h3>
            <h3>
                Apellido: { task.surname }
            </h3>
            <h3>
                Email: { task.email }
            </h3>
            <h5>
                Contact: { task.connected ? 'CONTACTO EN LÍNEA':'CONTACTO NO DISPONIBLE' }
            </h5>
        </div>
    );
};


FirstTaskComponent.propTypes = {
    task: PropTypes.instanceOf(FirstTask)
};


export default FirstTaskComponent;
