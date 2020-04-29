import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

    state = {
        tasks: [
            {title: "Css", isDone: true, priority: "Low"},
            {title: "Js", isDone: false, priority: "High"},
            {title: "React", isDone: true, priority: "High"},
            {title: "Patterns", isDone: false, priority: "Low"}
        ],
        filterVal: "All"
    };

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'Low'
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterVal: newFilterValue
        });
    };

    changeStatus = (status, task) =>{
        let taskCopy = this.state.tasks.map( t => {
            if(t === task)
                return {...t, isDone: status};
            else
                return t;
        });
        this.setState( {
            tasks: taskCopy
        });
    };

    render = () => {
        let filteredTasks = this.state.tasks.filter(t => {
            switch (this.state.filterVal) {
                case "All": return true;
                case "Completed": return t.isDone;
                case "Active": return !t.isDone;
                default: return true;
            }})
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                   <TodoListTasks changeStatus={this.changeStatus} task={filteredTasks}/>
                    <TodoListFooter changeFilter = {this.changeFilter} filterValue={this.state.filterVal}/>
                </div>
            </div>
        );
    }
}

export default App;

