import {ToDoItemModel} from "./ToDoItemModel";

export interface ToDoState {
    ToDoItems: ToDoItemModel[];
    search: string;
}
