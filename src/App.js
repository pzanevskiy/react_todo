import React, { Component } from 'react'
import './App.css'
import Todo from './components/Todo'
import AddTask from './components/AddTask'
import Search from './components/Search'
import PriorityFilter from './components/PriorityFilter'
import DateFilter from './components/DateFilter'
import moment from 'moment'
import 'bootstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 } from 'uuid'

class App extends Component {

  todoStorage = JSON.parse(localStorage.getItem('todos'))

  state = {
    todos: this.todoStorage ? this.todoStorage : []
  }

  addHandler = task => {
    if(!this.todoStorage){
      this.todoStorage=[]
    }
    let todos = this.todoStorage
    // console.log('local',todos)
    // console.log('storage',this.todoStorage)
    todos.push({
      id: v4(),
      text: task['text'],
      deadline: task['deadline'].toString(),
      priority: task['priority'],
      done: false
    })
    this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  deleteHandler = id => {
    let todos = this.todoStorage
    // console.log('local',todos)
    // console.log('storage',this.todoStorage)
    // let todoStorage = this.todoStorage
    // todoStorage.splice(todoStorage.map(todo => todo['id']).indexOf(id), 1)
    todos.splice(todos.map(todo => todo['id']).indexOf(id), 1)
    this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  changeState = id => {
    let todos = this.todoStorage
    let todoIndex = todos.map(todo => todo['id']).indexOf(id)
    let todo = todos[todoIndex]
    todos[todoIndex] = todo
    todo['done'] = todo['done'] ? false : true
    this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  onSearch = value => {
    if (value === '') {
      this.setState({
        todos: this.todoStorage
      })
    } else {
      this.setState({
        todos: this.todoStorage.filter(todo => todo['text'].toLowerCase().includes(value.toLowerCase()))
      })
    }
  }

  onPriorityFilter = value => {
    console.log(this.state.todos)
    console.log(value)
    if (value !== '') {
      this.setState({ todos: this.todoStorage.filter(todo => todo['priority'].includes(value)) })
    } else {
      this.setState({ todos: this.todoStorage })
    }
  }

  onDateFilter = value => {
    switch (value) {
      case 'Today': {
        this.setState({
          todos: this.todoStorage.filter(todo => {
            let todoDate = moment(todo.deadline, "DD-MM-YYYY HH:mm")
            return Math.round(moment().diff(todoDate, 'minute', true)) < 0 &&
              moment().dayOfYear() === todoDate.dayOfYear()
          })
        })
        break
      }
      case 'This week': {
        this.setState({
          todos: this.todoStorage.filter(todo => {
            let todoDate = moment(todo.deadline, "DD-MM-YYYY HH:mm")
            return moment().isoWeek() === todoDate.isoWeek() &&
              moment().diff(todoDate, 'minute', true) < 0
          })
        })
        break
      }
      case 'Over': {
        this.setState({
          todos: this.todoStorage.filter(todo => {
            let todoDate = moment(todo.deadline, "DD-MM-YYYY HH:mm")
            return moment().diff(todoDate, 'minute', true) > 0
          })
        })
        break
      }
      default: {
        this.setState({ todos: this.todoStorage })
        break;
      }
    }
  }

  render() {
    return (
      <div className="container mb-3">
        <h1 className="text-center p-2">TODO's</h1>
        <Search onSearch={this.onSearch}/>
        <PriorityFilter onPriorityFilter={this.onPriorityFilter} />
        <DateFilter onDateFilter={this.onDateFilter} />
        <TransitionGroup className="list-group list-group-flush m-3">
          {
            this.state.todos.map((todo) => {
              return <CSSTransition
                key={todo.id}
                timeout={500}
                classNames="item">
                <Todo
                  key={todo.id}
                  done={todo.done}
                  text={todo.text}
                  deadline={todo.deadline}
                  priority={todo.priority}
                  deleteHandler={this.deleteHandler.bind(this, todo.id)}
                  changeState={this.changeState.bind(this, todo.id)}
                />
              </CSSTransition>

            })
          }
        </TransitionGroup>
        <AddTask addHandler={this.addHandler} />
      </div>
    )
  }
}

export default App
