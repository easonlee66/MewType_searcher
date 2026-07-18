"use strict";
//mv_laozili.jpg not register
const data={
    available:["arare_salute.jpg","arare_first.jpg","arare_darenotosee.png","arare_exciting.png","arare_finallysee.png","arare_happy.png","arare_lifemess.jpg","arare_play.png","arare_shock.png","arare_sostrong.png","arare_surprise.png","arare_sweat.png","buzhong.jpg","die.jpg","nonoka_arare.png","nonoka_letmesee.png","ritsu_afraid.png","ritsu_ghostback.png","ritsu_konomite.png","ritsu_shock.png","ritsu_viola.png","vio_happy.png","viola_badsmile.png","viola_blackface.png","viola_blackface_2.png","viola_blackface_3.png","viola_speak1.png","yuno_die.jpg","zhong.jpg"],
    character:{
        arare:["arare_salute.jpg","arare_first.jpg","arare_darenotosee.png","arare_exciting.png","arare_finallysee.png","arare_happy.png","arare_lifemess.jpg","arare_play.png","arare_shock.png","arare_sostrong.png","arare_surprise.png","arare_sweat.png","buzhong.jpg","nonoka_arare.png","zhong.jpg"],
        nonoka:["nonoka_arare.png","nonoka_letmesee.png"],
        ritsu:["ritsu_afraid.png","ritsu_ghostback.png","ritsu_konomite.png","ritsu_shock.png","ritsu_viola.png"],
        miyako:["die.jpg"],
        yuno:["yuno_die.jpg"],
        other:["ritsu_ghostback.png","ritsu_konomite.png","ritsu_viola.png","vio_happy.png","viola_badsmile.png","viola_blackface.png","viola_blackface_2.png","viola_blackface_3.png","viola_speak1.png"]
    },
    episode:{
        a:["arare_salute.jpg","arare_first.jpg","arare_lifemess.jpg"],
        b:[],
        c:["die.jpg","yuno_die.jpg"],
        d:["arare_darenotosee.png","arare_exciting.png","arare_finallysee.png","arare_happy.png","arare_play.png","arare_shock.png","arare_surprise.png","arare_sweat.png","nonoka_arare.png","ritsu_afraid.png","ritsu_ghostback.png","ritsu_konomite.png","ritsu_shock.png","ritsu_viola.png","vio_happy.png","viola_badsmile.png","viola_blackface.png","viola_blackface_2.png","viola_blackface_3.png","viola_speak1.png"],
        e:[],
        other:["buzhong.jpg","die.jpg","nonoka_letmesee.png","yuno_die.jpg","zhong.jpg"]
    }
};
function init(){
    const show=document.getElementById("show_image");
    var result_string="";
    for(let i of data.available){
        result_string+=("<img src=\"img/"+i+"\"/>");
    }
    show.innerHTML=result_string;
}
function process(){
//    const result=document.getElementById("result");
    const show=document.getElementById("show_image");
    const c_a=new Object();
    const e_a=new Object();
    for(let i of data.available){
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
    for(let i of data.available){
        if(e_a[i] && (c_a[i] || !has_check)){
            result_string+=("<img src=\"img/"+i+"\"/>");
        }
    }
    show.innerHTML=result_string;
}
//function showSearch(){}
//function showChoose(){}