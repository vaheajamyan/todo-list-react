import {Action} from "./Action";
import {ToDoItemModel} from "../reducers/ToDoItemModel";

export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const TOGGLE_TO_DO_ITEM = 'TOGGLE_TO_DO_ITEM';
export const SET_SEARCH = 'SET_SEARCH';

let nextToDoId = 0;

export interface AddToDoItemAction extends Action {
    payload: {
        newToDoItem: ToDoItemModel;
    }
}

export interface AddToDoItemAction extends Action {
    payload: {
        newToDoItem: ToDoItemModel;
    }
}

export interface SetSearchAction extends Action {
    payload: {
        search: string;
    }
}

export interface ToggleToDoItemAction extends Action{
    payload: {
        updateToDoItem: number;
    }
}

export const SetSearch = (search: string): SetSearchAction => (
    {
        type: SET_SEARCH,
        payload: {
            search
        }
    }
)

export const AddToDoItem = (netToDoItem: string): AddToDoItemAction => (
    {
        type: ADD_TO_DO_ITEM,
        payload: {
            newToDoItem: {
                id: nextToDoId++,
                task: netToDoItem,
                isDone: false
            }
        }
    }
);

export const ToggleToDoItem = (idToDoItem: number): ToggleToDoItemAction => (
    {
        type: TOGGLE_TO_DO_ITEM,
        payload: {
            updateToDoItem: idToDoItem
        }
    }
);

