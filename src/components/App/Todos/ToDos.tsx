import {IToDos} from "./IToDos";
import ToDo from "./ToDo/ToDo";
import {TrefetchProp} from "../IApp";

const ToDos = ({todos, toDoStatus, loading, refetch}: IToDos & TrefetchProp) => {

    // if (loading) return <div style={{textAlign: 'center', padding: '10px'}}>Loading . . .</div>

    return (
        <>
            {
                loading ?
                    <div style={{textAlign: 'center', padding: '10px'}}>Loading . . .</div>
                    :
                    todos
                        .filter(({status}) => status === toDoStatus)
                        .map(todo => <ToDo {...todo} key={todo.id} refetch={refetch}/>)
            }
        </>
    );
}

export default ToDos;
