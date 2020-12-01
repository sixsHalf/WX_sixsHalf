import Taro from '@tarojs/taro'
import { ADDRESS } from '../lib/url'
import { LOAD_DATA } from '../constants/personalCenter'

export const loadData = ()=>{
    return async dispatch =>{
        let res = await Taro.request({
            url:ADDRESS + 'LOAD_DATA',
            method:'GET'
        })
        let {data:data} = res
        let src = data.data
        dispatch({
            type:LOAD_DATA,
            src
        })
    }
}