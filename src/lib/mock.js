const delay = require('mocker-api/lib/delay'); // 延时 模拟请求异步问题
const Mock = require('mockjs');
let Random = Mock.Random

const data = {
    'GET /api/MINUS_PLAN': (req,res)=>{
        res.status('200').json(Mock.mock({
            "number|+1": 202
        }))
    },
    'POST /api/SAVE_PLAN': (req,res)=>{
        res.status('200').json(Mock.mock({
            success: true
        }))
    },
    'GET /api/LOAD_DATA': (rep,res)=>{
        res.status('200').json(Mock.mock({
            data:Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
        }))
    }
}
module.exports = delay(data,200)