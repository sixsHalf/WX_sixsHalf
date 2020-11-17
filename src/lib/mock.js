const delay = require('mocker-api/lib/delay'); // 延时 模拟请求异步问题
const Mock = require('mockjs');

const data = {
    'GET /proxy': (req,res)=>{
        res.status(200).json(Mock.mock({
            '@id':1000
        }))
    },
    'GET /proxy': (req,res)=>{
        res.status(200).json(Mock.mock({
            '@id':1001
        }))
    }
    
}
module.exports = delay(data,2000)