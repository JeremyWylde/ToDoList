import React from 'react';

class TodoListTask extends React.Component {

    state = {
        editMode: false
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.todoId, this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.todoId ,this.props.task.id, e.currentTarget.value)
    };

    activateEditMode = () =>{
        this.setState({editMode: true})
    };

    deactivateEditMode = () =>{
        this.setState({editMode: false})
    };

    deleteTask = () => {
        this.props.deleteTask(this.props.todoId, this.props.task.id)
    };

    render = () => {
       // let isTaskDone = this.props.task.isDone === true ? "todoList-task-done": "todoList-task";
        let class1 = 'panel-block';
        let class2 = 'is-active';
        let isTaskDone = `${class1} ${this.props.task.isDone && class2}`;

        return (
            <div className='panel-block'>
            <a className={isTaskDone}>
                <input type='checkbox' checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true} value={this.props.task.title}/>
                : <div className='task-text' onClick={this.activateEditMode}> {this.props.task.title}</div>}
            </a>
            <button className='delete' onClick={this.deleteTask}>X</button>
        </div>
        );
    }
}

export default TodoListTask;