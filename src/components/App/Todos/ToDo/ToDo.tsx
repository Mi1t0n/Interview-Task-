import {IToDo} from "./IToDo";
import Dates from "./Dates/Dates";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import {TodoStatus, TrefetchProp} from "../../IApp";
import Files from "./Files/Files";


const toDoColor = (status: TodoStatus) => {
    const {expired, done, inprogress} = TodoStatus
    let border = '2px solid'
    switch (status) {
        case expired:
            border += ' red'
            break;
        case done:
            border += ' lightgreen'
            break;
        case inprogress:
            border += ' gray'
            break;
    }
    return border
}

const ToDo = ({name, id, status, createDate, expectDoneTo, doneDate, refetch, pinnedFiles}: IToDo & TrefetchProp) => {
    const dates = {status, createDate, expectDoneTo, doneDate}
    const todoInfo = {name, id, status, refetch}
    const files = {pinnedFiles, id, status, refetch}

    return (
        <section style={{
            padding            : '10px', border: toDoColor(status),
            borderRadius       : '10px', margin: '10px 0', display: 'grid',
            gridTemplateColumns: '1fr 1fr', gridTemplateRows: '34px 1fr'
        }}
        >
            <ToDoHeader {...todoInfo}/>
            <Files {...files}/>
            <Dates  {...dates}/>
        </section>
    )
}

export default ToDo;
