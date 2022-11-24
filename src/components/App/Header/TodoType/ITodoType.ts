import {TodoStatus} from "../../IApp";
import {Dispatch, SetStateAction} from "react";

interface ITodoType {
    toDoStatus: TodoStatus
    setToDoStatus: Dispatch<SetStateAction<TodoStatus>>
}


export type {ITodoType}