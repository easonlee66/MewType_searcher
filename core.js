"use strict";
var data={
    "available":["arare_salute.jpg","arare_first.jpg"],
    "character":{
        "arare":["arare_salute.jpg"]
    },
    "episode":{
        "1":["arare_salute.jpg"]
    }
};
function init(){
    var show=document.getElementById("show_image");
    var result_string="";
    for (let i = 0; i < data.available.length; i++) {
        result_string+=("<img src=\"img/"+data.available[i]+"\"/>");
    }
    show.innerHTML=result_string;
}
function process(){
    var result=document.getElementById("result");
    var result_string="";
    if(document.getElementById("e_all").selected){
        result_string+="e all";
    }
    else if(document.getElementById("e_1").selected){
        result_string+="e 1";
    }
    else if(document.getElementById("e_2").selected){
        result_string+="e 2";
    }
    else if(document.getElementById("e_3").selected){
        result_string+="e 3";
    }
    else if(document.getElementById("e_3").selected){
        result_string+="e 3";
    }
    else if(document.getElementById("e_4").selected){
        result_string+="e 4";
    }
    else if(document.getElementById("e_other").selected){
        result_string+="e other";
    }
    else{
        result_string+="e error input";
    }
    if(document.getElementById("arare").checked){
        result_string+="c arare";
    }
    if(document.getElementById("nonoka").checked){
        result_string+="c nonoka";
    }
    if(document.getElementById("ritsu").checked){
        result_string+="c ritsu";
    }
    if(document.getElementById("miyako").checked){
        result_string+="c miyako";
    }
    if(document.getElementById("yuno").checked){
        result_string+="c yuno";
    }
//    if(document.getElementById("viola").checked){
//        result_string+="c viola";
//    }
    if(document.getElementById("other_c").checked){
        result_string+="c other";
    }
    result.innerHTML=result_string;
}
//function showSearch(){}
//function showChoose(){}