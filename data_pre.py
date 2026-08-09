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

# xxx jpg aaa 1 12 37 myk arl (360 180 s)/(360 w)
#14 0/1 for op(op1 and op2)
#14 2 for ed
#14 3 for pv 1-100 pv1 101-150 pv0 151-250 pv2 251-300 cm15s 301-350 cm30s
#14 4 for mv
#14 5 for cv
#14 6 for livestreaming
#14 7 for othersource

print("备忘录：\n目前缺乏动图：第一集野乃花听由乃音乐摇摆、第三集4:31处阿拉蕾、第三集阿拉华生陷入死胡同了、第四集4:37处阿拉蕾滚来滚去、第四集7:39处薇欧拉挥手告别\n其他缺图:第四集8:27处律挺好颜-无字幕 第四集9:00处\nnnk3.jpg转成png")

command_cache=list()

while True:
    command=input()
    if command=='end':
        break
    commands=command.split()
# input check
    if len(commands)<5:
        print("wrong input:length less than 5")
        continue
    elif commands[1]<'1' or commands[1]>'9':
        print(f"wrong input:episode information need number 1-14(got {commands[1]})")
        continue
    elif commands[2]<'0' or commands[2]>'9':
        print(f"wrong input:episode information need number 0-30(got {commands[2]})")
        continue
    elif commands[3]<'0' or commands[3]>'9':
        print(f"wrong input:episode information need number 0-60(got {commands[3]})")
        continue
    has_wrong=False
    for i in commands[4:]:
        if i not in valid_input:
            has_wrong=True
            break
    if has_wrong:
        print(f"input error:character has unexpected data!(expect{valid_input})")
        continue
    command_cache.append(commands)
# check end

for i in command_cache:
    valid_img=os.listdir('img')
    filename=input()
    while filename not in valid_img or (filename[-4:]!='.jpg' and filename[-4:]!='.gif' and filename[-4:]!='.png'):
        print('img not found!')
        filename=input()
    file_name=filename.split('.')
    while len(file_name)!=2 or file_name[0] in data:
        print('input error!')
        if file_name[0] in data:
            print("img name used!")
        filename=input()
        while filename not in valid_img or (filename[-4:]!='.jpg' and filename[-4:]!='.gif' and filename[-4:]!='.png'):
            print('img not found!')
            filename=input()
        file_name=filename.split('.')
    result_list=[file_name[1],i[0],i[4:],320,180]
    if len(result_list)!=5:
        print("unknown error! parse wrong! stop processing this data!")
        continue
    data[file_name[0]]=result_list
    imglist.append([file_name[0],int(i[1]),int(i[2]),int(i[3])])

imglist.sort(key=lambda s:s[3])
imglist.sort(key=lambda s:s[2])
imglist.sort(key=lambda s:s[1])

for i in range(len(imglist)):
    split[alphabet[imglist[-i-1][1]-1]]=len(imglist)-i-1

with open("data.json",encoding='utf-8',mode='w') as f:
    js.dump({"data":data,"imglist":imglist,"split":split},f)