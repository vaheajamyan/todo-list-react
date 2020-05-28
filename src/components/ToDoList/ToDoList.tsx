import React, {FunctionComponent, useContext} from "react";
import "./ToDoList.scss";
import {ToDoContext} from "../../store/reducers/ToDoReducer";
import {ToDoItemModel} from "../../store/reducers/ToDoItemModel";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList: FunctionComponent = () => {
    const {state} = useContext(ToDoContext);

    return (
        <div className="todolist-container">
            {state.ToDoItems.length ?
                <ul className="todolist-list">
                    {state.ToDoItems
                        .filter((item: ToDoItemModel) =>
                            !state.search.length || item.task.toLowerCase().includes(state.search)
                        ).map((toDoItem: ToDoItemModel, index: number) => (
                            <ToDoItem key={index} id={toDoItem.id} task={toDoItem.task} isDone={toDoItem.isDone}/>
                        ))}
                </ul> : null
            }
        </div>
    )
};

export default ToDoList
