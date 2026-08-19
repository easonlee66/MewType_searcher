"use strict";
//mv_laozili.jpg yumewapower.jpg not register
//delete arare_6.png ritsu_determine.png viola2.png arare1.png arare3.png vio7.png yuno_2.png myk_sleep

var newdatas;
var newdata;
var imglist;
var split;

var selected_img=new Array();

function turn_mode(){
    const text_i=document.getElementById("including");
    if(text_i.innerHTML=="角色（包含任意）"){
        text_i.innerHTML="角色（包含全部）";
    }
    else{
        text_i.innerHTML="角色（包含任意）";
    }
}
function change_checkbox(target_id){
    const target=document.getElementById(target_id);
    target.selected=!target.selected;
}

function show_images(){
    var result="";
    const show=document.getElementById("show_image");
    for(let name of selected_img){
        result+=("<img src=\"img/"+name+'.'+newdata[name][0]+"\" alt=\""+newdata[name][1]+"\" title=\""+newdata[name][1]+"\"  style=\"width:"+newdata[name][3]+"px;height:"+newdata[name][4]+"px\"/>");
    }
    show.innerHTML=result;
}

function initf(jqxhr,textStatus,err){
    const result=document.getElementById('result');
    const imgs=document.getElementById('show_image');
    alert("读取信息时发生错误！");
    result.innerHTML="无法访问data.json，以下为报错信息：<br/>jqxhr:"+jqxhr.toString()+"<br/>textStatus:"+textStatus+"<br/>err:"+err;
    imgs.innerHTML="<img src=\"img/manager_badnews.png\" alt=\"无法访问\" title=\"出错了\"  style=\"width:"+320+"px;height:"+180+"px\"/>";
}
function inits(gotdata){
    newdatas=gotdata;
    newdata=newdatas.data;
    imglist=newdatas.imglist;
    split=newdatas.split;
    for(let i of imglist){
        let name=i[0];
        selected_img.push(name);
//        result_string+=("<img src=\"img/"+name+'.'+newdata[name][0]+"\" alt=\""+newdata[name][1]+"\" title=\""+newdata[name][1]+"\"  style=\"width:"+newdata[name][3]+"px;height:"+newdata[name][4]+"px\"/>");
    }
    show_images()
//    show.innerHTML=result_string;
}
function process_new(){
    selected_img=new Array();
    var start=0;
    var end=imglist.length;
    if(document.getElementById("e_1").selected){
        end=split.b;
    }
    else if(document.getElementById("e_2").selected){
        start=split.b;
        end=split.c;
    }
    else if(document.getElementById("e_3").selected){
        start=split.c;
        end=split.d;
    }
    else if(document.getElementById("e_4").selected){
        start=split.d;
        end=split.e;
    }
    else if(document.getElementById("e_5").selected){
        start=split.e;
        end=split.f;
    }
    else if(document.getElementById('e_6').selected){
        start=split.f;
        end=split.g;
    }
    else if(document.getElementById('e_7').selected){
        start=split.g;
        end=split.h;
    }
    else if(document.getElementById('e_8').selected){
        start=split.h;
        end=split.i;
    }
    else if(document.getElementById('e_9').selected){
        start=split.i;
        end=split.n;
    }
    else if(document.getElementById("e_other").selected){
        start=split.n;
    }
    else if(!document.getElementById("e_all").selected){
        alert("暂不支持");
    }
    const arl=document.getElementById('arare').checked,nnk=document.getElementById('nonoka').checked,ritsu=document.getElementById('ritsu').checked,myk=document.getElementById("miyako").checked,yuno=document.getElementById('yuno').checked,viola=document.getElementById('viola').checked,other=document.getElementById('other_c').checked;
    const jpg=document.getElementById('jpg').checked,png=document.getElementById('png').checked,gif=document.getElementById('gif').checked;
    const modes=(document.getElementById('including').innerHTML=='角色（包含任意）');
    const temp_selected=new Array();
    if(arl||nnk||ritsu||myk||yuno||viola||other){
        for(let i=start;i<end;i++){
            let name=imglist[i][0];
            if(modes){
                if((arl&&newdata[name][2].includes('arl'))||(nnk&&newdata[name][2].includes('nnk'))||(ritsu&&newdata[name][2].includes('ritsu'))||(myk&&newdata[name][2].includes('myk'))||(yuno&&newdata[name][2].includes('yuno'))||(viola&&newdata[name][2].includes('viola'))||(other&&newdata[name][2].includes('other'))){
                    temp_selected.push(name);
//                    result_string+=("<img src=\"img/"+name+'.'+newdata[name][0]+"\" alt=\""+newdata[name][1]+"\" title=\""+newdata[name][1]+"\"  style=\"width:"+newdata[name][3]+"px;height:"+newdata[name][4]+"px\"/>");
                }
            }
            else{
                if(!((arl&&!newdata[name][2].includes('arl'))||(nnk&&!newdata[name][2].includes('nnk'))||(ritsu&&!newdata[name][2].includes('ritsu'))||(myk&&!newdata[name][2].includes('myk'))||(yuno&&!newdata[name][2].includes('yuno'))||(viola&&!newdata[name][2].includes('viola'))||(other&&!newdata[name][2].includes('other')))){
                    temp_selected.push(name);
//                    result_string+=("<img src=\"img/"+name+'.'+newdata[name][0]+"\" alt=\""+newdata[name][1]+"\" title=\""+newdata[name][1]+"\"  style=\"width:"+newdata[name][3]+"px;height:"+newdata[name][4]+"px\"/>");
                }
            }
        }
    }
    else{
        for(let i=start;i<end;i++){
            let name=imglist[i][0];
            temp_selected.push(name);
//            result_string+=("<img src=\"img/"+name+'.'+newdata[name][0]+"\" alt=\""+newdata[name][1]+"\" title=\""+newdata[name][1]+"\"  style=\"width:"+newdata[name][3]+"px;height:"+newdata[name][4]+"px\"/>");
        }
    }
    if(jpg||png||gif){
        for(let i of temp_selected){
            if((png&&newdata[i][0]!='gif'&&!newdata[i][5])||(jpg&&newdata[i][5])||(gif&&newdata[i][0]=='gif')){
                selected_img.push(i);
            }
        }
    }
    else{
        selected_img=temp_selected;
    }
    show_images()
//    show.innerHTML=result_string;
}
function jsonTest(){
    const show=document.getElementById("result");
    $.getJSON('data.json', function(data) {
        console.log(data);
        show.innerHTML=data.toString();
    }).fail(function(jqxhr, textStatus, error) {
        let err = textStatus + ', ' + error;
        console.error('Request Failed: ' + err);
    });
}

//function showSearch(){}
//function showChoose(){}