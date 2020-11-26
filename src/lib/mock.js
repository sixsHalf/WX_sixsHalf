const delay = require('mocker-api/lib/delay'); // 延时 模拟请求异步问题
const Mock = require('mockjs');

const data = {
    'GET /api/MINUS_PLAN': (req,res)=>{
        res.status('200').json(Mock.mock({
            "number|+1": 202
        }))
    },
    'GET /proxy1': (req,res)=>{
        res.status('200').json(Mock.mock({
            "number|+1": 202
        }))
    }
    
}
module.exports = delay(data,200)