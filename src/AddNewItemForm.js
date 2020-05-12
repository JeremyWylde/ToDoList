import React from 'react';

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        tittle: ''
    }

    onAddItemClick = () => {
        let newText = this.state.tittle;
        if(newText === '')
            this.setState({error: true})
        else{
            this.setState({error: false, tittle: ''});
            this.props.addItem(newText);
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
                this.props.addItem(newText);
            }
        }
    }


    render = () => {
        let classForBorder = this.state.error === true ? 'error': "";
        return (

                <div className="todoList-newTaskForm">
                    <input className={classForBorder} type="text" placeholder="New item name"
                           onChange={this.onChangeInput} onKeyPress={this.onEnterPress}
                           value={this.state.tittle}/>
                    <button onClick={this.onAddItemClick}>Add</button>
                </div>

        );
    }
}

export default AddNewItemForm;