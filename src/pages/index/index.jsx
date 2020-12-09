import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import TabBar from '../../components/TabBar'
import Taro from '@tarojs/taro'
import './index.scss'

@connect(
  ({ Tools }) => ({
    Tools
  }),
  dispatch =>({

  })
)

export default class Tools extends Component {

  componentWillMount () { 
    
  }

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
    console.log(this.props.Tools)
    return (
      <View className='container'>
        <View className='toolsBox'>
          {
            this.props.Tools.toolsList.map((item,index)=>{
              return (
                <View className = 'toolItem'>{item}</View>
              )
            })
          }
        </View>
        <TabBar initIndex={0}/>
      </View>
    )
  }
}
