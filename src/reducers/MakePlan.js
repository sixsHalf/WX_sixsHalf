import { ADD_PLAN,MINUS_PLAN } from '../constants/MakePlan'

const INIT_STATE = {
    actived:123,
    str1: 'test',
    current:0,
    number:0
}
export default function MakePlan(state = INIT_STATE,action){
    switch (action.type){
        case ADD_PLAN:
            return {
                ...state,
                actived:3333
            }
        case MINUS_PLAN:
            return {
                ...state,
                number:action.number.number
            }
        default:
            return {
                ...state,
                number:123
            }
    }
}