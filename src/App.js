import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {ADD_TODOLIST, addTodolistAC, DELETE_TODOLIST, deleteTodolistAC} from "./reducer";


class App extends React.Component {

    componentDidMount(){
        this.restoreState();
    }

    saveState = () =>{
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('stateForToDoList', stateAsString);
    };

    restoreState=()=>{
        let state = {
            todolist: [],
        };

        let stateAsString = localStorage.getItem('stateForToDoList')

        if(stateAsString != null){
            state = JSON.parse(stateAsString);
        }

        this.setState(state, ()=> {this.saveState(); });
    };

    addToDoList = (title) =>{
        let newTodoList = {
            id: this.props.newTodoLisId + 1,
            title: title,
            tasks: []
        };
        this.props.addTodolist(newTodoList);
    };

    deleteToDoList = (todolistID) => {
        this.props.deleteTodolist(todolistID);
    };

    render = () => {
        const todoList = this.props.todolists.map(tl => <ToDoList id={tl.id}
           title={tl.title} tasks={tl.tasks} deleteList={this.deleteToDoList}
        filter={tl.filter}/>)

        return (
            <div>
                <div>
                    <AddNewItemForm addItem={this.addToDoList}/>
                </div>
                <div className='App'>
                    {todoList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists,
        newTodoLisId: state.newTodoLisId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodolist: (newTodolist) => {
            /*const action = {
                type: ADD_TODOLIST,
                newTodolist
            };*/
            const action = addTodolistAC(action);
            dispatch(action)
        },
        deleteTodolist: (todolistId) =>{
           /* const action = {
                type: DELETE_TODOLIST,
                todolistId
            };*/
           const action = deleteTodolistAC(todolistId);
            dispatch(action)
        }
    }
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;