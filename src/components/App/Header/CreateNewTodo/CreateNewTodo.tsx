import {Box, TextField} from '@mui/material';
import {ChangeEvent, FormEvent, memo, useState} from 'react';
import {usePostAxios} from '../../../../hooks/useAxios';
import {DateTimePicker} from '@mui/x-date-pickers';
import LoadingButton from '@mui/lab/LoadingButton';
import dayjs, {Dayjs} from "dayjs";
import {TnewToDo} from "./ICreateNewTodo";
import {TrefetchProp} from "../../IApp";

// 300 sec = 5min
const nowDate5minMore = () => dayjs.unix(dayjs().unix() + 300)

const CreateNewTodo = memo(function CreateNewTodo({refetch}: TrefetchProp) {
    const [value, setValue] = useState<string>('')
    const [expectDate, setExpectDate] = useState<Dayjs>(nowDate5minMore())
    const {postFn: postNewToDo, loading: lNewToDo} = usePostAxios<TnewToDo>('/todos')

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    const changeExpectDateHandler = (chosenDate: Dayjs | null) => chosenDate && setExpectDate(chosenDate)
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const todo: TnewToDo = {
            name        : value,
            expectDoneTo: expectDate.unix(),
        }

        postNewToDo(todo)
            .then(() => refetch())

        setValue('')
        setExpectDate(nowDate5minMore())
    }

    return (
        <Box component={'form'} onSubmit={submitHandler}
             style={{display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '10px'}}
        >
            <TextField id="outlined-search" required value={value} label="Title"
                       onChange={changeInputHandler} disabled={lNewToDo}
            />
            <DateTimePicker
                renderInput={params => <TextField {...params} />} disabled={lNewToDo} disablePast
                value={expectDate} onChange={changeExpectDateHandler}
            />
            <LoadingButton variant='outlined' type='submit' loading={lNewToDo}
                           style={{gridColumn: '1/3'}} size={"small"} color={"inherit"}
            >
                Add ToDo
            </LoadingButton>
        </Box>
    );
})

export default CreateNewTodo;
