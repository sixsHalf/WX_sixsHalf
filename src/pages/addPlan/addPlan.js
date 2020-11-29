import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View,Text,Button } from '@tarojs/components'
import { AtInput, AtForm,AtButton,AtCalendar,
        AtModal, AtModalContent,
        AtModalAction } from 'taro-ui'
import "./addPlan.scss"
import { loadState,changeSwitch,valueChange,chooseDate } from '../../actions/Addplan'
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
        },
        chooseDate(e){
            dispatch(chooseDate(e))
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
    chooseDateFnc(e){
        this.props.chooseDate(e)
    }
    render() { 
        return (
            <View className='container'>
                <View className='content'>
                    <AtForm className = 'formX'>
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
                            value = {this.props.AddPlan.date}
                        />
                            <AtModal 
                                isOpened = {this.props.AddPlan.isOpened}
                            >
                                <AtModalContent>
                                    <AtCalendar
                                        className='calender'
                                        onDayClick = {this.chooseDateFnc.bind(this)}
                                    />
                                </AtModalContent>
                                <AtModalAction> <Button onClick={this.props.onClose}>取消</Button> <Button onClick={this.props.onClose}>确定</Button> </AtModalAction>
                            </AtModal>
                            <AtButton className='submitBtn' type='primary' size='small'>保存</AtButton>
                    </AtForm>
                </View>


            </View>
        );
    }
}
 
export default AddPlan;