import { useSelector } from "react-redux";
import { Todo } from "./Todo.jsx";
import { selectVisibleTodos } from "../store/selectors/todosSelectors.js";
import { useParams } from "react-router-dom";

export const Todos = () => {

    const { filter: activeFilter } = useParams()
    const todos = useSelector(state => selectVisibleTodos(state, activeFilter))

    return (
        <ul>
            <li className="todos-list">
                <div>Состояние</div>
                <div>Задача</div>
                <div>Удалить</div>
            </li>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
    )

}