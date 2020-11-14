import { ADD_PLAN,MINUS_PLAN } from '../constants/MakePlan'

const INIT_STATE = {
    actived:true,
    str1: 'test',
    current:0
}
export default function MakePlan(state = INIT_STATE,action){
    switch (action.type){
        case ADD_PLAN:
            return {
                ...state,
                actived:false
            }
        case MINUS_PLAN:
            return {
                ...state,
                str1:'changed' + state.str1
            }
        default:
            return state
    }
}