import React from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from '../pure/task';


const TaskListComponent = () => {


    const defaultTask = new Task('hola com estaas', 'Default description', true, LEVELS.URGENT);

    return (
        <div>
            <div>
                <h1>
                Your Taks:
                </h1>
            </div>
            {/*TODO: Aplicar un FOR/MAP para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
