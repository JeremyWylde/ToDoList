import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.task.map(task => <TodoListTask task={task}
                                                                       changeStatus = {this.props.changeStatus} />);
        return (
            <div className="todoList-task">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;