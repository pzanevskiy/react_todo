import React from 'react'
import 'bootstrap'

const PriorityFilter = props => {
    return (
        <div className="p-2">
           <p>Priority filter:</p> 
            <select className="form-select" defaultValue="All" placeholder="Choose priority" onChange={(e) => props.onPriorityFilter(e.target.value)}>
                <option value="">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    )
}

export default PriorityFilter