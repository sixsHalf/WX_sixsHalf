import { LOAD_DATA,CHANGE_SWITCH,VALUE_CHANGE,CHOOSE_DATE } from '../constants/AddPlan'
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
    // console.log(value)
    return {
        type:VALUE_CHANGE,
        value
    }
}

export const chooseDate = (e)=>{
    let { value } = e
    return {
        type:CHOOSE_DATE,
        value
    }
}