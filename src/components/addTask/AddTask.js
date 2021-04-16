import React, { Component } from 'react'
import 'bootstrap'
import moment from 'moment'

class AddTask extends Component {
    state = {
        text: '',
        deadline: moment().format('yyyy-MM-DDTHH:mm'),
        priority: 'Low'
    }

    addTask = (event) => {
        const { text } = this.state;
        const { deadline } = this.state;
        const { priority } = this.state;

        if (text && deadline && priority) {
            let task = {
                text: text,
                deadline: moment(deadline).format("DD.MM.YYYY HH:mm"),
                priority: priority
            }
            this.props.addHandler(task);
            this.setState({
                text: '',
                deadline: moment().format('yyyy-MM-DDTHH:mm'),
                priority: 'Low'
            })
        }
    }

    textChange = event => {
        this.setState({ text: event.target.value })
    }

    dateChange = event => {
        this.setState({ deadline: event.target.value })
    }

    priorityChange = event => {
        this.setState({ priority: event.target.value })
    }

    render() {
        const { text } = this.state;
        const { deadline } = this.state;
        const { priority } = this.state;

        return (
            <div>
                <label>Text: </label>
                <input className="form-control w-50" type="text" onChange={this.textChange} value={text} />
                <p />
                <label>Deadline: </label>
                <input className="form-control w-50" type="datetime-local" onChange={this.dateChange} value={deadline} />
                <p />
                <label>Priority: </label>
                <select className="form-select w-50" onChange={this.priorityChange} value={priority}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input type="button" className="btn btn-success border rounded-pill mt-3" value="Add task" onClick={this.addTask} />
            </div>
        )
    }
}

export default AddTask