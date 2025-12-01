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