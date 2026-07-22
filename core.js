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
        bell_popo:["贝尔兴奋",320,180,"png"],
        bell:["贝尔哭",159,180,"png"],
        manager_thinking:["经纪人思考",320,180,"png"],
        die:["大家都要死掉了",320,180,"jpg"],
        yuno_die:["大家都要死掉了，为什么会变成这样",320,180,"jpg"],
        zhong:["仲蕾",179,180,"jpg"],
        buzhong:["不仲蕾",180,180,"jpg"]
    },
    character:{
        arare:["arare_salute","arare_first","arare_darenotosee","arare_exciting","arare_finallysee","arare_happy","arare_lifemess","arare_play","arare_shock","arare_sostrong","arare_surprise","arare_sweat","buzhong","nonoka_arare","zhong","arare_2","arare_3","arare_4","arare_5","arare_6","arare_apologize","arare_come_home","arare_cry","arare_depress","arare_egg","arare_egg2","arare_egg3","arare_egg4","arare_egg5","arare_nod","arare_run","arare_shock2","arare_shock3","arare_shock4","arare_shock5","arare_sound_only","arare","arare1","arare2","arare3","arare4","arare5","arare6","arare7","arare8","arare9","arare10"],
        nonoka:["nonoka_arare","nonoka_letmesee","nonka_all_right","arare_2","arare_3","arare_apologize","arare_shock3"],
        ritsu:["ritsu_afraid","ritsu_ghostback","ritsu_konomite","ritsu_shock","ritsu_viola","ritsu_hito","ritsu","arare_5","arare_run","vio","vio2","vio3","vio4","vio5","vio6","vio7","vio18","vio19"],
        miyako:["die","miyako_ai"],
        yuno:["yuno_die","ritsu_hito","nonka_all_right"],
        other:["ritsu_ghostback","ritsu_konomite","ritsu_viola","vio_happy","viola_badsmile","viola_blackface","viola_blackface_2","viola_blackface_3","viola_speak1","viola","jikankire","vio","vio2","vio3","vio4","vio5","vio6","vio7","vio8","vio9","vio10","vio11","vio12","vio13","vio14","vio15","vio16","vio17","vio18","vio19","arare_run","arare_come_home","arare_shock4","arare_shock5","bell","bell_popo"]
    },
    episode:{
        a:["arare_salute","arare_first","arare_lifemess"],
        b:["nonka_all_right"],
        c:["die","yuno_die","ritsu","viola","jikankire","ritsu_hito","miyako_ai"],
        d:["arare_darenotosee","arare_exciting","arare_finallysee","arare_happy","arare_play","arare_shock","arare_surprise","arare_sweat","nonoka_arare","ritsu_afraid","ritsu_ghostback","ritsu_konomite","ritsu_shock","ritsu_viola","vio_happy","viola_badsmile","viola_blackface","viola_blackface_2","viola_blackface_3","viola_speak1"],
        e:["arare_2","arare_3","arare_4","arare_5","arare_6","arare_apologize","arare_come_home","arare_cry","arare_depress","arare_egg","arare_egg2","arare_egg3","arare_egg4","arare_egg5","arare_nod","arare_run","arare_shock2","arare_shock3","arare_shock4","arare_shock5","arare_sound_only","arare","arare1","arare2","arare3","arare4","arare5","arare6","arare7","arare8","arare8","arare10","bell","bell_popo","vio","vio2","vio3","vio4","vio5","vio6","vio7","vio8","vio9","vio10","vio11","vio12","vio13","vio14","vio15","vio16","vio17","vio18","vio19"],
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
//    if(document.getElementById("viola").checked){
//        has_check=true;
//        for(let i of data.character.viola){
//            c_a[i]=true;
//        }
//    }
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