import {addTodo} from '../store/actions/todoActions.js'
import { useDispatch } from "react-redux";

export const NewTodo = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(e.target.title.value))
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="new todos..." />
            <input type="submit" value='Add todo' style={{marginLeft: '1rem'}} />
        </form>
    )
}