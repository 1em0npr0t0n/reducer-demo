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