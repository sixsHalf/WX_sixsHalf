import { combineReducers } from 'redux'
import MakePlan from './MakePlan'
import AddPlan from './AddPlan'
import PersonalCenter from './personalCenter'
import Tools from './Tools'

export default combineReducers({
    MakePlan,
    AddPlan,
    PersonalCenter,
    Tools
})