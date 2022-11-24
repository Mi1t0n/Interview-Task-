import {IToDo} from "../IToDo";

type TDates = Pick<IToDo, 'doneDate'|'status'|'createDate'|'expectDoneTo'>

export type {TDates}