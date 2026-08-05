#!/usr/bin/python

import json as js
import os

with open("data.json",encoding='utf-8') as f:
    datas=js.load(f)

alphabet=('a','b','c','d','e','f','g','h','i','j','k','l','m','n')
valid_input=('arl','nnk','ritsu','myk','yuno','viola','other')

def strict_cmp(a:list,b:list):
    a.sort()
    b.sort()
    return a==b
def any_cmp(a:list,b:list):
    for i in b:
        if i in a:
            return True
    return False
def all_cmp(a:list,b:list):
    for i in b:
        if i not in a:
            return False
    return True

while True:
    commands=input()
    if commands=='end':
        break
    elif commands=='':
        continue

    command=commands.split()

    if command[0]=='d':
        if(len(command)!=2):
            print("err len isn't 2")
            continue
        if(not command[1] in datas['data']):
            print("index not found!")
            continue
        del datas['data'][command[1]]
        j=[]
        for i in datas['imglist']:
            if i[0]==command[1]:
                j=i.copy()
        if j==[]:
            print("index not found in imglist but found in data!\n del it from data")
        else:
            datas['imglist'].remove(j)

    if command[0]=='desc':
        if(len(command)!=3):
            print("err len isn't 3")
            continue
        if not command[1] in datas['data']:
            print('index not found')
            continue
        datas['data'][command[1]][1]=command[2]

    if command[0]=='find':
        if(len(command)<2):
            print("err len too short!")
            continue
        episode=0
        character=[]
        cmode=0 #0 strict 1 any 2 all
        size=0 #-1 320x180 -2 any not 320x180
        if '-e' in command:
            place=command.index('-e')
            if(len(command)-place<2):
                print("err -e missing episode information")
                continue
            elif(command[place+1]<'1' or command[place+1]>'9'):
                print(f"err -e need number 1-14(got {command[place+1]})")
                continue
            episode=int(command[place+1])
            del command[place+1]
            del command[place]
        if '-s' in command:
            place=command.index('-s')
            if(len(command)-place<2):
                print("err -s missing size information")
                continue
            elif(command[place+1]=='n' or command[place+1]=='normal'):
                size=-1
            elif(command[place+1]=='abnormal' or command[place+1]=='a'):
                size=-2
            elif(command[place+1]<'1' or command[place+1]>'9'):
                print(f"err -e need number >1 (got {command[place+1]})")
                continue
            else:
                size=int(command[place+1])
            del command[place+1]
            del command[place]
        if '-cstrict' in command or '-c' in command:
            place=-1
            if '-c' in command:
                place=command.index('-c')
            else:
                place=command.index('-cstrict')
            if(len(command)-place<2):
                print("err -c missing character information")
                continue
            elif command[place+1] not in valid_input:
                print(f"err -c need input in {valid_input} (got {command[place+1]})")
                continue
            cache=command[place+1:]
            del command[place]
            for i in cache:
                if(i not in valid_input):
                    break
                character.append(i)
                command.remove(i)
        if '-call' in command:
            cmode=2
            place=command.index('-call')
            if(len(command)-place<2):
                print("err -c missing character information")
                continue
            elif command[place+1] not in valid_input:
                print(f"err -c need input in {valid_input} (got {command[place+1]})")
                continue
            cache=command[place+1:]
            del command[place]
            for i in cache:
                if(i not in valid_input):
                    break
                character.append(i)
                command.remove(i)
        if '-cany' in command:
            cmode=1
            place=command.index('-call')
            if(len(command)-place<2):
                print("err -c missing character information")
                continue
            elif command[place+1] not in valid_input:
                print(f"err -c need input in {valid_input} (got {command[place+1]})")
                continue
            cache=command[place+1:]
            del command[place]
            for i in cache:
                if(i not in valid_input):
                    break
                character.append(i)
                command.remove(i)
        if len(command)!=2:
            print("err len wrong!")
            continue
        if episode==0:
            for i in datas['data']:
                if((size==-1 and datas['data'][i][3]==320 and datas['data'][i][4]==180) or (size==-2 and (datas['data'][i][3]!=320 or datas['data'][i][4]!=180)) or size==0 or (datas['data'][i][3]*datas['data'][i][4]==size)):
                    if((cmode==0 and strict_cmp(datas['data'][i][2],character)) or (cmode==1 and any_cmp(datas['data'][i][2],character)) or (cmode==2 and all_cmp(datas['data'][i][2],character))):
                        if(datas['data'][i][1]==command[1]):
                            print(f"{i}.{datas['data'][i][0]}")
        else:
            for j in range(datas['split'][alphabet[episode-1]],datas['split'][alphabet[episode]]):
                i=datas['imglist'][j][0]
                if((size==-1 and datas['data'][i][3]==320 and datas['data'][i][4]==180) or (size==-2 and (datas['data'][i][3]!=320 or datas['data'][i][4]!=180)) or size==0 or (datas['data'][i][3]*datas['data'][i][4]==size)):
                    if((cmode==0 and strict_cmp(datas['data'][i][2],character)) or (cmode==1 and any_cmp(datas['data'][i][2],character)) or (cmode==2 and all_cmp(datas['data'][i][2],character))):
                        if(datas['data'][i][1]==command[1]):
                            print(f"{i}.{datas['data'][i][0]}")
    if command[0]=='check':
        valid_file=os.listdir('img')
        for i in valid_file:
            if ".png" in i or '.gif' in i or '.jpg' in i:
                valid_img=i[:-4]
                if valid_img not in datas['data']:
                    print(i)
    
    if command[0]=='cal':
        if(len(command)!=3):
            print('len err')
            continue
        elif(command[1]<'1' or command[1]>'9' or command[2]<'1' or command[2]>'9'):
            print('err not number')
            continue
        print(int(command[1])*180//int(command[2]))

    datas['imglist'].sort(key=lambda s:s[3])
    datas['imglist'].sort(key=lambda s:s[2])
    datas['imglist'].sort(key=lambda s:s[1])

    for i in range(len(datas['imglist'])):
        datas['split'][alphabet[datas['imglist'][-i-1][1]-1]]=len(datas['imglist'])-i-1

    with open("data.json",encoding='utf-8',mode='w') as f:
        js.dump(datas,f)