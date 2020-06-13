import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistAC, changeToDoListTitleAC, deleteTodolistAC, setToDoListsAC} from "./reducer";

import {api} from "./Api/API";


class App extends React.Component {

    componentDidMount(){
        this.restoreState();
    }

    restoreState = () => {
        api.getToDoLists()
            .then(res => {
                this.props.setToDoLists(res.data);
            })
    };

    addToDoList = (title) =>{
        api.addToDoList(title)
            .then(res=>{
                let todoList = res.data.data.item;
                this.props.addTodolist(todoList);
            })
    };

    deleteToDoList = (todolistID) => {
        this.props.deleteTodolist(todolistID);
    };

    render = () => {
        const todoList = this.props.todolists.map(tl => <ToDoList id={tl.id}
           title={tl.title} tasks={tl.tasks} deleteList={this.deleteToDoList}
        filter={tl.filter} changeToDoListTitle={this.props.changeToDoListTitle}/>);

        return (
            <div>
                <div>
                    <AddNewItemForm addItem={this.addToDoList}/>
                </div>
                <div className='main-block'>
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
            const action = addTodolistAC(newTodolist);
            dispatch(action)
        },
        deleteTodolist: (todolistId) =>{
           const action = deleteTodolistAC(todolistId);
            dispatch(action)
        },
        setToDoLists: (todolists) =>{
            const action = setToDoListsAC(todolists);
            dispatch(action);
        },
        changeToDoListTitle: (todoListId, title) => {
            const action = changeToDoListTitleAC(todoListId, title)
            dispatch(action);
        }
    }
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;