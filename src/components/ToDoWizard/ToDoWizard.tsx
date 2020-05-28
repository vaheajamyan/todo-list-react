import './ToDoWizard.scss';
import React, {FunctionComponent, useReducer} from "react";
import {initialState, ToDoContext, ToDoReducer} from "../../store/reducers/ToDoReducer";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";

const ToWizard: FunctionComponent = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState);

    return (
        <ToDoContext.Provider value={{state, dispatch}}>
            <div className="container">
                <h1>
                    Todo List
                </h1>
                <ToDoInput/>
                <ToDoList/>
            </div>
        </ToDoContext.Provider>
    )
};

export default ToWizard;
