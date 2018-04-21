import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map(todo =>{
            //console.log(project);
            return(
                <TodoItem  key={todo.title} todo={todo} />
            );
        });

    }
    return (
      <div className="Todos">
      <h3>Latest Todos</h3>
        {todoItems}
 
      </div>
    );
  }
}


export default Todos;
