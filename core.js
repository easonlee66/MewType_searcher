"use strict";
//mv_laozili.jpg not register
const data={
    available:{
        arare_salute:["阿拉蕾敬礼",320,156,"jpg"],
        arare_first:["初次见面",320,180,"jpg"],
        arare_darenotosee:["阿拉蕾不敢看",320,180,"png"],
        arare_exciting:["阿拉蕾兴奋",320,180,"png"],
        arare_finallysee:["阿拉蕾眯眼看",320,180,"png"],
        arare_happy:["阿拉蕾傻笑",320,180,"png"],
        arare_lifemess:["今天的人生，糟糟糟糟糟",320,180,"jpg"],
        arare_play:["阿拉蕾高兴看手机",183,180,"png"],
        arare_shock:["阿拉蕾注意到屏幕",192,180,"png"],
        arare_sostrong:["这么强",320,180,"png"],
        arare_surprise:["阿拉蕾震惊",231,180,"png"],
        arare_sweat:["阿拉蕾看手机",197,180,"png"],
        nonoka_arare:["野乃花阿拉蕾高兴",320,180,"png"],
        nonoka_letmesee:["野乃花突脸",214,180,"png"],
        ritsu_afraid:["律",320,180,"png"],//TODO complete desc
        ritsu_ghostback:["薇欧拉在律背后",320,180,"png"],
        ritsu_konomite:["薇欧拉给律看手机",320,180,"png"],
        ritsu_shock:["律",320,180,"png"],//TODO complete desc
        ritsu_viola:["薇欧拉抱律",320,180,"png"],
        vio_happy:["薇欧拉高兴",320,180,"png"],
        viola_badsmile:["薇欧拉坏笑",320,180,"png"],
        viola_blackface:["薇欧拉黑脸",320,180,"png"],
        viola_blackface_2:["薇欧拉黑脸",320,180,"png"],
        viola_blackface_3:["薇欧拉坏笑",320,180,"png"],
        viola_speak1:["薇欧拉",320,180,"png"],//TODO complete desc
        jikankire:["时间到",320,180,"jpg"],
        miyako_ai:["人类败北，失业就在眼前？",320,180,"jpg"],
        nonka_all_right:["嗯 小野乃王国一切安好",320,180,"jpg"],
        ritsu_hito:["诶 是人",320,180,"jpg"],
        ritsu:["律震惊",274,180,"jpg"],
        viola:["薇欧拉",320,180,"jpg"],//TODO complete desc
        arare_2:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_3:["阿拉蕾挠头",320,180,"png"],
        arare_4:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_5:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_6:["阿拉蕾抱头",320,180,"png"],
        arare_apologize:["阿拉蕾道歉",320,180,"png"],
        arare_come_home:["阿拉蕾回家",320,180,"png"],
        arare_cry:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_depress:["阿拉蕾失落",320,180,"png"],
        arare_egg:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_egg2:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_egg3:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_egg4:["阿拉蕾唱歌",320,180,"png"],
        arare_egg5:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_nod:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_run:["阿拉蕾带律逃跑",320,180,"png"],
        arare_shock2:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_shock3:["阿拉蕾被野乃花吓到",320,180,"png"],
        arare_shock4:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_shock5:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare:["阿拉蕾歪头笑",320,180,"png"],
        arare1:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare2:["阿拉蕾被撞倒",320,180,"png"],
        arare3:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare4:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare5:["阿拉蕾叹气",320,180,"png"],
        arare6:["阿拉蕾注意到",320,180,"png"],
        arare7:["阿拉蕾震惊",320,180,"png"],
        arare8:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare9:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare10:["阿拉蕾",320,180,"png"],//TODO complete desc
        arare_7:["如果时间合适的话",320,180,"jpg"],
        arare_8:["也不是不行吧",320,180,"jpg"],
        arare_desune:["也是呢",320,180,"jpg"],
        arare_impossible:["不不不，怎么可能",320,180,"jpg"],
        arare_must:["将来某一天，绝对会的",320,180,"jpg"],
        maru_kitai:["我很期待哦",320,180,"jpg"],
        arare_sound_only:["阿拉蕾sound only",320,180,"png"],
        vio:["薇欧拉盯",320,180,"png"],
        vio2:["薇欧拉",320,180,"png"],//TODO complete desc
        vio3:["薇欧拉仰头笑",320,180,"png"],
        vio4:["薇欧拉坏笑",320,180,"png"],
        vio5:["薇欧拉坏笑",320,180,"png"],
        vio6:["薇欧拉摸律头",320,180,"png"],
        vio7:["薇欧拉摸律头",320,180,"png"],
        vio8:["薇欧拉伸手",320,180,"png"],
        vio9:["薇欧拉",320,180,"png"],//TODO complete desc
        vio10:["薇欧拉呲牙笑",320,180,"png"],
        vio11:["薇欧拉看手机笑",320,180,"png"],
        vio12:["薇欧拉",320,180,"png"],//TODO complete desc
        vio13:["薇欧拉",320,180,"png"],//TODO complete desc
        vio14:["薇欧拉",320,180,"png"],//TODO complete desc
        vio15:["薇欧拉",320,180,"png"],//TODO complete desc
        vio16:["薇欧拉震惊",320,180,"png"],
        vio17:["薇欧拉黑脸笑",320,180,"png"],
        vio18:["薇欧拉招手",320,180,"png"],
        vio19:["薇欧拉",320,180,"png"],//TODO complete desc
        vio_cry:["薇欧拉装可怜",320,180,"png"],
        viola_2:["薇欧拉",320,180,"png"],//TODO complete desc
        viola_happy:["薇欧拉",320,180,"png"],//TODO complete desc
        viola2:["薇欧拉",320,180,"png"],//TODO complete desc
        ritsu1:["律看屏幕",320,180,"png"],
        ritsu2:["律",320,180,"png"],//TODO complete desc
        ritsu3:["律",320,180,"png"],//TODO complete desc
        ritsu4:["律震惊",320,180,"png"],
        ritsu5:["律震惊",320,180,"png"],
        ritsu6:["律",320,180,"png"],//TODO complete desc
        ritsu7:["律瘫在椅子上",320,180,"png"],
        ritsu8:["律",320,180,"png"],//TODO complete desc
        ritsu9:["律",320,180,"png"],//TODO complete desc
        ritsu10:["律无精打采",320,180,"png"],
        ritsu11:["律",320,180,"png"],//TODO complete desc
        ritsu_determine:["律坚定的眼神",320,180,"png"],
        miyako_apologize:["都子道歉",320,180,"png"],
        miyako_ditou:["都子低头",320,180,"png"],
        nonoka_2:["野乃花",320,180,"png"],//TODO complete desc
        nonoka_3:["野乃花",320,180,"png"],//TODO complete desc
        nonoka_determine:["野乃花",320,180,"png"],//TODO complete desc
        nonoka_smile:["野乃花笑",320,180,"png"],
        nonoka:["野乃花",320,180,"png"],//TODO complete desc
        yuno_2:["由乃抱胸",320,180,"png"],
        yuno:["由乃看屏幕",320,180,"png"],
        yuno1:["由乃看屏幕",320,180,"png"],
        yuno3:["由乃",320,180,"png"],//TODO complete desc
        yuno4:["由乃",320,180,"png"],//TODO complete desc
        arare_cry2:["阿拉蕾哭",320,180,"png"],
        arare_majiruru:["阿拉蕾看魔法露露的海报",320,180,"png"],
        arare_shock6:["阿拉蕾被吓到",320,180,"png"],
        arare_smile:["阿拉蕾笑",320,180,"png"],
        arare_surprise1:["阿拉蕾惊",320,180,"png"],
        arare_wake:["阿拉蕾睡醒",320,180,"png"],
        arare_wake2:["阿拉蕾睡醒",320,180,"png"],
        arare_wake3:["阿拉蕾睡醒",320,180,"png"],
        arr_afraid:["阿拉蕾抱头蹲",320,180,"png"],
        arr_face:["阿拉蕾摸脸",320,180,"png"],
        arr_logout:["LOG OUT",320,180,"png"],
        arr_stand:["阿拉蕾立正",320,180,"png"],
        arr_stand2:["阿拉蕾检查野乃花",320,180,"png"],
        arr_without_color:["黑白阿拉蕾",320,180,"png"],
        arr:["阿拉蕾立正",320,180,"png"],
        myk_blackface:["都子黑脸",320,180,"png"],
        myk_draw:["都子画画",320,180,"png"],
        myk_draw2:["都子画画",320,180,"png"],
        myk_draw3:["都子画画",320,180,"png"],
        myk_draw4:["都子画画",320,180,"png"],
        myk_draw5:["都子画画",320,180,"png"],
        myk_draw6:["都子画画",320,180,"png"],
        myk_maru:["都子获得丸君",320,180,"png"],
        myk_maru2:["都子和丸君",320,180,"png"],
        myk_shy:["都子脸红",320,180,"png"],
        myk_sleep:["都子睡着",320,180,"png"],
        myk:["都子探头",320,180,"png"],
        myk1:["都子下定决心",320,180,"png"],
        myk2:["都子见阿拉蕾",320,180,"png"],
        nnk_head:["野乃花头槌",320,180,"png"],
        nnk_smile:["野乃花笑",320,180,"png"],
        nnk_smile2:["野乃花笑",320,180,"png"],
        nnk:["野乃花笑",320,180,"png"],
        nnk1:["野乃花猫猫嘴",320,180,"png"],
        nnk2:["野乃花点子",320,180,"png"],
        bell_popo:["蓓儿兴奋",320,180,"png"],
        bell:["蓓儿哭",159,180,"png"],
        manager_thinking:["经纪人思考",320,180,"png"],
        manager_badnews:["经纪人宣布坏消息",320,180,"png"],
        mewtype_hai:["是",320,180,"jpg"],
        die:["大家都要死掉了",320,180,"jpg"],
        yuno_die:["大家都要死掉了，为什么会变成这样",320,180,"jpg"],
        zhong:["仲蕾",179,180,"jpg"],
        buzhong:["不仲蕾",180,180,"jpg"]
    },
    character:{
        arare:["arare_salute","arare_first","arare_darenotosee","arare_exciting","arare_finallysee","arare_happy","arare_lifemess","arare_play","arare_shock","arare_sostrong","arare_surprise","arare_sweat","buzhong","nonoka_arare","zhong","arare_2","arare_3","arare_4","arare_5","arare_6","arare_apologize","arare_come_home","arare_cry","arare_depress","arare_egg","arare_egg2","arare_egg3","arare_egg4","arare_egg5","arare_nod","arare_run","arare_shock2","arare_shock3","arare_shock4","arare_shock5","arare_sound_only","arare","arare1","arare2","arare3","arare4","arare5","arare6","arare7","arare8","arare9","arare10","arare_7","arare_8","arare_desune","arare_impossible","arare_must","maru_kitai","mewtype_hai","arare_cry2","arare_majiruru","arare_shock6","arare_smile","arare_surprise1","arare_wake","arare_wake2","arare_wake3","arr_afraid","arr_face","arr_logout","arr_stand","arr_majiruru","arr_stand2","arr_without_color","arr_zipmouth","arr","nnk_head"],
        nonoka:["nonoka_arare","nonoka_letmesee","nonka_all_right","arare_2","arare_3","arare_apologize","arare_shock3","nonoka_2","nonoka_3","nonoka_determine","nonoka_smile","nonoka","mewtype_hai","arare_surprise1","arr_afraid","arr_stand","arr_stand2","arr","nnk_head","nnk_smile","nnk_smile2","nnk1","nnk","nnk2"],
        ritsu:["ritsu_afraid","ritsu_ghostback","ritsu_konomite","ritsu_shock","ritsu_viola","ritsu_hito","ritsu","arare_5","arare_run","vio","vio2","vio3","vio4","vio5","vio6","vio7","vio18","vio19","ritsu1","ritsu2","ritsu3","ritsu4","ritsu5","ritsu6","ritsu7","ritsu8","ritsu9","ritsu10","ritsu11","ritsu_determine"],
        miyako:["die","miyako_ai","miyako_apologize","miyako_ditou","arare_7","mewtype_hai","myk_blackface","myk_draw","myk_draw2","myk_draw3","myk_draw4","myk_draw5","myk_draw6","myk_maru","myk_maru2","myk_shy","myk_sleep","myk","myk2","myk1"],
        yuno:["yuno_die","ritsu_hito","nonka_all_right","yuno_2","yuno","yuno1","yuno2","yuno3","yuno4","arare_impossible","mewtype_hai","arr_afraid","nnk_smile"],
        viola:["ritsu_ghostback","ritsu_konomite","ritsu_viola","vio_happy","viola_badsmile","viola_blackface","viola_blackface_2","viola_blackface_3","viola_speak1","viola","jikankire","vio","vio2","vio3","vio4","vio5","vio6","vio7","vio8","vio9","vio10","vio11","vio12","vio13","vio14","vio15","vio16","vio17","vio18","vio19","vio_cry","viola_2","viola_happy","viola2","arare_run"],
        other:["arare_run","arare_come_home","arare_shock4","arare_shock5","bell","bell_popo","arare9","maru_kitai","arr_afraid","arare_shock6","manager_badnews","myk_draw4","myk_draw5","myk_maru","myk_maru2","myk1","nnk_smile2"]
    },
    episode:{
        a:["arare_salute","arare_first","arare_lifemess"],
        b:["nonka_all_right","arare_cry2","arare_majiruru","arare_shock6","arare_smile","arare_surprise1","arare_wake","arare_wake2","arare_wake3","arr_afraid","arr_face","arr_logout","arr_stand","arr_majiruru","arr_stand2","arr_without_color","arr_zipmouth","arr","manager_badnews","myk_blackface","myk_draw","myk_draw2","myk_draw3","myk_draw4","myk_draw5","myk_draw6","nnk_head","nnk_smile","nnk_smile2","nnk1","nnk","nnk2","myk_maru","myk_maru2","myk_shy","myk_sleep","myk","myk2","myk1"],
        c:["die","yuno_die","ritsu","viola","jikankire","ritsu_hito","miyako_ai"],
        d:["arare_darenotosee","arare_exciting","arare_finallysee","arare_happy","arare_play","arare_shock","arare_surprise","arare_sweat","nonoka_arare","ritsu_afraid","ritsu_ghostback","ritsu_konomite","ritsu_shock","ritsu_viola","vio_happy","viola_badsmile","viola_blackface","viola_blackface_2","viola_blackface_3","viola_speak1","arare_7","arare_8","arare_desune","arare_impossible","arare_must","maru_kitai","mewtype_hai"],
        e:["arare_2","arare_3","arare_4","arare_5","arare_6","arare_apologize","arare_come_home","arare_cry","arare_depress","arare_egg","arare_egg2","arare_egg3","arare_egg4","arare_egg5","arare_nod","arare_run","arare_shock2","arare_shock3","arare_shock4","arare_shock5","arare_sound_only","arare","arare1","arare2","arare3","arare4","arare5","arare6","arare7","arare8","arare8","arare10","bell","bell_popo","vio","vio2","vio3","vio4","vio5","vio6","vio7","vio8","vio9","vio10","vio11","vio12","vio13","vio14","vio15","vio16","vio17","vio18","vio19","ritsu1","ritsu2","ritsu3","ritsu4","ritsu5","ritsu6","ritsu7","ritsu8","ritsu9","ritsu10","ritsu11","miyako_apologize","miyako_ditou","nonoka_2","nonoka_3","nonoka_determine","nonoka_smile","nonoka","ritsu_determine","vio_cry","viola_2","viola_happy","viola2","yuno_2","yuno","yuno1","yuno2","yuno3","yuno4"],
        other:["buzhong","die","nonoka_letmesee","yuno_die","zhong"]
    }
};
function change_checkbox(target_id){
    const target=document.getElementById(target_id);
    target.selected=!target.selected;
}
function init(){
    const show=document.getElementById("show_image");
    var result_string="";
    for(let i in data.available){
        result_string+=("<img src=\"img/"+i+"."+data.available[i][3]+"\" alt=\""+data.available[i][0]+"\" title=\""+data.available[i][0]+"\" width="+data.available[i][1]+" height="+data.available[i][2]+"/>");
    }
    show.innerHTML=result_string;
}
function process(){
//    const result=document.getElementById("result");
    const show=document.getElementById("show_image");
    const c_a=new Object();
    const e_a=new Object();
    for(let i in data.available){
        c_a[i]=false;
        e_a[i]=false;
    }
    var result_string="";
    if(document.getElementById("e_all").selected){
        for(let i in e_a){
            e_a[i]=true;
        }
    }
    else if(document.getElementById("e_1").selected){
        for(let i of data.episode.a){
            e_a[i]=true;
        }
    }
    else if(document.getElementById("e_2").selected){
        for(let i of data.episode.b){
            e_a[i]=true;
        }
    }
    else if(document.getElementById("e_3").selected){
        for(let i of data.episode.c){
            e_a[i]=true;
        }
    }
    else if(document.getElementById("e_4").selected){
        for(let i of data.episode.d){
            e_a[i]=true;
        }
    }
    else if(document.getElementById("e_5").selected){
        for(let i of data.episode.e){
            e_a[i]=true;
        }
    }
    else if(document.getElementById("e_other").selected){
        for(let i of data.episode.other){
            e_a[i]=true;
        }
    }
    else{
        alert("e error input");
    }
    var has_check=false;
    if(document.getElementById("arare").checked){
        has_check=true;
        for(let i of data.character.arare){
            c_a[i]=true;
        }
    }
    if(document.getElementById("nonoka").checked){
        has_check=true;
        for(let i of data.character.nonoka){
            c_a[i]=true;
        }
    }
    if(document.getElementById("ritsu").checked){
        has_check=true;
        for(let i of data.character.ritsu){
            c_a[i]=true;
        }
    }
    if(document.getElementById("miyako").checked){
        has_check=true;
        for(let i of data.character.miyako){
            c_a[i]=true;
        }
    }
    if(document.getElementById("yuno").checked){
        has_check=true;
        for(let i of data.character.yuno){
            c_a[i]=true;
        }
    }
    if(document.getElementById("viola").checked){
        has_check=true;
        for(let i of data.character.viola){
            c_a[i]=true;
        }
    }
    if(document.getElementById("other_c").checked){
        has_check=true;
        for(let i of data.character.other){
            c_a[i]=true;
        }
    }
    for(let i in data.available){
        if(e_a[i] && (c_a[i] || !has_check)){
            result_string+=("<img src=\"img/"+i+"."+data.available[i][3]+"\" alt=\""+data.available[i][0]+"\" title=\""+data.available[i][0]+"\" width="+data.available[i][1]+" height="+data.available[i][2]+"/>");
        }
    }
    show.innerHTML=result_string;
}
//function showSearch(){}
//function showChoose(){}