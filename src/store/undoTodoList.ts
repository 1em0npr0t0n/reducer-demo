import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

export type UndoTodoItemType = {
    id :string,
    title:string,
    completed:boolean
}
const INIT_STATE:UndoTodoItemType[]=[
    {id:nanoid(5),title:'unundo',completed:false},
    {id:nanoid(5),title:'reredo',completed:true}
]

export const undoTodoListSlice= createSlice({
    name:'undoTodoList',
    initialState:INIT_STATE,
    reducers:{
        addTodo(state:UndoTodoItemType[],action:PayloadAction<UndoTodoItemType>){
            //return state.concat(action.payload)
            return [action.payload,...state]//前方添加
        },
        delTodo(state:UndoTodoItemType[],action:PayloadAction<{id:string}>){
            const {id:removeId}=action.payload
            return state.filter(todo=>todo.id!==removeId)
        },
        toggleCompleted(state:UndoTodoItemType[],action:PayloadAction<{id:string}>){
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

export const {addTodo,delTodo,toggleCompleted} =undoTodoListSlice.actions
export default undoTodoListSlice.reducer