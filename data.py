#!/usr/bin/python

import json as js
import os

data:dict
imglist:list
split:dict

with open("data.json",encoding='utf-8') as f:
    datas=js.load(f)

imglist=datas["imglist"]
data=datas["data"]
split=datas["split"]

alphabet=('a','b','c','d','e','f','g','h','i','j','k','l','m','n')
valid_input=('arl','nnk','ritsu','myk','yuno','viola','other')
valid_img=os.listdir('img')

# xxx jpg aaa 1 12 37 myk arl (360 180 s)/(360 w)

while True:
    command=input()
    if command=='end':
        break
    commands=command.split()
# input check
    if '.' in commands[0] and commands[1]!='jpg' and commands[1]!='png' and commands[1] !='gif':
        commands=commands[0].split('.')+commands[1:]
    if len(commands)<7:
        print("wrong input:length less than 7")
        continue
    elif commands[1]!='jpg' and commands[1]!='png' and commands[1] !='gif':
        print("wrong input:missing format information (expect 'jpg' 'png' 'gif')")
        continue
    elif not commands[0]+'.'+commands[1] in valid_img:
        print("wrong input:img not found!")
    elif commands[3]<'1' or commands[3]>'9':
        print(f"wrong input:episode information need number 1-14(got {commands[3]})")
        continue
    elif commands[4]<'0' or commands[4]>'9':
        print(f"wrong input:episode information need number 0-30(got {commands[4]})")
        continue
    elif commands[5]<'0' or commands[5]>'9':
        print(f"wrong input:episode information need number 0-60(got {commands[5]})")
        continue
    if commands[-1]=='s':
        if(commands[-2]<'1' or commands[-2]>'2'):
            print('wrong input:height information is wrong or too big! expect 100-299')
            continue
        elif commands[-3]<'1' or commands[-3]>'4':
            print('wrong input:width information is wrong or not proper! expect 100-499')
            continue
    if commands[-1]=='w':
        if commands[-2]<'1' or commands[-2]>'4':
            print('wrong input:width information is wrong or not proper! expect 100-499')
            continue
# check end
    result_list:list
    if commands[-1]=='s':
        result_list=commands[1:3]+[commands[6:-3],int(commands[-3]),int(commands[-2])]
    elif commands[-1]=='w':
        result_list=commands[1:3]+[commands[6:-2],int(commands[-2]),180]
    else:
        result_list=commands[1:3]+[commands[6:],320,180]
    if len(result_list)!=5:
        print("unknown error! parse wrong! stop processing this data!")
        continue
    characterlist=result_list[2]
    has_wrong=False
    for i in characterlist:
        if not i in valid_input:
            has_wrong=True
            break
    if has_wrong:
        print("input error:character has unexpected data!(expect arl nnk ritsu myk yuno viola other)")
        continue
    data[commands[0]]=result_list
    imglist.append([commands[0],int(commands[3]),int(commands[4]),int(commands[5])])

imglist.sort(key=lambda s:s[3])
imglist.sort(key=lambda s:s[2])
imglist.sort(key=lambda s:s[1])

for i in range(len(imglist)):
    split[alphabet[imglist[-i-1][1]-1]]=len(imglist)-i-1

with open("data.json",encoding='utf-8',mode='w') as f:
    js.dump({"data":data,"imglist":imglist,"split":split},f)