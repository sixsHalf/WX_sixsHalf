import { LOAD_DATA,CHANGE_SWITCH,VALUE_CHANGE,CHOOSE_DATE,SAVE_PLAN } from '../constants/AddPlan'

const InItState = {
    toDoPla:'待办事项',
    toDo:'',
    time:'设置待办时间',
    isOpened:false,
    date:'',
    saved:false
}

export default function AddPlan(state = InItState,action){
    switch (action.type){
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
                toDo:action.value
            }
        case CHOOSE_DATE:
            return {
                ...state,
                date:action.value
            }
        case SAVE_PLAN:
            return {
                ...state,
                saved:action.success.success
            }
        default:
            return state
    }
}