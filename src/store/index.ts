import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import todoListReducer  from './todoList'
import undoable, { excludeAction, type StateWithHistory } from 'redux-undo';
import type {TodoItemType} from './todoList'
import undoTodoListReducer,{  type UndoTodoItemType } from './undoTodoList';
export type StateType={
    count:number //加减demo

    //列表item add del demo
    todoList:TodoItemType[]

    undoTodoList:StateWithHistory<UndoTodoItemType[]>
}
//引用Reducer 打造 reducer 商店
export default configureStore({
    reducer:{
        count:countReducer,//加减demo
        //列表item add del demo
        todoList: todoListReducer,
        
        //带有undoable redux-undo 撤销/重做
        undoTodoList:undoable(undoTodoListReducer,{limit:20,filter:excludeAction(['undoTodoList/toggleCompleted'])})
    }
})