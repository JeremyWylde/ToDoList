import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    /*constructor(props) {
        this.props = {};
        this.props = "Css";
        this.props = true;
    }*/
    render = () => {
        let tasksElements = this.props.tasks.map(task => <TodoListTask title={task.title} isDone={task.isDone} priority={task.priority}/>);
        return (
            <div className="todoList-task">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;