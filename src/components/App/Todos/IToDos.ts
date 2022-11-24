import {IToDo} from "./ToDo/IToDo";
import {TodoStatus} from "../IApp";


interface IToDos {
    todos: IToDo[]
    toDoStatus: TodoStatus
    loading: boolean
}

export type {IToDos}