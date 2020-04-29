import React from 'react';

class TodoListHeader extends React.Component {

    state = {
        error: false,
        tittle: ''
    }

    onAddTaskClick = () => {
        let newText = this.state.tittle;
        if(newText === '')
            this.setState({error: true})
        else{
            this.setState({error: false, tittle: ''});
            this.props.addTask(newText);
        }
    }

    onChangeInput = (e) => {
        let newTittle = e.currentTarget.value;
        this.setState({
            error: false,
            tittle: newTittle
        })
    }

    onEnterPress = (e) => {
        if(e.key === "Enter"){
            let newText = this.state.tittle;
            if(newText === '')
                this.setState({error: true})
            else{
                this.setState({error: false, tittle: ''});
                this.props.addTask(newText);
            }
        }
    }


    render = () => {
        let classForBorder = this.state.error === true ? 'error': "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={classForBorder} type="text" placeholder="New task name"
                           onChange={this.onChangeInput} onKeyPress={this.onEnterPress}
                           value={this.state.tittle}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;