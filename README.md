# Redux-Demo

## react-redux
 创建 createSlice 导出 reducer
 创建 configureStore 导入 reducer
 useSelector 查询Store
 useDispatch 配发(运行 action)->action
 
 
 
### store/index.ts 
```js
import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

export type StateType={
    count:number
}
//引用Reducer 打造 reducer 商店
export default configureStore({
    reducer:{
        count:countReducer
    }
})
```
### store/count.ts 
```js
import {createSlice} from '@reduxjs/toolkit'

//初始化 val
const INIT_STATE :number = 100

//创建 reducer
export const countSlice = createSlice({
    name:'count', //模块的名字（redux store 默认可以拆分的模块）
    initialState:INIT_STATE,
    reducers:{
        increase(state:number){
            return state+1
        },
        decrease(state:number){
            return state-1 //返回的是 新state （元数据不变）
        }
    }
})
//导出actions
export const{increase,decrease}= countSlice.actions
//导出reducer
export default countSlice.reducer
```
### Count.tsx  组件
```js
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux"; //获取查询器 和 发配器
import { decrease, increase } from "./store/count"; //获取 action
import type {StateType} from './store/index' //导入数据类型
const Count:FC = ()=>{
    
    const count = useSelector<StateType>(state=>state.count) //查询数据
    const dispatch = useDispatch()//配发器
    return <div>
        <span>
            count <>{count}</>
        </span>
        {/* 配发器执行action */}
        <button onClick={()=>{dispatch(decrease())}}>-</button>
        <button onClick={()=>{dispatch(increase())}}>+</button>
    </div>
}
export default Count
```
### main.tsx 
```js
import { Provider } from 'react-redux' //引入 redux
import store from './store/index.ts' //引入 reducer商店
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*  Provider包裹App 传入store <Provider store={store}><App /></Provider> */}
    <Provider store={store}><App /></Provider>
    
  </StrictMode>,
)
```
### App.tsx
```js
import Count from "./Count"

function App() {
  return (
    <>
      <h1>Redux demo</h1>
      <Count/>
    </>
  )
}

export default App

```
