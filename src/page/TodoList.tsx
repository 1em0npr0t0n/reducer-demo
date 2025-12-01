import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type {StateType} from '../store/index'
import { addTodo, delTodo, toggleCompleted, type TodoItemType } from "../store/todoList";
import { nanoid } from "nanoid";

const TodoList:FC=()=>{
    const todoList=useSelector<StateType>(state=>state.todoList) as TodoItemType[]
    const dispath = useDispatch()
    function del(delId:string){
        dispath(delTodo({id:delId}))
    }
    function toggle(toggleId:string){
        dispath(toggleCompleted({id:toggleId}))
    }
    function add(){
        const nid = nanoid(5)
        
        dispath(addTodo({id:nid,title:'todo'+nid,completed:true}))
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
    </div>

    </>
}
export default TodoList