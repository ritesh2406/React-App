import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong> 
 
      </li>
    );
  }
}

export default TodoItem;
