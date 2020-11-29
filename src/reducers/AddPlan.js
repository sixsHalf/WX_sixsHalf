import { LOAD_DATA,CHANGE_SWITCH,VALUE_CHANGE,CHOOSE_DATE } from '../constants/AddPlan'

const InItState = {
    toDoPla:'待办事项',
    toDo:'',
    time:'设置待办时间',
    isOpened:false,
    date:''
}

export default function AddPlan(state = InItState,action){
    let { type,value } = action
    switch (type){
        case LOAD_DATA:
            return {
                ...state
            }
        case CHANGE_SWITCH:
            return {
                ...state,
                isOpened:!state.isOpened
            }
        case VALUE_CHANGE:
            return {
                ...state,
                toDo:value
            }
        case CHOOSE_DATE:
            return {
                ...state,
                date:value
            }
        default:
            return state
    }
}