import "./ToDoItem.scss";
import React, {FunctionComponent, useContext} from "react";
import {ToDoItemModel} from "../../store/reducers/ToDoItemModel";
import {ToDoContext} from "../../store/reducers/ToDoReducer";
import {ToggleToDoItem} from "../../store/actions/Actions";

const ToDoItem: FunctionComponent<ToDoItemModel> = (toDoItem: ToDoItemModel) => {
    const {dispatch} = useContext(ToDoContext);

    function DispatchToggleToDoItem() {
        dispatch(ToggleToDoItem(toDoItem.id));
    }

    return (
        <li className="todo-item">
            <div>
                <form onSubmit={DispatchToggleToDoItem}>
                    <label
                        className={`todo-item-label ${toDoItem.isDone ? "todo-item-done" : 'todo-item-active'}`}
                    >
                        <input
                            type="checkbox"
                            checked={toDoItem.isDone}
                            onChange={DispatchToggleToDoItem}
                        />
                        {toDoItem.task}
                    </label>
                </form>
            </div>
        </li>
    )
}

export default ToDoItem;
