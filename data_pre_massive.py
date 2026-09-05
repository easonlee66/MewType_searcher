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

command_cache:list

with open('command_cache',encoding='utf-8',mode='r') as c_c:
    command_cache=c_c.readlines()

img_cache=os.listdir('img_cache')
img_cache.sort(key=lambda s:int(s[:-4]))

if len(command_cache)!=len(img_cache):
    print("err! num of img can't match!")
else:
    for i in range(len(command_cache)):
        j=command_cache[i].split()
        os.rename(os.path.join('img_cache',img_cache[i]),os.path.join('img','e'+img_cache[i]))
        file_name=img_cache[i].split('.')
        file_name[0]='e'+file_name[0]
        while len(file_name)!=2 or file_name[0] in data:
            print(f'input error! during process {j[0]}')
            if file_name[0] in data:
                print("img name used!")
            filename=input()
            file_name=filename.split('.')
        result_list=[file_name[1],j[0],j[4:],320,180,True]
        if len(result_list)!=6:
            print(f"unknown error! parse wrong! stop processing this data!{j[0]}")
            continue
        data[file_name[0]]=result_list
        imglist.append([file_name[0],int(j[1]),int(j[2]),int(j[3])])

    imglist.sort(key=lambda s:s[3])
    imglist.sort(key=lambda s:s[2])
    imglist.sort(key=lambda s:s[1])
    
    for i in range(len(imglist)):
        split[alphabet[imglist[-i-1][1]-1]]=len(imglist)-i-1
    
    with open("data.json",encoding='utf-8',mode='w') as f:
        js.dump({"data":data,"imglist":imglist,"split":split},f)