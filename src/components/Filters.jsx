import { Link, useParams } from "react-router-dom";

export const Filters = () => {
    const {filter: activeFilter = 'all'} = useParams()

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '0.75rem', margin: '1rem 0'}}>
            <Link to="/all" style={{color: activeFilter === 'all' ? 'red' : 'white'}}>all</Link>
            <Link to="/active" style={{color: activeFilter === 'active' ? 'red' : 'white'}}>active</Link>
            <Link to="/completed" style={{color: activeFilter === 'completed' ? 'red' : 'white'}}>completed</Link>
        </div>
    )
}