import {rest} from 'msw'
import mocks from "./todos";
import dayjs from "dayjs";
import {TodoStatus} from "../components/App/IApp";
import {faker} from "@faker-js/faker";
import {TnewToDo} from "../components/App/Header/CreateNewTodo/ICreateNewTodo";
import {IToDo} from "../components/App/Todos/ToDo/IToDo";


let todos: IToDo[] = JSON.parse(JSON.stringify(mocks))

export const handlers = [
    rest.post('/todos', async (req, res, ctx) => {
        const toDoBody: TnewToDo = await req.json()
        const newToDo: IToDo = {
            ...toDoBody,
            id         : Number(faker.random.numeric(10)),
            createDate : dayjs(new Date).unix(),
            doneDate   : null,
            pinnedFiles: [],
            status     : TodoStatus.inprogress
        }
        todos.unshift(newToDo)
        return res(
            ctx.status(201),
            ctx.json(newToDo)
        )
    }),
    rest.post('/todosfiles/:todoID', (req, res, ctx) => {
        const {file} = req.body as { file: File }
        const {todoID} = req.params
        const toDo = todos.find(todo => todo.id === +todoID)

        if (!toDo) return res(ctx.status(400))

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            reader.result && toDo.pinnedFiles.push({
                id      : Number(faker.random.numeric(10)),
                filename: file.name,
            })
        }

        return res(ctx.status(200))
    }),
    rest.delete('/todosfiles/:todoID&:fileID', (req, res, ctx) => {
        const {todoID, fileID} = req.params
        const toDo = todos.find(todo => todo.id === +todoID)

        if (!toDo) return res(ctx.status(400))

        toDo.pinnedFiles = toDo.pinnedFiles.filter(({id}) => id !== +fileID)
        return res(ctx.status(200))
    }),
    rest.get('/todos', (req, res, ctx) => {
        todos.forEach(todo => {
            const outOfTime = dayjs().unix() > todo.expectDoneTo
            const isDone = todo.doneDate
            if (outOfTime) todo.status = TodoStatus.expired
            if (isDone) todo.status = TodoStatus.done
        })
        return res(
            ctx.status(200),
            ctx.json(todos)
        )
    }),
    rest.patch('/todos/:todoID', async (req, res, ctx) => {
        const {todoID} = req.params
        const body: Partial<IToDo> = await req.json()
        const toDo = todos.find(todo => todo.id === +todoID)

        if (!toDo) return res(ctx.status(400))

        const indexOfToDo = todos.indexOf(toDo)
        todos[indexOfToDo] = {
            ...todos[indexOfToDo],
            ...body
        }

        return res(ctx.status(200))
    }),
    rest.delete('/todos/:todoID', (req, res, ctx) => {

        const {todoID} = req.params
        const toDo = todos.find(todo => todo.id === +todoID)

        if (!toDo) return res(ctx.status(400))

        todos = todos.filter(({id}) => id !== +todoID)

        return res(ctx.status(200))
    }),
]