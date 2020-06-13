export const ADD_TODOLIST = 'reducer/ADD-TODOLIST';
export const DELETE_TODOLIST = 'DELETE_TODOLIST';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const SET_TODOLIST = 'SET_TODOLIST';
export const SET_TASKS = 'SET_TASKS';
export const CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE';


const initialState = {
    todolists: [
        /*{
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
        }*/
    ],
    newTodoLisId: 2,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOLIST:
            return {
                ...state,
                todolists: action.todolists.map(tl=>({...tl,tasks: []}))
            };
        case SET_TASKS:
            return {
                ...state,
                todolists: state.todolists.map(tl=>{
                    if(tl.id !== action.todolistsId)
                        return tl;
                    else{
                        return {...tl, tasks: action.allTasks}
                    }
                })
            };
        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist],
                newTodoLisId: state.newTodoLisId + 1
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(todo =>{
                    if(todo.id !== action.todolistId)
                        return todo;
                })
            };
        case ADD_TASK:
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if (todo.id !== action.todolistId) {
                        return todo
                    } else {
                        return {...todo, tasks: [...todo.tasks, action.newTask]}
                    }
                })
            };
        case DELETE_TASK:
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
        case CHANGE_TASK:
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
        case CHANGE_FILTER:
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
        case CHANGE_STATUS:
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
                                        ...task, status: action.isDone
                                    }
                                }
                            })
                        }
                    }
                })
            };
        case CHANGE_TODOLIST_TITLE:
            return {
                ...state, todolists: state.todolists.map(todo => {
                    if(todo.id !== action.todoListId){
                        return todo
                    } else{
                        return{
                            ...todo, title: action.title
                        }
                    }
                })
            };
        default:
            return state
    }
};

export const changeTaskAC = (todolistId, taskId, newTask) => {
  return {type: CHANGE_TASK,
      todolistId,
      taskId,
      newTask,}
};
export const addTaskAC = (todolistId, newTask) => {
  return {type: ADD_TASK,
      newTask,
      todolistId}
};
export const deleteTaskAC = (todolistId, taskId) => {
  return {type: DELETE_TASK,
      todolistId,
      taskId}
};
export const changeFilterAC = (todolistId, filterValue) => {
  return { type: CHANGE_FILTER,
      todolistId,
      newFilterValue: filterValue}
};
export const changeStatusAC = (todolistId, taskId, isDone) => {
  return { type: CHANGE_STATUS,
      todolistId,
      taskId,
      isDone}
};
export const addTodolistAC = (newTodolist) => {
  return {
      type: ADD_TODOLIST,
      newTodolist
  }
};
export const deleteTodolistAC = (todolistId) => {
  return {
      type: DELETE_TODOLIST,
      todolistId
  }
};
export const setToDoListsAC = (todolists) => {
  return {
      type: SET_TODOLIST,
      todolists
  }
};
export const setTasksAC = (allTasks,todolistsId) => {
  return {
      type: SET_TASKS,
      allTasks,
      todolistsId,
  }
};
export const changeToDoListTitleAC = (todoListId, title) => {
  return {
      type: CHANGE_TODOLIST_TITLE,
      todoListId,
      title
  }
};


export default reducer;