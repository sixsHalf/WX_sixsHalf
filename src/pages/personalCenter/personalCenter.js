import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import TabBar from '../../components/TabBar'
import { AtAvatar } from 'taro-ui'
import './personalCenter.scss'
import { loadData } from '../../actions/personalCenter'

@connect(
    ({PersonalCenter}) =>({
        PersonalCenter
    }),
    dispatch => {
        return {
            loadData(){
                dispatch(loadData())
            }
        }
    }
)

class PersonalCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this.props.loadData()
    }
    render() { 
        return ( 
            <View className='container'>
                <View  className='head'>
                    <AtAvatar image={this.props.PersonalCenter.headSrc}></AtAvatar>
                </View>
                <View className='statistics'></View>
                <TabBar initIndex={2}/>
            </View>
         );
    }
}
 
export default PersonalCenter;