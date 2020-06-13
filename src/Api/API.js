import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers:{
        "API-KEY": 'cf1841cd-6d1a-4d5e-ab77-95df9a8ef2a0'
    }
});

export const api = {
    createTask(toDolistID,title){
        return instance.post(`todo-lists/${toDolistID}/tasks`,{title})
    },
    addToDoList(title){
        return instance.post('todo-lists',{title})
    },
    getToDoLists(){
        return instance.get('todo-lists')
    },
    deleteToDoList(toDoListId){
        return instance.delete(`todo-lists/{${toDoListId}}`)
    },
    getTasks(toToListId){
        return instance.get(`todo-lists/${toToListId}/tasks`)
    },
    deleteTask(toDoListId,taskId){
        return  instance.delete(`todo-lists/{${toDoListId}}/tasks/{${taskId}}`)
    },
    updateTaskStatus(toDoListId, taskId, title, status){
        return instance.put(`todo-lists/{${toDoListId}}/tasks/{${taskId}}`,{title, status})
    },
    updateTaskTitle(toDoListId, taskId, title){
        return instance.put(`todo-lists/{${toDoListId}}/tasks/{${taskId}}`,{
            title
        })
    },
    updateToDoListTitle(toDoListId, title){
        return instance.put(`/todo-lists/${toDoListId}`, {
            title
        })
    }
};