import {createStore} from "redux";
import reducer from "./reducer";

/*const initialState = {
    todolists: [
        {
            id: 0, title: "Js", tasks: [
                {id: 0, title: 'css', isDone: false, priority: 'low'},
                {id: 1, title: 'asdfg', isDone: true, priority: 'mid'},],
            filter: 'All'
        },
        {
            id: 1, title: "SomeShit", tasks: [
                {id: 0, title: 'cffss', isDone: true, priority: 'mid'},
                {id: 1, title: 'csees', isDone: false, priority: 'low'},
            ],
            filter: 'Completed'
        },
        {
            id: 2, title: "asdf", tasks: [
                {id: 0, title: 'csryes', isDone: false, priority: 'high'},
                {id: 1, title: 'cnnnss', isDone: true, priority: 'low'},
            ],
            filter: 'Active'
        }
    ],
    newTodoLisId: 2,
   // filterVal: "All",
};*/

/*const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TODOLIST':
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist],
                newTodoLisId: state.newTodoLisId + 1
            };
        case 'DELETE_TODOLIST':
            return {
              ...state,
              todolists: state.todolists.filter(todo =>{
                  if(todo.id !== action.todolistId)
                      return todo;
              })
            };
        case "ADD_TASK":
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if (todo.id !== action.todolistId) {
                        return todo
                    } else {
                        return {...todo, tasks: [...todo.tasks, action.newTask]}
                    }
                })
            };
        case 'DELETE_TASK':
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if(todo.id !== action.todolistId)
                        return todo;
                    else {
                        return {
                            ...todo, tasks: todo.tasks.filter(task =>{
                                if(task.id !== action.taskId)
                                    return todo;
                            })
                        }
                    }
                })
            };
        case "CHANGE_TASK":
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if (todo.id !== action.todolistId) {
                        return todo
                    } else {
                        return {
                            ...todo, tasks: todo.tasks.map(task => {
                                if (task.id !== action.taskId) {
                                    return task
                                } else {
                                    return action.newTask
                                }
                            })
                        }
                    }
                })
            };
        case "CHANGE_FILTER":
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if(todo.id !== action.todolistId)
                        return todo;
                    else{
                        return{
                            ...todo, filter: action.newFilterValue
                        }
                    }
                })
            };
        case "CHANGE_STATUS":
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if (todo.id !== action.todolistId) {
                        return todo
                    } else {
                        return {
                            ...todo, tasks: todo.tasks.map(task => {
                                if (task.id !== action.taskId) {
                                    return task
                                } else {
                                    return {
                                        ...task, isDone: action.isDone
                                    }
                                }
                            })
                        }
                    }
                })
            };
        default:
            return state
    }
};*/


const store = createStore(reducer);
export default store;