import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

export type TodoItemType = {
    id :string,
    title:string,
    completed:boolean
}
const INIT_STATE:TodoItemType[]=[
    {id:nanoid(5),title:'fdfd',completed:false},
    {id:nanoid(5),title:'你好',completed:true}
]


export const todoListSlice= createSlice({
    name:'todoList',
    initialState:INIT_STATE,
    reducers:{
        addTodo(state:TodoItemType[],action:PayloadAction<TodoItemType>){
            //return state.concat(action.payload)
            return [action.payload,...state]//前方添加
        },
        delTodo(state:TodoItemType[],action:PayloadAction<{id:string}>){
            const {id:removeId}=action.payload
            return state.filter(todo=>todo.id!==removeId)
        },
        toggleCompleted(state:TodoItemType[],action:PayloadAction<{id:string}>){
            const {id:toggleId} = action.payload
            return state.map(todo=>{
                const {id,completed} = todo
                if (toggleId!==id){
                    return todo
                }else{
                    return {...todo,completed:!completed}
                }
            })
        }

    }
})
export const {addTodo,delTodo,toggleCompleted} =todoListSlice.actions
export default todoListSlice.reducer