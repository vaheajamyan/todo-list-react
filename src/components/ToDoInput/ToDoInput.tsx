import React, {FunctionComponent, useContext, useState} from "react";
import "./ToDoInput.scss";
import {ToDoContext} from "../../store/reducers/ToDoReducer";
import {AddToDoItem, SetSearch} from "../../store/actions/Actions";

const ToDoInput: FunctionComponent = () => {
    const [inputValue, updateInputValue] = useState("");
    const {dispatch} = useContext(ToDoContext);

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        updateInputValue(e.target.value);
        dispatch(SetSearch(e.target.value.toLowerCase()))
    }

    function addNewToDoItem() {
        if (inputValue) {
            dispatch(AddToDoItem(inputValue));
            updateInputValue("");
        }
    }

    function handleEnterButton(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault();
            addNewToDoItem();
            dispatch(SetSearch(''));
        }
    }

    return (
        <div className="to-do-input">
            <div className="to-do-input-inputs">
                <input
                    className="to-do-input-value"
                    placeholder="Add new item"
                    type="text"
                    value={inputValue}
                    onChange={handleEditInputValue}
                    onKeyDown={handleEnterButton}
                />
                <button
                    className="to-do-input=button"
                    onClick={addNewToDoItem}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default ToDoInput;
