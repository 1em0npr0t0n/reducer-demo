import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type {StateType} from '../store/index'
import { addTodo, delTodo, toggleCompleted, type UndoTodoItemType } from "../store/undoTodoList";
import { nanoid } from "nanoid";
import { ActionCreators } from "redux-undo";

const TodoList:FC=()=>{
    //从 redux store 中获取 todoList
    //const todoList=useSelector<StateType>(state=>state.todoList) as TodoItemType[]

    //redux-undo
    const todoList=useSelector<StateType>(state=>state.undoTodoList.present) as UndoTodoItemType[]
    const dispatch = useDispatch()
    function del(delId:string){
        dispatch(delTodo({id:delId}))
    }
    function toggle(toggleId:string){
        dispatch(toggleCompleted({id:toggleId}))
    }
    function add(){
        const nid = nanoid(5)
        
        dispatch(addTodo({id:nid,title:'todo'+nid,completed:true}))
    }
    //撤销
    function undo(){
       dispatch( ActionCreators.undo())
    }
    //重做
    function redo(){
        dispatch(ActionCreators.redo())
    }
    return <>
    <div>
            <div>todoList <button onClick={()=>{add()}}>add</button></div>
    <ul>
    {todoList.map(todo=>{
            const {id,title,completed} = todo
            return <li style={{color:completed?'red':'blue',textDecoration:completed?'line-through':''}} key={id}>
                <span onClick={()=>{toggle(id)}}>{title}</span>
                <button onClick={()=>{del(id)}}>del</button>
                </li>
        })}
    </ul>
    {/* 新增两个按钮 */}
    <button onClick={undo}>undo</button>
    <button onClick={redo}>redo</button>

    </div>

    </>
}
export default TodoList