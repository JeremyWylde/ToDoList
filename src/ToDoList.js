import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";
import {
    addTaskAC,
    changeFilterAC, changeStatusAC,
    changeTaskAC,
    deleteTaskAC, setTasksAC
} from "./reducer";
import {api} from "./Api/API";

class ToDoList extends React.Component {

    componentDidMount(){
        this.restoreState();
    }

    restoreState=()=>{
        api.getTasks(this.props.id)
            .then(res=>{
                let allTasks = res.data.items;
                this.props.setTasks(allTasks, this.props.id)
            })
    };

    addTask = (title) => {
            api.createTask(this.props.id,title)
                .then(res=>{
                let newTask = res.data.data.item;
                this.props.addTask(this.props.id, newTask);
            })
    };

    changeFilter = (todoId,newFilterValue) => {
        this.props.changeFilter(todoId, newFilterValue);
     };

    changeStatus = (todolistId, taskID, isDone) =>{
        this.props.changeStatus(todolistId ,taskID, isDone)
    };

    changeTask = (todolistId, taskId, obj) =>{
        this.props.changeTask(todolistId, taskId, obj);
    };

    changeTitle = (todolistId ,taskId, title) => {
        this.changeTask(todolistId, taskId, {title: title})
    };

    deleteTodolist = () => {
        api.deleteToDoList(this.props.id)
            .then(res=>{
                this.props.deleteList(this.props.id);
            })
    };

    render = () => {
        let {tasks = []} = this.props;
        let filteredTasks = tasks.filter(t => {
            switch (this.props.filter) {
                case "All": return true;
                case "2": return t.status;
                case "0": return !t.status;
                default: return true;
            }});
        return (
            <div className="App">
                <div className="message">
                    <div className='message-header'>
                        <TodoListTitle title={this.props.title} changeToDoListTitle = {this.props.changeToDoListTitle}
                                       todoId={this.props.id}/>
                        <button className='delete' onClick={this.deleteTodolist}>X</button>
                    </div>
                    <AddNewItemForm addItem={this.addTask}/>
                   <TodoListTasks changeStatus={this.changeStatus} todoId={this.props.id}
                                  changeTitle={this.changeTitle} task={filteredTasks}
                                  deleteTask={this.props.deleteTask} />

                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.props.filter}
                                    todoId={this.props.id}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todolistId, newTask) => {
            const action = addTaskAC(todolistId, newTask);
            dispatch(action)
        },
        deleteTask: (todolistId, taskId) =>{
            const action = deleteTaskAC(todolistId, taskId);
            dispatch(action)
        },
        changeTask: (todolistId, taskId, newTask) => {
            const action = changeTaskAC(todolistId, taskId, newTask);
            dispatch(action);
        },
        changeFilter: (todolistId, filterValue) => {
            const action = changeFilterAC(todolistId, filterValue);
            dispatch(action);
        },
        changeStatus: (todolistId, taskId, isDone) => {
            const action = changeStatusAC(todolistId, taskId, isDone);
            dispatch(action);
        },
        setTasks: (allTasks, todolistId) => {
            const action = setTasksAC(allTasks, todolistId);
            dispatch(action);
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoList);

