import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TodoInput from "./todoInput";
import TodoItem from './todoItem';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "This is a default todo!"},
      ],
      nextId: 1
    };

    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  onChange(todo, e) {
    todo.update(function (state) {
    return state.merge({ text: e.currentTarget.value });
    });
  }


  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
    console.log(this.state.todos.filter((todo, index) => todo.id !== id));
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} onChange ={this.onChange.bind(this)} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('state'))
});
