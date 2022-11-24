import {Container} from "@mui/material";
import Header from "./Header/Header";
import {useCallback, useEffect, useState} from "react";
import {TodoStatus} from "./IApp";
import ToDos from "./Todos/ToDos";
import {IToDo} from "./Todos/ToDo/IToDo";
import {useGetAxios} from "../../hooks/useAxios";


const App = () => {
    const [toDoStatus, setToDoStatus] = useState<TodoStatus>(TodoStatus.inprogress)
    const [todos, setToDos] = useState<IToDo[]>([])
    const {getFn: getToDos, data, loading: lToDos} = useGetAxios<IToDo[]>('/todos')

    const refetchToDos = useCallback(() => getToDos(), [])

    useEffect(() => {
        getToDos()
    }, [toDoStatus]);

    useEffect(() => {
        if (!lToDos && data) setToDos(data.data)
    }, [data]);

    return (
        <Container maxWidth={"sm"} style={{padding: '20px 10px'}}>
            <Header toDoStatus={toDoStatus} setToDoStatus={setToDoStatus} refetch={refetchToDos}/>
            <ToDos todos={todos} toDoStatus={toDoStatus} loading={lToDos} refetch={refetchToDos}/>
        </Container>
    )
}

export default App