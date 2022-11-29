import React from 'react'
import { FirstTask } from "../../models/first.task.class";
import { LEVELS } from '../../models/levels.enum';
import FirstTaskComponent from '../pure/first_task';

const ListTask = () => {
    
    
    const defaultTask = new FirstTask('DANIEL', 'REALPE', false, LEVELS.EMAIL);

    return (
        <div>
            <div>
                <h1>
                YOUR CONTACT:
                </h1>
            </div>
            {/*TODO: Aplicar un FOR/MAP para renderizar una lista*/}
            <FirstTaskComponent task={defaultTask}></FirstTaskComponent>
        </div>
    );
}

export default ListTask;
