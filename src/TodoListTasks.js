import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.task.map(task => <TodoListTask  key={task.id} task={task} changeTitle={this.props.changeTitle}
                                                                       changeStatus = {this.props.changeStatus} />);
        return (
            <div className="todoList-task">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;