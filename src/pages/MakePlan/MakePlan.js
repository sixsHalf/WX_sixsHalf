import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { addPlan,minusPlan } from '../../actions/MakePlan'
import './MakePlan.scss'
import TabBar from '../../components/TabBar'
//props接收了返回来的对象
@connect(
    ({ MakePlan }) => ({
        MakePlan
    }),
    (dispatch) => ({
        addPlan(){
            dispatch(addPlan())
        },
        minusPlan(){
            dispatch(minusPlan())
        }
    })
)
class MakePlan extends Component { 
    constructor(props){
        super(props)
        this.test = this.test.bind(this)
        this.minus = this.minus.bind(this)
    }
    render() { 
        return ( 
            <View className='MakePlan'>
                <View className='add' onClick={this.test}>add</View>
                <View onClick={this.minus}>minusPlan</View>
                <TabBar initIndex = {1}/>
            </View>
         );
    }
    test(){
        this.props.addPlan()
        console.log(this.props.MakePlan.actived)
    }
    minus(){
        this.props.minusPlan()
        console.log(this.props.MakePlan.str1)
    }
}
 
export default MakePlan;