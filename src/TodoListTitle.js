import React from 'react';
import {api} from "./Api/API";

class TodoListHeader extends React.Component {

    state ={
        editMode: false,
        title: this.props.title
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        api.updateToDoListTitle(this.props.todoId,this.state.title)
            .then(res=>{
                this.props.changeToDoListTitle(this.props.todoId, this.state.title);
                this.setState({
                    editMode: false
                })
            });
    };

    onTitleChanged = (e) =>{
        this.setState({title: e.currentTarget.value})
    };

    render = () => {
        return (
            <div className="todoList-header">
                {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode} autoFocus={true} onChange={this.onTitleChanged}
                             value={this.state.title}/>
                :<h3 className="todoList-header__title" onClick={this.activateEditMode}>{this.props.title}</h3>
                }
            </div>
        );
    }
}

export default TodoListHeader;