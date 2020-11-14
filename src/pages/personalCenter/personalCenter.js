import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import TabBar from '../../components/TabBar'

class PersonalCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View className='container'>
                personalCenter
                <TabBar initIndex={2}/>
            </View>
         );
    }
}
 
export default PersonalCenter;