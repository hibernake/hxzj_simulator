
// 根据生产者和范围，计算作用对象
function get_targets(cur_id, range, check_targets) {
    // 根据目标的优先级计算一个目标队列
    'use strict'
    let p = new Array()
    if (range=='all') {
        // 全体
        switch(cur_id){
            case 1: case 2: case 3: case 4:
                p = [[5, 6, 7, 8]]
                break
            case 5: case 6: case 7: case 8:
                p = [[1, 2, 3, 4]]
                break
        }
    }
    else if (range=='col') {
        // 贯穿
        switch (cur_id) {
            case 1: case 3:
                p = [[5, 7], [6, 8]]
                break
            case 2: case 4:
                p = [[6, 8], [5, 7]]
                break
            case 5: case 7:
                p = [[1, 3], [2, 4]]
                break
            case 6: case 8:
                p = [[2, 4], [1, 3]]
                break
        }
    }
    else if (range=='row') {
        // 横扫
        switch (cur_id) {
            case 1: case 2: case 3: case 4: 
                p = [[5, 6], [7, 8]]
                break
            case 5: case 6: case 7: case 8: 
                p = [[1, 2], [3, 4]]
                break
        }
    }
    else if (range=='single') {
        // 单体
        switch (cur_id) {
            case 1: case 3:
                p = [[5], [7], [6], [8]]
                break
            case 2: case 4:
                p = [[6], [8], [5], [7]]
                break
            case 5: case 7:
                p = [[1], [3], [2], [4]]
                break
            case 6: case 8:
                p = [[2], [4], [1], [3]]
                break
        }
    }
    
    // 检验目标并返回
    for (let i in p) {
        let s = check_targets(p[i])
        if (s.length>0) {
            return s
        }
    }
}

function do_action(heros, cur_id, record) {
    'use strict'
    let skill = false
    if (skill) {
        // 使用技能
    }
    else{
        // 平A
        let targets = get_targets(cur_id, 'single', function(p){
            return p
        })
        let text = ''
        for (i in targets) {
            //code
            text += cur_id + '攻击了' + i + '\n'
        }
    }
}