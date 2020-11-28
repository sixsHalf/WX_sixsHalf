import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View,Text,Button } from '@tarojs/components'
import { AtInput, AtForm,AtButton,AtCalendar,
        AtModal, AtModalContent,
        AtModalAction } from 'taro-ui'
import "./addPlan.scss"
import { loadState,changeSwitch,valueChange } from '../../actions/Addplan'
@connect(
    ({ AddPlan }) => ({
        AddPlan
    }),
    dispatch => ({
        loadState(){
            dispatch(loadState())
        },
        onClose(){
            dispatch(changeSwitch())
        },
        valueChange(value){
            dispatch(valueChange(value))
        }
    })
)

class AddPlan extends Component {
    constructor(props) {
        super(props);
        this.alertCalendar = this.alertCalendar.bind(this)
    }


    componentDidMount(){
        this.props.loadState()
    }
    alertCalendar(){
        console.log('ss')
    }
    valueChangeFnc(value){
        // console.log(e)
        this.props.valueChange(value)
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
                            placeholder={this.props.AddPlan.toDoPla}
                            value={this.props.AddPlan.toDo}
                            onChange={this.valueChangeFnc.bind(this)}
                        />
                        <AtInput
                            name='time'
                            title='时间'
                            type='number'
                            placeholder={this.props.AddPlan.time}
                            onFocus = {this.props.onClose}
                        />
                            <AtModal 
                                isOpened = {this.props.AddPlan.isOpened}
                                onCancel = {this.props.onClose}
                            >
                                <AtModalContent>
                                    <AtCalendar
                                        className='calender'
                                        onDayClick = {()=>{console.log('selectDate')}}
                                    />
                                </AtModalContent>
                                <AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>
                            </AtModal>
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