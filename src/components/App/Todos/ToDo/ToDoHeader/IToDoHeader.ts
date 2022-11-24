import {IToDo} from "../IToDo";

type TToDoHeader = Pick<IToDo, 'name' | 'id' | 'status'>

export type {TToDoHeader}