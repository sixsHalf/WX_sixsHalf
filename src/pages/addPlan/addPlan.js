import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { AtInput, AtForm,AtButton  } from 'taro-ui'
import "./addPlan.scss"
import { loadState } from '../../actions/Addplan'
@connect(
    ({ AddPlan }) => ({
        AddPlan
    }),
    dispatch => ({
        loadState(){
            dispatch(loadState())
        }
    })
)

class AddPlan extends Component {
    constructor(props) {
        super(props);
        this.loadState = this.loadState.bind(this)
        this.alertCalendar = this.alertCalendar.bind(this)
    }


    componentDidMount(){
        loadState()
    }
    loadState(){
        this.props.loadState()
    }
    alertCalendar(){
        console.log('ss')
    }
    render() { 
        return (
            <View className='container'>
                <View className='content'>
                    <AtForm>
                        <AtInput
                            name='toDo'
                            title='事件'
                            type='text'
                            placeholder={this.props.AddPlan.toDo}
                        />
                        <AtInput
                            name='time'
                            title='时间'
                            type='number'
                            placeholder={this.props.AddPlan.time}
                            onClick = {this.alertCalendar}
                            disabled={true}
                        />
                    </AtForm>
                </View>

                <View className='submitBtn'>
                    <AtButton className='btn' type='primary' size='small'>保存</AtButton>
                </View>
            </View>
        );
    }
}
 
export default AddPlan;