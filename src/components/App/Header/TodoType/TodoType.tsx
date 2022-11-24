import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {TodoStatus} from "../../IApp";
import {ChangeEvent} from "react";
import {ITodoType} from "./ITodoType";


const {inprogress, expired, done} = TodoStatus
const TodoType = ({setToDoStatus, toDoStatus}: ITodoType) => {
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setToDoStatus(event.target.value as TodoStatus)
    }

    return (
        <RadioGroup row style={{display: 'flex', justifyContent: 'space-evenly', padding: '10px'}}
                    value={toDoStatus} onChange={changeHandler}>
            <FormControlLabel value={done} control={<Radio color={'success'}/>} label={done}/>
            <FormControlLabel value={inprogress} control={<Radio color={'default'}/>} label={inprogress}/>
            <FormControlLabel value={expired} control={<Radio color={'error'}/>} label={expired}/>
        </RadioGroup>
    )
}


export default TodoType;
