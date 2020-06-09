import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render = () => {
        let tasksElements = this.props.task.map(task =>

            <TodoListTask todoId={this.props.todoId} key={this.props.todoId} task={task}
                          changeTitle={this.props.changeTitle} changeStatus={this.props.changeStatus}
            deleteTask={this.props.deleteTask}/>

        );
        return (
            <div className="panel">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;