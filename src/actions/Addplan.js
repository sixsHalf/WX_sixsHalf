import { LOAD_DATA,CHANGE_SWITCH,
    VALUE_CHANGE,CHOOSE_DATE,
    SAVE_PLAN } from '../constants/AddPlan'
import { ADDRESS } from '../lib/url'
import Taro from '@tarojs/taro'
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

export const savePlan = (toDo,date)=>{
    return async dispatch =>{
        let res  = await Taro.request({
            url:ADDRESS + 'SAVE_PLAN',
            method:'POST',
            data:{
                toDo,
                date
            }
        })
        let { data:success } = res
        dispatch({
            type:SAVE_PLAN,
            success
        })
    }
}