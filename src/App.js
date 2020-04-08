import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    tasks = [
        {title: "Css", isDone: true, priority: "Low"},
        {title: "Js" , isDone: false, priority: "High"},
        {title: "React" , isDone: true, priority: "High"},
        {title: "Patterns" , isDone: false, priority: "Low"}
    ];
    filterVal = "All";
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListFooter filterValue={this.filterVal}/>
                    <TodoListTasks tasks={this.tasks}/>
                </div>
            </div>
        );
    }
}

export default App;

