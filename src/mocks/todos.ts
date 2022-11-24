import {IToDo} from "../components/App/Todos/ToDo/IToDo";
import {faker} from "@faker-js/faker";
import dayjs from "dayjs";
import {TodoStatus} from "../components/App/IApp";


const todoFactory = (): IToDo => {
    const createDate = dayjs(faker.date.recent(15)).unix()
    const doneDate = faker.datatype.boolean() ? dayjs().unix() : null
    const expectDoneTo = doneDate ?
        dayjs(faker.date.future()).unix() : dayjs(faker.date.between(dayjs.unix(createDate).format(), faker.date.future())).unix()

    const status = doneDate ? TodoStatus.done :
        dayjs().unix() < expectDoneTo ? TodoStatus.inprogress : TodoStatus.expired

    return {
        id         : Number(faker.random.numeric(10)),
        pinnedFiles: [],
        name       : faker.lorem.word(10),
        createDate, expectDoneTo, status, doneDate
    }
}

const todos = Array.from({length: 5}, todoFactory);
export default todos