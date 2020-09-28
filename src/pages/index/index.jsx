import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import MakePlan from '../MakePlan/MakePlan'
import TabBar from '../../components/TabBar'
// import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <MakePlan />
        <TabBar/>
      </View>
    )
  }
}
