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

#command_cache=list()

interupt=False

with open('command_cache',encoding='utf-8',mode='a') as command_cache:
    while True:
        command=input()
        if command=='end':
           break
        if command=='interupt':
            interupt=True
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
        command_cache.write(command+'\n')
# check end

if not interupt:
    with open('command_cache',encoding='utf-8',mode='r') as command_caches:
        command_cache=command_caches.readlines()
        for j in command_cache:
            i=j.split()
            print(i[0])
            filename=input()
            if filename=='pass':
                continue
            file_name=filename.split('.')
            while len(file_name)!=2 or file_name[0] in data:
                print('input error!')
                if file_name[0] in data:
                    print("img name used!")
                filename=input()
                file_name=filename.split('.')
            result_list=[file_name[1],i[0],i[4:],320,180,True]
            if len(result_list)!=6:
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
    with open('command_cache',encoding='utf-8',mode='w') as command_cache:
        command_cache.write('')