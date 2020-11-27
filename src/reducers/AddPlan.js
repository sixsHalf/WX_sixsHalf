import { LOAD_DATA } from '../constants/AddPlan'

const InItState = {
    toDo:'待办事项',
    time:'设置待办时间'
}

export default function AddPlan(state = InItState,action){
    switch (action.type){
        case LOAD_DATA:
            return {
                ...state
            }
        default:
            return state
    }
}