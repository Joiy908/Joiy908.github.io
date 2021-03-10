[toc]

# openpyxl应用-疫情表格

### 要求

从mouDi.xlsx提出村民数据（姓名、是否户主、与户主关系、性别、身份证号、手机号）

=》为每个村民写一个demo.xlsx，根据身份证号计算出年龄，文件名标准：名字-与户主关系.xlsx

### 获取数据

先把纯数据（无表头），挪到一个新sheet里。

数据构造器model

```python

class Person(object):
    def __init__(self,name,isH,rel,sex,id,phone):
        self.name = name
        self.isH = isH
        self.rel = rel
        self.sex = sex
        self.id = id
        self.phone = phone
# 目标数据结构[{"name":"王二","isH":"是","sex":"男","id":'130532200101271745'},
#				{},]
#数据结构1.1[{"huZhu":'王二', "members":[{},{}]},
#                 {}, ]
#1.1就再加个类就好，这里不展开
```

```python
from openpyxl import load_workbook

def get_data(sheets=[]):
    file_path = 'files/muoDi.xlsx'
    try:
        wbook = load_workbook(file_path)
        # get sheetName list
        if not sheets:
            sheets = wbook.sheetnames
        # get first sheet
        first_sheet = wbook[sheets[0]]
        
		# get all rows
        data = []
        #row:('殷卫军', '是', '丈夫', '男', '汉', '林坛镇上蒋村', '13042719700121491X', '群众', None, '高中', '无', '小屯矿上班', 13831868027)
        for row in rows:
            name = row[0]
            isH = row[1]
            rel = row[2]
            sex = row[3]
            id = row[6]
            phone = row[12]
            
            #p.__dict__方法可快速形成字典数据，也可弃之选择list
            p = model.Person(name, isH, rel, sex, id, phone)
            data.append(p.__dict__)    #第一个结构已经完成
            
            
            hus = []  # 先做(第二个数据结构的)members部分
            counter = 0
            for person in data:
                #hus 逢户主，append([]),然后把人员添加进去
                if person['isH'] == "是":
                    counter += 1
                    hus.append([])
                    hus[counter - 1].append(person)
                else:
                    hus[counter - 1].append(person)
			#hus = [[{}{}{}{}],
            #       [{}{}{}],          ]
            #于本应用，hus已经够用了，不用再给每户加个户主，显得臃肿
            
            #==>保存成json,这里不再展开
	finally:
        wbook.close()
    print("写入成功!")
        
```

### 计算年龄

```python
def get_age(id):
    # 提取正则 re.findal很好
    birth = re.findall(re.compile(r'[0-9]{6}([0-9]{4})[0-9]'), id)[0]
    return 2021-int(birth)
```

### 写入数据

```python
#suppose there is data
def write_data(data):
    for person in data:
        name = person["name"]
        isH = person["isH"]
        if isH == "是":
            rel = "户主"
        else: rel = person['rel']
        sex = person['sex']
        id = person['id']
        phone = person['phone']
        age = get_age(id)

        wbook = load_workbook("demo.xlsx")
        # get sheetName list
        sheets = wbook.sheetnames
        # get sheet by sheetName
        a_sheet = wbook[sheets[0]]


        # print(a_sheet.cell(row=7, column=2).value)
        a_sheet['B7'].value = name
        a_sheet['C7'].value = rel
        a_sheet['D7'].value = sex
        a_sheet['E7'].value = age
        a_sheet['H7'].value = id
        a_sheet['I7'].value = phone

        # save user or do further operations
        if isH == "是":
            wbook.save(f'files/{name}.xlsx')
        else:
            wbook.save(f'files/{name}-{rel}.xlsx')

    wbook.close()
        
```



