import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { addPlan,minusPlan } from '../../actions/MakePlan'
import './MakePlan.scss'
import TabBar from '../../components/TabBar'
import { ADD_PLAN,MINUS_PLAN } from '../../constants/MakePlan'
import Taro from '@tarojs/taro'
//props接收了返回来的对象
@connect(
    ({ MakePlan }) => ({
        MakePlan
    }),
    (dispatch) => ({
        addPlan(){
            dispatch(addPlan())
        },
        ss(){
            dispatch(minusPlan())
        }
    })
)
class MakePlan extends Component { 
    constructor(props){
        super(props)
        this.addPlan = this.addPlan.bind(this)
        this.minus = this.minus.bind(this)
    }
    componentDidUpdate(){
        console.log(this.props.MakePlan.number)
    }
    render() { 
        return ( 
            <View className='MakePlan'>
                <View className='add' onClick={this.addPlan}>add</View>
                <View onClick={this.minus}>minusPlan</View>
                <View>{this.props.MakePlan.number}</View>
                <TabBar initIndex = {1}/>
            </View>
         );
    }
    addPlan(){
        Taro.navigateTo({
            url:'/pages/addPlan/addPlan'
        })
    }
    minus(){
        this.props.ss()
    }
}
 
export default MakePlan;