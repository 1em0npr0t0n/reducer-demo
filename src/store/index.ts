import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'
import todoListReducer  from './todoList'
import type {TodoItemType} from './todoList'
export type StateType={
    count:number //加减demo
    todoList:TodoItemType //列表item add del demo
}
//引用Reducer 打造 reducer 商店
export default configureStore({
    reducer:{
        count:countReducer,//加减demo
        todoList: todoListReducer//列表item add del demo
    }
})