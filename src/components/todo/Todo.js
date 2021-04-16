import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const checked = value => {
    return value ? 'checked' : ''
}

const Todo = props => {
    return (
        <div className="list-group-item m-1 w-100">
            <div className="row">
                <div className="col-1">
                    <input className="form-check-input" type="checkbox" onChange={props.changeState} defaultChecked={checked(props.done)} />
                </div>
                <div className="col">
                    <p className="text-justify">
                        {props.text}
                    </p>
                </div>
                <div className="col col-3 col-sm-2 col-xl-2">
                    <p className="text-wrap">
                        Deadline: {props.deadline}
                    </p>
                    <p className="text-wrap">
                        Priority: {props.proirity}
                    </p>
                </div>
                <div className="col col-2 col-sm-1 col-xl-1">
                    <div className="text-end">
                        <button className="btn btn-outline-danger" onClick={props.deleteHandler}>&times;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo