import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";
import {
    ADD_TASK,
    addTask,
    addTaskAC,
    CHANGE_FILTER,
    CHANGE_STATUS,
    CHANGE_TASK, changeFilterAC, changeStatusAC,
    changeTaskAC,
    DELETE_TASK, deleteTaskAC
} from "./reducer";

class ToDoList extends React.Component {
    /*state = {
        tasks: [],
        filterVal: "All",
        newTaskId: 0
    };*/

    componentDidMount(){
        this.restoreState();
    }

    saveState = () =>{
        //переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        //сохраняем строку в localStorage под ключом our-state
        localStorage.setItem('our-state-'+this.props.id, stateAsString);
    };

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
    };

    addTask = (newText) => {
        let newTask = {
            id: this.props.tasks.length,
            title: newText,
            isDone: false,
            priority: 'Low'
        };
       /* let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, ()=> {this.saveState(); });
    };

      changeFilter = (newFilterValue) => {
        this.setState({
            filterVal: newFilterValue
        }, ()=> {this.saveState(); });*/
        this.props.addTask(this.props.id, newTask);
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
        this.props.deleteList(this.props.id);
    };


    render = () => {
        let filteredTasks = this.props.tasks.filter(t => {
            switch (this.props.filter) {
                case "All": return true;
                case "Completed": return t.isDone;
                case "Active": return !t.isDone;
                default: return true;
            }});
        return (
            <div className="App">
                <div className="message">
                    <div className='message-header'>
                        <TodoListTitle title={this.props.title}/>
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
            /*const action = {
                type: ADD_TASK,
                newTask,
                todolistId,
            };*/
            const action = addTaskAC(todolistId, newTask)
            dispatch(action)
        },
        deleteTask: (todolistId, taskId) =>{
            /*const action = {
                type: DELETE_TASK,
                todolistId,
                taskId
            };*/
            const action = deleteTaskAC(todolistId, taskId);
            dispatch(action)
        },
        changeTask: (todolistId, taskId, newTask) => {
            /*const action = {
                type: CHANGE_TASK,
                todolistId,
                taskId,
                newTask,
            };*/
            const action = changeTaskAC(todolistId, taskId, newTask);
            dispatch(action);
        },
        changeFilter: (todolistId, filterValue) => {
            /*const action = {
                type: CHANGE_FILTER,
                todolistId,
                newFilterValue: filterValue
            };*/
            const action = changeFilterAC(todolistId, filterValue);
            dispatch(action);
        },
        changeStatus: (todolistId, taskId, isDone) => {
            /*const action = {
                type: CHANGE_STATUS,
                todolistId,
                taskId,
                isDone
            };*/
            const action = changeStatusAC(todolistId, taskId, isDone);
            dispatch(action);
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoList);

