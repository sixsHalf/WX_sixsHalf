import { ADD_PLAN, MINUS_PLAN } from '../constants/MakePlan'
import { ADDRESS } from '../lib/url'
import Taro from '@tarojs/taro'

export const addPlan = () => {
    return {
        type: ADD_PLAN
    }
}
export const minusPlan = () => {
    return async dispatch => {
        let res = await Taro.request({
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            url: ADDRESS + 'MINUS_PLAN'
        })
        let { data:number } = res
        console.log(number.number)
        dispatch({
            type:MINUS_PLAN,
            number
        })
    }
    // let { data:number } = obj
}