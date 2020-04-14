import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        tasks: [
            {title: "Css", isDone: true, priority: "Low"},
            {title: "Js", isDone: false, priority: "High"},
            {title: "React", isDone: true, priority: "High"},
            {title: "Patterns", isDone: false, priority: "Low"}
        ],
        filterVal: "All"
    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'Low'
        };

        let newTasks = [...this.state.tasks, newTask];

        this.setState({
            tasks: newTasks
        })

        this.newTaskTitleRef.current.value = '';
    }


    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    {/* <TodoListHeader/> */}
                    <div>
                        <h3 className='todoList-header__title'>What to learn</h3>
                        <div className='todoList-newTaskForm'>
                            <input ref={this.newTaskTitleRef} type='text' placeholder='New task name'/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>

                    <TodoListFooter filterValue={this.state.filterVal}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                </div>
            </div>
        );
    }
}

export default App;

