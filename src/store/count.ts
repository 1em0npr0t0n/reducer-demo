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