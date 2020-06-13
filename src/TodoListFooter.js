import React from 'react';

class TodoListFooter extends React.Component {

    state = {
        isHidden: false
    };

    onAllFilterClick = () => {
        this.props.changeFilter(this.props.todoId ,"All")
    };

    onCompletedFilterClick = () => {
        this.props.changeFilter(this.props.todoId ,"2")
    };

    onActiveFilterClick = () => {
        this.props.changeFilter(this.props.todoId ,"0")
    };

    onShowFiltersClick = () => {
        this.setState({isHidden: true})
    };

    onHideFiltersClick = () => {
        this.setState({isHidden: false})
    };

    render = (props) => {
        let classForAll = this.props.filterValue === "All" ? "is-active" : "";
        let classForCompleted = this.props.filterValue === "2" ? "is-active" : "";
        let classForActive = this.props.filterValue === "0" ? "is-active" : "";

        return (
            <div className="tabs is-centered">
                { !this.state.isHidden && <ul>
                <li onClick={this.onAllFilterClick} className={classForAll}><a>All</a></li>
                <li onClick={this.onCompletedFilterClick} className={classForCompleted}><a>Completed</a></li>
                <li onClick={this.onActiveFilterClick}  className={classForActive}><a>Active</a></li>
                </ul>}
               {/* {!this.state.isHidden && <span onClick={this.onShowFiltersClick}>hide</span> }
                {this.state.isHidden && <span onClick={this.onHideFiltersClick}>show</span>}*/}
            </div>
        );
    }
}

export default TodoListFooter;