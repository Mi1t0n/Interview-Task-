import {IToDo} from "../../Todos/ToDo/IToDo";

type TnewToDo = Pick<IToDo, 'name' | 'expectDoneTo'>

export type { TnewToDo}