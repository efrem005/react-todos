import { NewTodo } from "./components/NewTodo.jsx";
import { Todos } from "./components/Todos.jsx";
import { Filters } from "./components/Filters.jsx";

export const App = () => {

    return (
        <div className="app">
            <h1 style={{textShadow: "#FC0 1px 0 10px"}}>Hello Redux Todos</h1>
            <NewTodo />
            <Filters />
            <Todos />
        </div>
    )
}

export default App