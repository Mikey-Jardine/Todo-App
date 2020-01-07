import React, { Component } from 'react';  
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: [ ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState( { todos : res.data }))
  }

  handleMarkComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })  
  });
    console.log(id);
  }

  handleDeleteTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState( { todos : [...this.state.todos.filter(todo => todo.id !== id)] }))
    console.log('derp');

  }

  handleAddTodo = (title) => {
    const newId = (this.state.todos.length) + 1;
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      id: newId,
      title: title,
      completed: false
    })
      .then(res => this.setState( { todos : [...this.state.todos, res.data] }))
      console.log(this.state.todos);
  }

    render() { 
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.handleAddTodo} />
          <Todos  todos={this.state.todos} 
                  markComplete={this.handleMarkComplete} 
                  deleteTodo={this.handleDeleteTodo} />
        </div>
      </div>
    );
  }

}

export default App;