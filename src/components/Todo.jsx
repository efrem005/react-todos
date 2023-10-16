import { removeTodo, toggleTodo } from "../store/actions/todoActions.js";
import { useDispatch } from "react-redux";

export const Todo = ({id, title, completed}) => {

    const dispatch = useDispatch()

    return (
        <li className="todos-list" key={id}>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))} />
            <div className="todos-title" style={{textDecorationLine: completed && 'line-through'}}>{title}</div>
            <button onClick={() => dispatch(removeTodo(id))}>delete</button>
        </li>
    )
}