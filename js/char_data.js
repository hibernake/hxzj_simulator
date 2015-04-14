
const CHAR_DATAS = {
    '玄武':{
        name:'玄武', type:'盾', hp: 800, att:800, def:800,
        skill1:['横扫', 500], skill2:['横扫', 500]
    },
    '纯情小湿婆':{
        name:'纯情小湿婆', type:'盾', hp: 27380, att: 537, def: 880
    },
    '天邪鬼':{
        name:'天邪鬼', type:'剑', hp: 26380, att: 1070, def: 1123,
        skill1:['全体', 200]},
    '花嫁苏妲己':{
        name:'花嫁苏妲己', type:'剑'},
    '孙悟空':{
        name:'孙悟空', type:'剑'},
    '赵公萌':{
        name:'赵公萌', type:'剑'
    },
    '钟傀姬':{
        name:'钟傀姬', type:'剑', hp:20000, att: 1400, def: 800,
        skill1:['all', 230], skill2:['col', 300]
    }, 
    '花嫁苏妲己':{
        name:'花嫁苏妲己', type:'剑'
    },
    '极裕仙君':{
        name:'极裕仙君', type:'弓', hp: 24023, att: 1257, def: 901,
        skill1:['all', 325], skill2:['all', 345]
    },
    '应龙':{
        name:'应龙', type:'弓', hp: 17386, att: 756, def: 900, 
    },
}

function get_chars(func){
    result = new Array()
    for (i in CHAR_DATAS) {
        if (func(CHAR_DATAS[i])) {
            result.push(CHAR_DATAS[i])
        }
    }
    return result
}

function get_charnames(func){
    result = new Array()
    for (i in CHAR_DATAS) {
        if (func(CHAR_DATAS[i])) {
            result.push(i)
        }
    }
    return result
}


function get_charnames_by_type(typename) {
    result = get_charnames(function(a){
        if (a.type==typename) {
            return true
        }
        else{
            return false
        }
    })
    return result
}