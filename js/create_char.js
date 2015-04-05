
const TYPE_VALUE = ['盾', '弓', '剑']
const SHIELD_KIND = ['姥姥', '纯情小湿婆', '玄武']
const BOW_KIND = ['卡莉', '应龙', '小湿婆']
const SWORD_KIND = ['花嫁苏妲己', '赵公萌']

const BASE_HP = {
    '姥姥' : 20357, 
    '纯情小湿婆' : 27380, 
    '玄武' : 20000,
    '卡莉' : 10000,
    '应龙' : 17386,
    '小湿婆' : 10000,
    '花嫁苏妲己' : 20000,
    '赵公萌' : 17000
}

const BASE_ATTACK = {
    '姥姥' : 638, 
    '纯情小湿婆' : 10, 
    '玄武' : 20,
    '卡莉' : 10,
    '应龙' : 16,
    '小湿婆' : 10,
    '花嫁苏妲己' : 20,
    '赵公萌' : 17
}

const BASE_DEFENCE = {
    '姥姥' : 1000, 
    '纯情小湿婆' : 100, 
    '玄武' : 200,
    '卡莉' : 100,
    '应龙' : 160,
    '小湿婆' : 100,
    '花嫁苏妲己' : 200,
    '赵公萌' : 170
}

const BASE_ATTR = {
    '姥姥': [20357, 638, 1085]
}

function set_options(aselect, values){
    aselect.options.length = 0
    for(var i in values){
        aselect.add(new Option(values[i], values[i]))
    }
}


function add_char(parent, num) {
    //添加一个角色
    var type_select = document.createElement('select')
    set_options(type_select, TYPE_VALUE)
    
    var kind_value = ['姥姥', '纯情小湿婆', '玄武']
    var kind_select = document.createElement('select')
    set_options(kind_select, kind_value)
    
    var rank_select = document.createElement('select')
    set_options(rank_select, ['灵'])
    
    var level_select = document.createElement('select')
    set_options(level_select, ['55'])
    
    //type_select.setAttribute('id', 'type'+num)
    //kind_select.setAttribute('id', 'kind'+num)
    //rank_select.setAttribute('id', 'rank'+num)
    //level_select.setAttribute('id', 'level'+num)
    
    parent.appendChild(type_select)
    parent.appendChild(kind_select)
    parent.appendChild(document.createElement('br'))
    
    parent.appendChild(rank_select)
    parent.appendChild(level_select)
    
    parent.appendChild(document.createElement('br'))
    
    var hp_span = document.createElement('span')
    
    var attack_span = document.createElement('span')
    
    var defence_span = document.createElement('span')
    
    parent.appendChild(hp_span)
    parent.appendChild(document.createElement('br'))
    parent.appendChild(attack_span)
    parent.appendChild(defence_span)
    
    
    hero_view = {
        parent : parent,
        type : type_select,
        kind : kind_select,
        rank : rank_select,
        level : level_select, 
        hp : hp_span, 
        attack : attack_span, 
        defence : defence_span
    }
    
    var hero = {
        view : hero_view,
        type : '',
        kind : '',
        hp : 0,
        HP_MAX : 0,
        attack : 0,
        defence : 0
    }
    
    set_kind(hero)
    
    type_select.onchange = function(){
        set_type(hero)
    }
    
    kind_select.onchange = function(){
        set_kind(hero)
    }
    
    return hero
}

function set_type(hero){
    var s1 = hero.view.type
    var s2 = hero.view.kind

    var val = s1.options[s1.selectedIndex].value
    hero.type = val
    if (val=='盾') {
        //code
        set_options(s2, ['姥姥', '纯情小湿婆', '玄武'])
    }
    if (val=='弓') {
        //code
        set_options(s2, ['卡莉', '应龙', '稻姬'])
    }
    if (val=='剑') {
        //code
        set_options(s2, ['赵公萌', '乌龟'])
    }
    
    set_kind(hero)
}

function set_kind(hero) {
    // 更改战姬种类
    var s1 = hero.view.kind
    
    var val = s1.options[s1.selectedIndex].value
    hero.kind = val
    set_hp(hero)
    set_attack(hero)
    set_defence(hero)
}


function set_hp(hero) {
    // 获取战姬hp
    var val = hero.kind
    var hp = BASE_HP[val]
    hero.hp = hp
    hero.view.hp.innerHTML = 'HP: ' + hp + '/' + hp
}

function set_attack(hero) {
    //code
    var val = hero.kind
    var attack = BASE_ATTACK[val]
    hero.attack = attack
    hero.view.attack.innerHTML = 'ATT:' + attack
}

function set_defence(hero) {
    //code
    var val = hero.kind
    var defence = BASE_DEFENCE[val]
    hero.defence = defence
    hero.view.defence.innerHTML = '  DEF:' + defence
}