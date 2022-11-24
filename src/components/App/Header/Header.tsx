import TodoType from "./TodoType/TodoType";
import CreateNewTodo from "./CreateNewTodo/CreateNewTodo";
import {TrefetchProp} from "../IApp";
import {memo} from "react";
import {ITodoType} from "./TodoType/ITodoType";

const Header = memo(function Header({refetch, ...rest}: ITodoType & TrefetchProp) {
    return (
        <header>
            <CreateNewTodo refetch={refetch}/>
            <TodoType {...rest}/>
        </header>
    )
})


export default Header;
