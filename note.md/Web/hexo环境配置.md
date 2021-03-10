# 

- node.js
- git

## node.js安装配置

[参考文章](https://blog.csdn.net/qq_40593308/article/details/110559838)

![image-20210310081543887](https://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step5.png)

### 1. 选择add to path

### 2. 在Nodejs安装目录下新建一个文件夹，并命名为`node_cache`

![image-20210310081543887](https://img-blog.csdnimg.cn/img_convert/3945e6f0dfeaa4896aea26725dc8c202.png)

### 3. 使用命令修改config配置，首先打开cmd控制台

使用命令修改模块安装路径(默认npm在C盘，改到D)

```
npm config set prefix "D:\Program Files (x86)\nodejs\node_global"
npm config set cache "D:\Program Files (x86)\nodejs\node_cache"

#最后你可以使用npm config get prefix 和 npm config get cache命令查看一下是否配置成功
```
![](https://img-blog.csdnimg.cn/img_convert/3ffbfb3334fcc4ddc33766c248000023.png)

### 4. change path

open 环境变量 ，then 用户变量 的path, delete the C:\User\..\Roaming\npm (which is added autonomously when being setup)

![](https://img-blog.csdnimg.cn/img_convert/e0a92bac210aeac0627e6deaa5584d13.png)

- new a ```NODE_PATH``` in 系统变量，value: ```D:\Program Files (x86)\nodejs\node_modules	```

![](https://img-blog.csdnimg.cn/img_convert/3ea167beb3bcddea9c686511e5d6b89c.png)

#DON'T FORGET **确定**

### 5. 改npn为国内源

1. 更换 npm的源

```node
npm config set registry https://registry.npm.taobao.org
#查看命令为 npm config get registry
```

![](https://img-blog.csdnimg.cn/img_convert/5eecfe1b40f3433406398a0f7b9c9d33.png)

2. 安装cnpm包管理器

   ```node
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   #-g 表示安装到全局
   ```

![](https://img-blog.csdnimg.cn/img_convert/4ce75e2637376ee4a3542d6a7ed649d2.png)

3. 再次使用命令更改`cnpm`的安装路径和缓存路径

   ```
   cnpm config set prefix "D:\Program Files (x86)\nodejs\node_global"
   cnpm config set cache "D:\Program Files (x86)\nodejs\node_cache"
   ```

> 大功告成，现在你可以放心的使用Nodejs了，注意以后使用`npm`命令时，请替换为`cnpm` ，如`npm install vue -g`换成`cnpm install vue -g`，建议最好不要混用`npm`和`cnpm` ，当然一般情况下你混用也没什么问题。。。。。。

> 最后：强迫症患者请使用`cnpm uninstall vue -g`来删除`vue`模块，并删除Nodejs安装时默认在C盘生成的`npm文件夹`(C:\Users\你的用户名(Administrator)\AppData\Roaming\npm)



## npm语法

````
使用npm安装插件：命令提示符执行npm install <name> [-g] [--save-dev]
npm install gulp-less --save-dev
#[-g] [--save-dev], []表示可选，写的时候不要写
使用npm卸载插件：npm uninstall <name> [-g] [--save-dev] PS：不要直接删除本地插件包

参考：https://www.cnblogs.com/chase-star/p/10455703.html
````

## hexo

### 1. 安装 

```
去官网看
hexo init/clean
hexo g
hexo s
hexo g --d #一步到位
```

### 2. hexo deploy

```
cnpm install hexo-deployer-git --save
```

2. 然后 git-UIL -help =》复制ssr
   =》到gitee 设置-SSR公钥  把ssr复制

3. _config.yml
```
   deploy:
     type: 'git' # 也许不用''
     repo: git@gitee.com:joiy908/joiy908.git    #仓库的ssh
     branch: master
```

4. #没有格式可能是因为 URL （in _config.yml） 写错了

## theme-butterfly 配置

1. 下载 butterfly 到 themes
2. 看文档
   1. 下插件=》调试