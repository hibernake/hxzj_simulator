
// 根据生产者和范围，计算作用对象
function get_targets(heroes, cur_id, range, check_targets) {
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
        let q = []
        for (let j in p[i]){
            q[j] = heroes[p[i][j]]
        }
        let s = check_targets(q)
        if (s.length>0) {
            return s
        }
    }
}

// 源对目标造成伤害
// 同时增加能量
function do_damages(source, targets, ratio, record) {
    'use strict'
    function do_damage_single(target){
        let damage = parseInt(source.att * ratio / 100)
        target.get_damage(damage)
    }
    source.add_en(1)
    let text = ''
    for (let i in targets) {
        let target = targets[i]
        do_damage_single(target)
        target.add_en(1)
        
        text += source.kind + '攻击了' + target.kind + '\n'
    }
    record(text)
}

function do_action(heroes, cur_id, record) {
    'use strict'
    let skill = false
    if (skill) {
        // 使用技能
    }
    else{
        // 平A
        let targets = get_targets(heroes, cur_id, 'single', function(p){
            return p
        })
        do_damages(heroes[cur_id], targets, 100, record)
    }
}