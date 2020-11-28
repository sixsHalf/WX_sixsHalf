import { LOAD_DATA,CHANGE_SWITCH,VALUE_CHANGE } from '../constants/AddPlan'
export const loadState = ()=>{
    return {
        type:LOAD_DATA
    }
}
export const changeSwitch = ()=>{
    return {
        type:CHANGE_SWITCH
    }
}

export const valueChange = (value)=>{
    console.log(value)
    return {
        type:VALUE_CHANGE,
        value
    }
}