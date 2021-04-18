import React from 'react'

const DateFilter = props => {
    return (
        <div className="p-2">
            <p>Date filter:</p> 
            <select className="form-select" defaultValue="All" placeholder="Choose date" onChange={(e) => props.onDateFilter(e.target.value)}>
                <option value="">All</option>
                <option>Today</option>
                <option>This week</option>
                <option>Over</option>
            </select>
        </div>
    )
}

export default DateFilter