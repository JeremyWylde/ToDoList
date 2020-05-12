import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";


class App extends React.Component {

    state = {
        todolist: [],
        newTodoLisId: 0
    }

    componentDidMount(){
        this.restoreState();
    }

    saveState = () =>{
        //переводим объект в строку
        let stateAsString = JSON.stringify(this.state);
        //сохраняем строку в localStorage под ключом our-state
        localStorage.setItem('our-state', stateAsString);
    }

    restoreState=()=>{
        let state = {
            todolist: [],
            newTodoLisId: 0
        };

        //считываем сохраненную ранее строку из localStorage
        let stateAsString = localStorage.getItem('our-state')

        if(stateAsString != null){
            state = JSON.parse(stateAsString);
        }

        this.setState(state, ()=> {this.saveState(); });
    }


    addToDoList = (title) =>{
        let newTodoList = {
            id: this.state.newTodoLisId,
            title: title,
        };
        this.state.newTodoLisId++;
        let newTodoLists = [...this.state.todolist, newTodoList];
        this.setState({
            todolist: newTodoLists
        }, ()=> {this.saveState(); });
    }

    render = () => {
        const todoList = this.state
            .todolist.map(tl => <ToDoList id={tl.id} title={tl.title}/>)


        const addTodoList=()=>{

        }
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

export default App;