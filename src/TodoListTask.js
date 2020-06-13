import React from 'react';
import {api} from "./Api/API";

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        title: this.props.task.title,
    };

    onIsDoneChanged = (e) => {
        let newStatus;
        if(e.currentTarget.checked === true)
            newStatus = 2;
        else
            newStatus = 0;

        api.updateTaskStatus(this.props.todoId, this.props.task.id, this.props.task.title, newStatus)
            .then(res=>{
                this.props.changeStatus(res.data.data.item.todoListId, res.data.data.item.id, res.data.data.item.status);
            });
    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value});
    };

    activateEditMode = () =>{
        this.setState({editMode: true})
    };

    deactivateEditMode = () =>{
         api.updateTaskTitle(this.props.todoId, this.props.task.id, this.state.title)
           .then(res=>{
               this.props.changeTitle(res.data.data.item.todoListId , res.data.data.item.id, res.data.data.item.title);
               this.setState({editMode: false});
           });
    };

    deleteTask = () => {
        api.deleteTask(this.props.todoId, this.props.task.id)
            .then(res=>{
                this.props.deleteTask(this.props.todoId, this.props.task.id)
            });

    };

    render = () => {
        let class1 = 'panel-block';
        let class2 = 'is-active';
        let status;
        if(this.props.task.status === 2)
            status = true;
        else
            status = false;

        let isTaskDone = `${class1} ${status && class2}`;

        return (
            <div className='panel-block'>
            <a className={isTaskDone}>
                <input type='checkbox' checked={status} onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true}
                         value={this.state.title}/>
                : <div className='task-text' onClick={this.activateEditMode}> {this.props.task.title}</div>}
            </a>
            <button className='delete' onClick={this.deleteTask}>X</button>
        </div>
        );
    }
}

export default TodoListTask;