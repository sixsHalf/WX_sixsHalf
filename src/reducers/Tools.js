import { LOAD_DATA } from "../constants/AddPlan";

const INIT_STATE = {
    toolsList:['秒表','倒计时'],
    test:'ss'
}
export default function Tools(state=INIT_STATE,action){
    switch (action.type){
        default:
            return state
    }
}