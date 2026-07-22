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
        die:["大家都要死掉了",320,180,"jpg"],
        yuno_die:["大家都要死掉了，为什么会变成这样",320,180,"jpg"],
        zhong:["仲蕾",179,180,"jpg"],
        buzhong:["不仲蕾",180,180,"jpg"]
    },
    character:{
        arare:["arare_salute","arare_first","arare_darenotosee","arare_exciting","arare_finallysee","arare_happy","arare_lifemess","arare_play","arare_shock","arare_sostrong","arare_surprise","arare_sweat","buzhong","nonoka_arare","zhong"],
        nonoka:["nonoka_arare","nonoka_letmesee","nonka_all_right"],
        ritsu:["ritsu_afraid","ritsu_ghostback","ritsu_konomite","ritsu_shock","ritsu_viola","ritsu_hito","ritsu"],
        miyako:["die","miyako_ai"],
        yuno:["yuno_die","ritsu_hito","nonka_all_right"],
        other:["ritsu_ghostback","ritsu_konomite","ritsu_viola","vio_happy","viola_badsmile","viola_blackface","viola_blackface_2","viola_blackface_3","viola_speak1","viola","jikankire"]
    },
    episode:{
        a:["arare_salute","arare_first","arare_lifemess"],
        b:["nonka_all_right"],
        c:["die","yuno_die","ritsu","viola","jikankire","ritsu_hito","miyako_ai"],
        d:["arare_darenotosee","arare_exciting","arare_finallysee","arare_happy","arare_play","arare_shock","arare_surprise","arare_sweat","nonoka_arare","ritsu_afraid","ritsu_ghostback","ritsu_konomite","ritsu_shock","ritsu_viola","vio_happy","viola_badsmile","viola_blackface","viola_blackface_2","viola_blackface_3","viola_speak1"],
        e:[],
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