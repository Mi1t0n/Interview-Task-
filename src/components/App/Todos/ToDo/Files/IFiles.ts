import {IToDo} from "../IToDo";

type TFiles = Pick<IToDo, 'pinnedFiles'|'id'|'status'>

export type {TFiles}