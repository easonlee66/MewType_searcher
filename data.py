#!/usr/bin/python

import json as js
import os
from PIL import Image as img

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

# xxx jpg aaa 1 12 37 myk arl (360 180 s)/(360 w)
#14 0/1 for op(op1 and op2)
#14 2 for ed
#14 3 for pv 1-100 pv1 101-150 pv0 151-250 pv2 251-300 cm15s 301-350 cm30s
#14 4 for mv
#14 5 for cv
#14 6 for livestreaming
#14 7 for othersource

print("备忘录：\n第六集14：38都子动图，第六集13:35动图，第七集5:6处都子疯魔弹琴,第七集8:25律,第七集10:25,第七集10:39,第七集10:48,11:47,第八集5:8,11:7,16:5,第九集10:21,12:56\n1:56,2:35,10:19,16:37,16:41,17:44,19:12,19:23,20:18,20:30,21:36,21:54,第九集开头阿拉蕾,0:44,3:24,myk sound only,5:24,6:11,7:23,都子倒在楼梯上,14:37\n走过路过不要错过,15:40左右炎上评论")

while True:
    command=input()
    valid_img=os.listdir('img')
    if command=='end':
        break
    commands=command.split()
# input check
    if len(commands)<6:
        print("wrong input:length less than 7")
        continue
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
        continue
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
    if commands[0] in data:
        print("img name is used, please rename this img!")
        break
# check end
    result_list:list
    if commands[-1]=='s':
        result_list=commands[1:3]+[commands[6:-3],int(commands[-3]),int(commands[-2])]
    else:
        pic=img.open(os.path.join('img',commands[0]+'.'+commands[1]))
        result_list=commands[1:3]+[commands[6:],pic.width*180//pic.height,180]
        if result_list[3]>=390 and result_list[0]=='jpg':
            result_list[3]=320
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
        print(f"input error:character has unexpected data!(expect{valid_input})")
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
