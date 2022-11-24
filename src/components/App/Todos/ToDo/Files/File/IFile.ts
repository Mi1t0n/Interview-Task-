import {IToDo,file} from "../../IToDo";

interface IFile extends  Pick<IToDo, 'id'|'status'>{
    file:file
}
export type {IFile}