import { ADD_PLAN } from '../constants/MakePlan'

const INIT_STATE = {
    actived:true
}
export default function MakePlan(state = INIT_STATE,action){
    switch (action.type){
        case ADD_PLAN:
            return {
                ...state,
                actived:false
            }
        default:
            return state
    }
}