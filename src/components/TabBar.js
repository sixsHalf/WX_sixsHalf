import React, { Component } from 'react';
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import Taro from '@tarojs/taro'

class TabBar extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: this.props.initIndex
        }
    } 
    handleClick (value) {
        this.setState({
            current: value
        })
        if(value == 0){
            this.setState({
                current: value
            })
            Taro.reLaunch({
                url:'/pages/index/index'
            })
        }
        if(value == 1){
            Taro.reLaunch({
                url:'/pages/MakePlan/MakePlan'
            })
        }
        if(value == 2){
            Taro.reLaunch({
                url:'/pages/personalCenter/personalCenter'
            })
        }
    }
     
    render() { 
        return ( 
            <View>
               <AtTabBar
                    fixed
                    tabList={[
                        { title: '工具箱', iconType: 'bullet-list', text: 'new' },
                        { title: 'MakePlan', iconType: 'camera' },
                        { title: '个人中心', iconType: 'folder', text: '100', max: 99 }
                    ]}
                    onClick={this.handleClick.bind(this)}
                    current={this.state.current}
                /> 
            </View>
         );
    }
}
 
export default TabBar;