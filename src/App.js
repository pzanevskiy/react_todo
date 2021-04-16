import React, { Component } from 'react'
import './App.css'
import Todo from './components/todo/Todo'
import AddTask from './components/addTask/AddTask'
import 'bootstrap'

class App extends Component {

  todoStorage = JSON.parse(localStorage.getItem('todos'))

  state = {
    todos: this.todoStorage ? this.todoStorage : []
  }

  addHandler = task => {
    let todos = this.state.todos;
    todos.push({
      text: task['text'],
      deadline: task['deadline'].toString(),
      proirity: task['priority'],
      done: false
    })
    this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  deleteHandler = index => {
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  changeState = index => {
    let todos = this.state.todos
    let todo = todos[index]
    todos[index] = todo
    todo['done'] = todo['done'] ? false : true
    this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  render() {
    return (
      <div className="container mb-3">
        <h1 className="text-center">
          TODO's
        </h1>
        <div className="list-group list-group-flush">
          {
            this.state.todos.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  done={todo.done}
                  text={todo.text}
                  deadline={todo.deadline}
                  proirity={todo.proirity}
                  deleteHandler={this.deleteHandler.bind(this, index)}
                  changeState={this.changeState.bind(this, index)}
                />
              )
            })
          }
        </div>
        <AddTask addHandler={this.addHandler} />
      </div>


    )
  }
}

export default App
