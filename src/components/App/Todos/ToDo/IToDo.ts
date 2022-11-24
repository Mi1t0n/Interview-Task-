import {TodoStatus} from "../../IApp";

interface IToDo {
    id: number
    name: string
    createDate: number
    expectDoneTo: number
    doneDate: number | null
    pinnedFiles: file[]
    status: TodoStatus
}

interface file {
    id: number
    filename: string
}

export type {IToDo, file}