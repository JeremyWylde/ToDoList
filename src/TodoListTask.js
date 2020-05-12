import React from 'react';

class TodoListTask extends React.Component {

    state = {
        editMode: false
    }

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    activateEditMode = () =>{
        this.setState({editMode: true})
    }

    deactivateEditMode = () =>{
        this.setState({editMode: false})
    }

    render = () => {
       // let isTaskDone = this.props.task.isDone === true ? "todoList-task-done": "todoList-task";
        let class1 = 'todoList-task';
        let class2 = 'done';
        let isTaskDone = `${class1} ${this.props.task.isDone && class2}`;

        return (
            <div className={isTaskDone}>
                <input type='checkbox' checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                ? <input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true} value={this.props.task.title}/>
                : <span onClick={this.activateEditMode}> {this.props.task.id} - {this.props.task.title} - {this.props.task.priority}</span>}
            </div>
        );
    }
}

export default TodoListTask;