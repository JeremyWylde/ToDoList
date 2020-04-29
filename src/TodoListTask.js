import React from 'react';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(e.currentTarget.checked, this.props.task);
    }

    render = () => {
       // let isTaskDone = this.props.task.isDone === true ? "todoList-task-done": "todoList-task";
        let class1 = 'todoList-task';
        let class2 = 'done';
        let isTaskDone = `${class1} ${this.props.task.isDone && class2}`;

        return (
            <div className={isTaskDone}>
                <input type='checkbox' checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                <span>{this.props.task.title} - {this.props.task.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;