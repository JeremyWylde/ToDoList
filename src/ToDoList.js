import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import TodoListTitle from "./TodoListTitle";

class ToDoList extends React.Component {

    state = {
        tasks: [],
        filterVal: "All",
        newTaskId: 0
    }

    componentDidMount(){
        this.restoreState();
    }

    saveState = () =>{
        //переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        //сохраняем строку в localStorage под ключом our-state
        localStorage.setItem('our-state-'+this.props.id, stateAsString);
    }

    restoreState=()=>{
        let state = {
            tasks: [],
            filterVal: "All",
            newTaskId: 0
        };

        //считываем сохраненную ранее строку из localStorage
        let stateAsString = localStorage.getItem('our-state-'+this.props.id)

        if(stateAsString != null){
            state = JSON.parse(stateAsString);
        }

        this.setState(state, ()=> {this.saveState(); });
    }

    addTask = (newText) => {
        let newTask = {
            id: this.state.newTaskId,
            title: newText,
            isDone: false,
            priority: 'Low'
        };
        this.state.newTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, ()=> {this.saveState(); });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterVal: newFilterValue
        }, ()=> {this.saveState(); });
    };

    changeStatus = (taskID, isDone) =>{
        this.changeTask(taskID, {isDone: isDone})
    };

    changeTask = (taskId, obj) =>{
        let newTask = this.state.tasks.map(t => {
            if(t.id != taskId){
                return t;
            }
            else{
                return {...t, ...obj}
            }
        });

        this.setState({tasks: newTask}, ()=> {this.saveState(); })
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    }

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
                    <div  className='todoList-header'>
                        <TodoListTitle title={this.props.title}/>
                        <AddNewItemForm addItem={this.addTask}/>
                    </div>
                   <TodoListTasks changeStatus={this.changeStatus} changeTitle={this.changeTitle} task={filteredTasks} />
                    <TodoListFooter changeFilter = {this.changeFilter} filterValue={this.state.filterVal}/>
                </div>
            </div>
        );
    }
}

export default ToDoList;

