"use strict";
const data={
    available:["arare_salute.jpg","arare_first.jpg"],
    character:{
        arare:["arare_salute.jpg","arare_first.jpg"],
        nonoka:[],
        ritsu:[],
        miyako:[],
        yuno:[],
        other:[]
    },
    episode:{
        a:["arare_salute.jpg","arare_first.jpg"],
        b:[],
        c:[],
        d:[],
        e:[],
        other:[]
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
    if(document.getElementById("arare").checked){
        for(let i of data.character.arare){
            c_a[i]=true;
        }
    }
    if(document.getElementById("nonoka").checked){
        for(let i of data.character.nonoka){
            c_a[i]=true;
        }
    }
    if(document.getElementById("ritsu").checked){
        for(let i of data.character.ritsu){
            c_a[i]=true;
        }
    }
    if(document.getElementById("miyako").checked){
        for(let i of data.character.miyako){
            c_a[i]=true;
        }
    }
    if(document.getElementById("yuno").checked){
        for(let i of data.character.yuno){
            c_a[i]=true;
        }
    }
//    if(document.getElementById("viola").checked){
//        for(let i of data.character.viola){
//            c_a[i]=true;
//        }
//    }
    if(document.getElementById("other_c").checked){
        for(let i of data.character.other){
            c_a[i]=true;
        }
    }
    for(let i of data.available){
        if(e_a[i] && c_a[i]){
            result_string+=("<img src=\"img/"+i+"\"/>");
        }
    }
    show.innerHTML=result_string;
}
//function showSearch(){}
//function showChoose(){}