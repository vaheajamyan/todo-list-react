import React from "react";
import {
    ADD_TO_DO_ITEM,
    TOGGLE_TO_DO_ITEM,
    SET_SEARCH,
    SetSearch,
    AddToDoItemAction,
    ToggleToDoItemAction,
    SetSearchAction
} from "../actions/Actions";
import {Action} from "../actions/Action";
import {ToDoState} from "./ToDoState";
import {ToDoContextModel} from "./ToDoContextModel";
import {ToDoItemModel} from "./ToDoItemModel";

export const initialState: ToDoState = {
    ToDoItems: [],
    search: "",
}

export const ToDoContext: React.Context<ToDoContextModel> = React.createContext({
    state: initialState,
    dispatch: null
})

export const AddToDoItemReducer = (state: ToDoState, action: AddToDoItemAction) => {
    return {
        ...state,
        ToDoItems: [...state.ToDoItems, action.payload.newToDoItem]
    }
}

export const SetSearchReducer = (state: ToDoState, action: SetSearchAction) => {
    return {
        ...state,
        ...action.payload
    }
}

export const ToggleToDoItemReducer = (state: ToDoState, action: ToggleToDoItemAction) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.map((toDoItem: ToDoItemModel) =>
            (toDoItem.id === action.payload.updateToDoItem)
                ? {...toDoItem, isDone: !toDoItem.isDone}
                : toDoItem)
    }
}

export function ToDoReducer
(state: ToDoState, action: Action): ToDoState {
    switch (action.type) {
        case ADD_TO_DO_ITEM:
            return AddToDoItemReducer(state, action);
        case TOGGLE_TO_DO_ITEM:
            return ToggleToDoItemReducer(state, action);
        case SET_SEARCH:
            return SetSearchReducer(state, action);
        default:
            return state;
    }
}
