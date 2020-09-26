import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { addPlan } from '../../actions/MakePlan'

@connect(({ MakePlan }) => ({
    MakePlan
}),(dispatch) => ({
    addPlan(){
        dispatch(addPlan())
    }
}))
class MakePlan extends Component {
    constructor(props){
        super(props)
        this.test = this.test.bind(this)
    }
    render() { 
        return ( 
            <View>
                <Text onClick={this.test}>click</Text>
            </View>
         );
    }
    test(){
        this.props.addPlan()
        console.log(this.props.MakePlan)
    }
}
 
export default MakePlan;