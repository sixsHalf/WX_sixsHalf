import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import MakePlan from '../MakePlan/MakePlan'
import TabBar from '../../components/TabBar'
import Taro from '@tarojs/taro'
// import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { 
    // Taro.navigateTo({
    //   url:'/pages/index/index'
    // })
  }

  componentWillUnmount () { }

  componentDidShow () {

   }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <TabBar initIndex={0}/>
      </View>
    )
  }
}
