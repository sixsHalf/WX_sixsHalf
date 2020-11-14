import { ADD_PLAN,MINUS_PLAN } from '../constants/MakePlan'

export const addPlan = ()=>{
    return {
        type:ADD_PLAN
    }
}
export const minusPlan = ()=>{
    return {
        type:MINUS_PLAN
    }
}