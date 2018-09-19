+++
title = "2018-07-15"
weight = 96
+++

# 周末
## 作业
[gitHub地址](https://github.com/812913/Blog)

访问步骤：

    git clone https://github.com/812913/Blog
    start.sh (启动Docker)
    sh build.sh
    sh run.sh
    使用192.168.99.100:1313访问
    sh stop.sh

作业内容：
使用Hugo搭建一个静态博客，并将其封装成一个镜像。

搭建过程：

    1. 安装hugo,使用`hugo version`检查是否安装成功
    2. 创建远程仓库Blog并克隆到本地，`cd Blog`，Git Bash Here
    3. `hugo new site mySite`创建站点
    4. `cd themes`进入主题文件夹
    5. `git clone https://github.com/laozhu/hugo-nuo.git`下载主题，本站点使用的是hugo-nuo主题(注意，有些主题可能要求的hugo版本较高)
    6. 使用mySite/themes/hugo-nuo/exampleSite夹下的config.toml文件替换mySite夹下的config.toml
    7. 进入到mySite文件
    8. `hugo new post/hello-world.md`创建hello-world.md，在mySite/content下多了一个post/hello-world.md文件，写日志（注意，将draft参数设为false，这样才能将markdown文件转换成html文件）
    9.  `hugo server`查看效果
    10. 进入Blog，创建Dockerfile文件，文件内容如下

            FROM registry.saas.hand-china.com/hep/hugo:latest

            COPY mySite/ /usr/share/blog

            WORKDIR /usr/share/blog

            # 暴露端口
            EXPOSE 1313

            CMD hugo 

    11. 创建build.sh，文件内容如下：

            docker build -t hugoblog:v1.0.0 . 

    12. 创建run.sh，文件内容如下：

            docker run -d -p 1313:1313 --name=hugoblogserver  hugoblog:v1.0.0 hugo server --baseUrl=192.168.99.100 --bind=0.0.0.0

    13. 创建stop.sh,文件内容如下：
            
            docker kill hugoblogserver
            docker rm hugoblogserver
            
    14. 将上述修改提交到远程仓库
    15. 按访问步骤进行访问





## 总结
哇，一周竟然过去了！！！时间过得非常的快！！！

先说一下本周的学习情况吧

从7.9号开始。第一天，报道，装软件。

7.10号，第二天，Git学习。其实凡哥有讲过让我们好好看看Git和MarkDown，但我心里总觉得实习还没正式开始，一整天都觉得恍恍惚惚。只是看了一下Git教程。之前也曾用过Git，但都比较简单并且时间久，记得不太清楚了。一整体把Git从头到尾通了一遍，加深了印象，但其实掌握的还是不好，从后边的Git测验可以看出来。不过我认为，我们目前可以先掌握Git基础的使用，至于后边遇到问题了，再针对性学习，应该也会很不错。晚上的时候，凡哥说我们每天都要提交日报，讲了日报的一些编写要求、怎么提交种种，讲真我没有很懂，因为我看不清，啊啊啊，我也很着急。由于白天的懈怠再加上我之前没怎么写过Markdown，当天晚上搞到12：40左右，才交上一个我自己都看不下去的一个东西。

7.11号，第三天，Markdown学习、前端测试、Git测试、开学典礼、简单Linux命令。由于昨天晚上日报写的真的很撇加上我意识到自己有点松散，我决心今天一定要好好学习。早上开始看Markdown，把常见的用途从头到尾通了一遍（嗯~真的蛮简单的）。10:00的时候Git测试，好吧，我承认我没几个是确定的。Git的指令很多，有一些撤销、回滚操作等等，我好像一直都没弄清楚，总之，就是做的很不好。鞋屋继续看没有做完的Markdown，14:00的时候做前端测试，主要就是HTML、CSS、JS的基础知识，觉得有很多细节的问题，还算比较简单。开学典礼后，看了Linux的一些基本指令。Linux又是一个我之前没有接触的东西(唉，自己不会的还真的蛮多的)，我只看了前面的一些内容，后边的还没来得及看。不过Linux好像还真的蛮有用的。晚上的时候好像提到了虚拟机，Docker什么的，尝试安装Docker，装了一晚上，没有成功，唉

7.12号，第四天，安装Docker、常用vagrant指令、Docker学习、前端视频。昨天没装好的Docker继续安装，毕竟学长说这个后边都要用到的，软件没装好，后边可怎么学。尝试一上午，终于把昨天学长演示的几个vagrant指令过了一遍，下午的时候看了Docker的一些基础概念，镜像、容器、仓库等等。认真看下去，好像那些觉得生僻的词好像也不那么难懂。也看了一些前端的视频，主要是CSS部分，不过好像有点太基础了，硬着头皮想着过一遍。

7.13号，第五天，继续学习Docker、前端视频。随着前一天看了Docker的pdf，但由于没网，加上没有公司提供的镜像，只是看看没有操作，今天凡哥带着我们大体上走了一遍，我用mySQL走了一遍，终归是把Docker的常用操作跑通了。由于凡哥讲的时候涉及了Docker仓库、Docker Compose项目这些，又去pdf看了一下。晚上的时候凡哥布置了本周末的任务。

7.14号，第六天，今天周六了。根据之前的计划，今天我要去苏州去看看我爸妈。电脑只有带上了，还有作业嘛。很气愤，我电脑充电器只带了一半，没法充电，唉！

7.15号，第七天，今天周日。我之前买的下午17:00的车票，赶紧回来。把日志写了。


总之，一周过去了，第一天没收回心，第二天赶紧学习，每天好像总会接触到新东西，一周都是追赶的状态，应该是会进步的吧(想想就开心)，下周就要正式学习前端的知识了，希望自己每天都会进步。