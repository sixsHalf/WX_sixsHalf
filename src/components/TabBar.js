import React, { Component } from 'react';
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'

class TabBar extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0
        }
    }
    handleClick (value) {
        this.setState({
            current: value
        })
    }
     
    render() { 
        return ( 
            <View>
               <AtTabBar
                    fixed
                    tabList={[
                        { title: '待办事项', iconType: 'bullet-list', text: 'new' },
                        { title: '拍照', iconType: 'camera' },
                        { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
                    ]}
                    onClick={this.handleClick.bind(this)}
                    current={this.state.current}
                /> 
            </View>
         );
    }
}
 
export default TabBar;