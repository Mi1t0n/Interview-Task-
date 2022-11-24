import {TToDoHeader} from "./IToDoHeader";
import Buttons from "./Buttons/Buttons";
import {TrefetchProp} from "../../../IApp";

const ToDoHeader = ({name, id,status,refetch}: TToDoHeader & TrefetchProp) =>
    <header style={{display: 'flex', justifyContent: 'space-between',gridRow:'1/2',gridColumn:'1/3'}}>
        <h4 style={{margin: '0'}}>{name}</h4>
        <Buttons id={id} status={status} refetch={refetch}/>
    </header>


export default ToDoHeader;
