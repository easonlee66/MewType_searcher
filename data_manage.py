#!/usr/bin/python

import json as js
import os
from PIL import Image as img

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

compulsory_regenerate=False

while True:
    change_data=True
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
        cmode=-1 #0 strict 1 any 2 all
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
            cmode=0
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
            place=command.index('-cany')
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
                    if(cmode==-1 or (cmode==0 and strict_cmp(datas['data'][i][2],character)) or (cmode==1 and any_cmp(datas['data'][i][2],character)) or (cmode==2 and all_cmp(datas['data'][i][2],character))):
                        if(datas['data'][i][1]==command[1]):
                            print(f"{i}.{datas['data'][i][0]}")
        else:
            for j in range(datas['split'][alphabet[episode-1]],datas['split'][alphabet[episode-1]]):
                i=datas['imglist'][j][0]
                if((size==-1 and datas['data'][i][3]==320 and datas['data'][i][4]==180) or (size==-2 and (datas['data'][i][3]!=320 or datas['data'][i][4]!=180)) or size==0 or (datas['data'][i][3]*datas['data'][i][4]==size)):
                    if(cmode==-1 or (cmode==0 and strict_cmp(datas['data'][i][2],character)) or (cmode==1 and any_cmp(datas['data'][i][2],character)) or (cmode==2 and all_cmp(datas['data'][i][2],character))):
                        if(datas['data'][i][1]==command[1]):
                            print(f"{i}.{datas['data'][i][0]}")

    if command[0]=='help':
        print("""check:check if any img not in data.json
        cal width height: calculate width with height 180
        d filename: delete this data from data.json
        desc filename description: change description of this file
        find [option] description: find the filename of this description""")

    if command[0]=='info':
        if(len(command)!=2):
            print("len err")
            continue
        if(command[1] not in datas['data']):
            print("err key not found")
            continue
        print(datas['data'][command[1]])
        for i in datas['imglist']:
            if i[0]==command[1]:
                print(i)

    if command[0]=='check':
        valid_file=os.listdir('img')
        for i in valid_file:
            if ".png" in i or '.gif' in i or '.jpg' in i:
                valid_img=i[:-4]
                if valid_img not in datas['data']:
                    print(i)

    if command[0]=='count':
        if len(command)==1:
            print(len(datas['imglist']))
        elif len(command)==2:
            if command[1]=='1':
                print(datas['split']['b']-datas['split']['a'])
            elif command[1]=='2':
                print(datas['split']['c']-datas['split']['b'])
            elif command[1]=='3':
                print(datas['split']['d']-datas['split']['c'])
            elif command[1]=='4':
                print(datas['split']['e']-datas['split']['d'])
            elif command[1]=='5':
                print(datas['split']['f']-datas['split']['e'])
            elif command[1]=='6':
                print(datas['split']['g']-datas['split']['f'])
            elif command[1]=='7':
                print(datas['split']['n']-datas['split']['g'])

    if command[0]=='cut':
        if len(command)!=2:
            print('err input')
            continue
        valid_img=os.listdir('img')
        if('.' not in command[1]):
            command[1]+='.jpg'
        if command[1] not in valid_img:
            print('img not found!')
            continue
        path=os.path.join('img',command[1])
        pic=img.open(path)
        pics=pic.crop((162,0,1442,720))
        pics.save(path)

#    if command[0]=='list':
#        if len(command)!=2:
#            print('err input')
#            continue
#        if command[1]=='7':
#            for i in datas['imglist'][datas['split']['g']:datas['split']['n']]:
#                print(i[0]+'.jpg')

    datas['imglist'].sort(key=lambda s:s[3])
    datas['imglist'].sort(key=lambda s:s[2])
    datas['imglist'].sort(key=lambda s:s[1])

    for i in range(len(datas['imglist'])):
        datas['split'][alphabet[datas['imglist'][-i-1][1]-1]]=len(datas['imglist'])-i-1

    with open("data.json",encoding='utf-8',mode='w') as f:
        js.dump(datas,f)