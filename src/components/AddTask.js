import React, { Component } from 'react'
import 'bootstrap'
import moment from 'moment'

class AddTask extends Component {
    state = {
        text: '',
        deadline: moment().format('yyyy-MM-DDTHH:mm'),
        priority: 'Low'
    }

    addTask = () => {
        const { text } = this.state
        const { deadline } = this.state
        const { priority } = this.state

        if (text && deadline && priority) {
            let task = {
                text: text,
                deadline: moment(deadline).format("DD.MM.YYYY HH:mm"),
                priority: priority
            }
            this.props.addHandler(task)
            this.setState({
                text: '',
                deadline: moment().format('yyyy-MM-DDTHH:mm'),
                priority: 'Low'
            })
        }
    }

    textChange = e => {
        this.setState({ text: e.target.value })
    }

    dateChange = e => {
        this.setState({ deadline: e.target.value })
    }

    priorityChange = e => {
        this.setState({ priority: e.target.value })
    }

    render() {
        const { text } = this.state
        const { deadline } = this.state
        const { priority } = this.state

        return (
            <div className="text-center">
                <label className="w-75 text-start">Text:
                <input className="form-control" placeholder="Some text..." type="text" onChange={this.textChange} value={text} />
                </label>
                <p/>
                <label className="w-75 text-start">Deadline: 
                <input className="form-control" type="datetime-local" onChange={this.dateChange} value={deadline} />
                </label>
                <p />
                <label className="w-75 text-start">Priority: <select className="form-select" onChange={this.priorityChange} value={priority}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select></label>
                <p/>
                <input type="button" id="liveToastBtn" className="btn btn-success border rounded-pill mt-3" value="Add task" onClick={this.addTask} />
            </div>
        )
    }
}

export default AddTask