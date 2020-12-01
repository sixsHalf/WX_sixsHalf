import { LOAD_DATA } from '../constants/personalCenter'
const initState = {
    headSrc:''
}
export default function PersonalCenter(state = initState,action){
    switch (action.type){
        case LOAD_DATA:
            return {
                ...state,
                headSrc:action.src
            }
        default:
            return {
                state
            }
    }
}