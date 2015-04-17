
const TYPE_VALUE = ['盾', '弓', '剑']


function add_char(parent, num) {
    //添加一个角色
    var type_select = document.createElement('select')
    set_options(type_select, TYPE_VALUE)
    
    var kind_value = ['纯情小湿婆', '玄武']
    var kind_select = document.createElement('select')
    set_options(kind_select, kind_value)
    
    var rank_select = document.createElement('select')
    set_options(rank_select, ['灵'])
    
    var level_select = document.createElement('select')
    set_options(level_select, ['55'])
    
    parent.appendChild(type_select)
    parent.appendChild(kind_select)
    parent.appendChild(document.createElement('br'))
    
    parent.appendChild(rank_select)
    parent.appendChild(level_select)
    
    parent.appendChild(document.createElement('br'))
    
    var hp_span = document.createElement('span')
    var en_span = document.createElement('span')
    var att_span = document.createElement('span')
    var def_span = document.createElement('span')
    
    parent.appendChild(hp_span)
    parent.appendChild(en_span)
    parent.appendChild(document.createElement('br'))
    parent.appendChild(att_span)
    parent.appendChild(def_span)
    
    hero_view = {
        parent : parent,
        type : type_select,
        kind : kind_select,
        rank : rank_select,
        level : level_select, 
        hp : hp_span,
        en : en_span, 
        att : att_span, 
        def : def_span,
    }
    
    function Hero(hero_view){
        this.view = hero_view
        this.type = ''
        this.kind = ''
        this.hp = 0
        this.en = 0
        this.HP_MAX = 0
        this.att = 0
        this.def = 0
        this.add_en = function(n){
            this.en += n
            if (this.en>10) {
                this.en=10
            }
        }
        this.get_damage = function(n){
            this.hp -= n
            if (this.hp<0) {
                this.hp = 0
            }
        }
    }
    
    var hero = new Hero(hero_view)
    
    set_kind(hero)
    
    type_select.onchange = function(){
        set_type(hero)
    }
    
    kind_select.onchange = function(){
        set_kind(hero)
    }
    
    return hero
}

function update_hero_view(hero) {
    hero.view.hp.innerHTML = 'HP: ' + hero.hp
    hero.view.en.innerHTML = '  EN: ' + hero.en
    hero.view.att.innerHTML = 'ATT:' + hero.att
    hero.view.def.innerHTML = '  DEF:' + hero.def
}


function set_options(aselect, values){
    aselect.options.length = 0
    for(var i in values){
        aselect.add(new Option(values[i], values[i]))
    }
}

function set_type(hero){
    var s1 = hero.view.type
    var s2 = hero.view.kind

    var val = s1.options[s1.selectedIndex].value
    hero.type = val
    result = get_charnames_by_type(val)
    set_options(s2, result)
    set_kind(hero)
}

function set_kind(hero) {
    // 更改战姬种类
    var s1 = hero.view.kind
    
    var val = s1.options[s1.selectedIndex].value
    hero.kind = val
    
    hero.hp = CHAR_DATAS[val].hp
    hero.att = CHAR_DATAS[val].att
    hero.def = CHAR_DATAS[val].def
    
    update_hero_view(hero)
}

