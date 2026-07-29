#!/usr/bin/python

import json as js

data:dict
imglist:list
split:dict

with open("data.json",encoding='utf-8') as f:
    datas=js.load(f)

imglist=datas["imglist"]
data=datas["data"]
split=datas["split"]

alphabet=('a','b','c','d','e','f','g','h','i','j','k','l','m','n')

# xxx jpg aaa 1 12 37 myk arl (360 180 s)/(360 w)

while True:
    command=input()
    if command=='end':
        break
    commands=command.split()
    result_list:list
    if commands[-1]=='s':
        result_list=commands[1:3]+[commands[6:-3],int(commands[-3]),int(commands[-2])]
    elif commands[-1]=='w':
        result_list=commands[1:3]+[commands[6:-2],int(commands[-2]),180]
    else:
        result_list=commands[1:3]+[commands[6:],320,180]
    data[commands[0]]=result_list
    imglist.append([commands[0],int(commands[3]),int(commands[4]),int(commands[5])])

imglist.sort(key=lambda s:s[3])
imglist.sort(key=lambda s:s[2])
imglist.sort(key=lambda s:s[1])

for i in range(len(imglist)):
    split[alphabet[imglist[-i-1][1]-1]]=len(imglist)-i-1

with open("data.json",encoding='utf-8',mode='w') as f:
    js.dump({"data":data,"imglist":imglist,"split":split},f)