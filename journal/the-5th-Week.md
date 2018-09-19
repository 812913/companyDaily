+++
title = "2018-08-12"
weight = 72
+++  

# 周末总结  
## 干了什么  
08.06，Mobx-test讲解、choerodon-front-boot源码讲解、简单了解TypeScript及其编译和React配合使用、周一晚总结

08.07，choerodon-ui讲解、跟着前端开发手册创建新模块、新页面、choerodon-ui的package.json部分，补充之前不是很了解的知识，比如依赖类型的peerDependencies、了解更多的npm脚本内容相关内容

08.08，继续看cherodon-ui源码，简单的了解.sh文件的语法及常见的Unix命令、了解typescript、JavaScript、css的格式验证工具、跟着老师做了一个Demo，完成配置路由、菜单、从接口读取数据并显示、扩展Demo的功能，完成排序、筛选、删除等

08.09，完善Demo的编辑功能、choerodon-test测试

08.10，继续完善choerodon-test，完成编辑保存功能，看下dashboard-setting的源码，发现源码中的新知识，对自己做的test进行改善

## 看下别人日志  
(1)`React-intl` 实现多语言      
在choerodon-front-iam/iam/src/app/iam/locale文件中配置
在组件中的使用方法大致如下：

        import { injectIntl, FormattedMessage } from 'react-intl';

        @injectIntl
        export default class Organization extends Component {

        render() {
            //const {intl} = this.props;
            //intl.formatMessage({id: 'intl.name'},{name: 'joe'});
            return (
            <Page service={...}>
                <Header title={<FormattedMessage id={...}/>}>
                {...}
            </Page>
            )
        }
    }  

更多参考：       
* [在React项目中使用React-intl实现多语言支持](https://segmentfault.com/a/1190000005824920)   
* [20646 08-06](https://wiki.choerodon.com.cn/bin/view/O-Choerodon/P-2018%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83%E5%AE%9E%E4%B9%A0%E7%94%9F%E7%BB%84/%E5%9F%B9%E8%AE%AD%E6%97%A5%E6%8A%A5/%E5%89%8D%E7%AB%AF/20646%EF%BC%88%E5%88%98%E6%9D%8E%EF%BC%89/08-06/)   
  
(2)前后端数据交互    
api接口可在 `http://api.staging.saas.hand-china.com/manager/swagger-ui.html#/` 查询   

通过`axios.methods()`进行数据交互:

        //...
        axios.post(`/iam/v1/roles/search?source_id=0&need_users=false&page=${current - 1}&size=${pageSize}`, JSON.stringify({
        level: 'site',
        }))
        .then((data) => {
            //...
        })
        .catch((error) => {
            Choerodon.handleResponseError(error);
            //...
        });

(3)其他人的cherodon-test   
* Content内容  
  iam项目中有设置多语言，设置code即可画出相关信息

        <Content code={...}></Content>

而这次测试中，没有配置多语言，那就直接传入相关信息：

        <Content title="" description="" link="">

* 编辑保存功能    
对数据库数据进行修改时，先通过Object.assign(target, ...sources)方法进行数据拷贝，再传入接口

        @action
        updateData(editData, data) {
            console.log(data);
            axios.post(`/iam/v1/dashboards/${editData.id}`, JSON.stringify(Object.assign({}, editData, data)));
            this.refresh();
        }

编辑保存后要将editData数据清空

        this.setState({
            visible: false,
            editData: {},
        }); 

(4)Nunjucks学习   
参考：[20646 08-06](https://wiki.choerodon.com.cn/bin/view/O-Choerodon/P-2018%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83%E5%AE%9E%E4%B9%A0%E7%94%9F%E7%BB%84/%E5%9F%B9%E8%AE%AD%E6%97%A5%E6%8A%A5/%E5%89%8D%E7%AB%AF/20646%EF%BC%88%E5%88%98%E6%9D%8E%EF%BC%89/08-06/)    

(5)开发界面大致步骤    
1. 配置路由文件IAMindex.js    
2. 在config中menu.yml中添加菜单：site表示全局层，organization、permission等层级，可在数据库中找权限    
3. 配置locale下的国际化文件，并给出global引用，可设置{name}变量    
4. Containers global中创建文件夹，文件名用-连接，样式根据文件夹名字命名    
5. 组件给出service控制权限，一个页面必引用Content, Header, Page组件    

(6)bisheng模块   
[20646 08-07](https://wiki.choerodon.com.cn/bin/view/O-Choerodon/P-2018%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83%E5%AE%9E%E4%B9%A0%E7%94%9F%E7%BB%84/%E5%9F%B9%E8%AE%AD%E6%97%A5%E6%8A%A5/%E5%89%8D%E7%AB%AF/20646%EF%BC%88%E5%88%98%E6%9D%8E%EF%BC%89/08-07/)   

(7)向接口请求数据   
在发送请求时，`get`和`post`请求的序列化函数不同，`get`请求只能用`querystring`序列化，而`post`要用`JSON.stringify`把请求参数放到请求体中   

(8)test中的编辑后保存数据  
数据提交是通过`form`的`validateFields()`方法获取到当前最新的数据（store中的数据还未修改），以数组的形式传递到body中，并使用`Object.assgin`覆盖掉原数据

        form.validateFields((error, values, modify) => {
        DashboardSettingStore.updateData(values).then(data => {
            ...
        });
        });

        updateData(values) {
        return axios.post(url, JSON.stringify(Object.assign({}, this.editData, values)))
            .then(action((data) => {
            Object.assign(this.editData, data);
            return data;
            }))
            .catch(action(error => {
            ...
            }));
        }

(9)[国际化reactintl实例](https://wiki.choerodon.com.cn/bin/view/O-Choerodon/P-2018%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83%E5%AE%9E%E4%B9%A0%E7%94%9F%E7%BB%84/%E5%9F%B9%E8%AE%AD%E6%97%A5%E6%8A%A5/%E5%89%8D%E7%AB%AF/20646%EF%BC%88%E5%88%98%E6%9D%8E%EF%BC%89/08-10/)   

(10)[universal-cookie](https://www.npmjs.com/package/universal-cookie)    

(11)[url](https://www.npmjs.com/package/url)   

(12)object.omit   
去除对象上指定的属性，返回剩下的属性  

(13)`*.d.ts`   
在构建工程的时候，官网的教程指出，还需要安装`@types/react`和`@types/react-dom`，这两个是`ts`的声明文件，用于`ts`的识别，而且对编辑器的语法提示有很好的效果。

`react`的声明文件
位于`node_modules/_@types_react`的`index.d.ts`

从中可以看到一些官网没提到的内容：

在jsx中，使用props的类型判断需要引入prop-types，而在tsx中，可以定义一个Interface，然后作为Component<T>的泛型参数。另外也支持state定义为Interface，作为Component<T,P>的P参数。
        
        interface Props{
            name:string;
            el:HTMLElement;
        }

        interface State{
            count:number;
        }

        export class DomSelector extends Component<Props,State>{
            //TODO
        }

不得不说，这个ts声明很完整，读下来感觉就像使用文档一样，甚至能对react针对DOM类型的改进，各种Event类型的构造，封装等等有一个全新的认识。当然，不局限于react.d.ts，比如global.d.ts是针对js的原始类型的声明，还有csstype.d.ts也有声明，这绝对是对开发效率非常有帮助的。  

(14)[choroedon Permission学习](https://wiki.choerodon.com.cn/bin/view/O-Choerodon/P-2018%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83%E5%AE%9E%E4%B9%A0%E7%94%9F%E7%BB%84/%E5%9F%B9%E8%AE%AD%E6%97%A5%E6%8A%A5/%E5%89%8D%E7%AB%AF/20600%EF%BC%88%E6%9B%B9%E6%98%B1%EF%BC%89/08-07/)   

(15)项目中的错误处理   
出错的时候，使用全局对象来处理错误`Choerodon.handleResponseError(err);`

(16)[rc-form](https://wiki.choerodon.com.cn/bin/view/O-Choerodon/P-2018%E7%A0%94%E5%8F%91%E4%B8%AD%E5%BF%83%E5%AE%9E%E4%B9%A0%E7%94%9F%E7%BB%84/%E5%9F%B9%E8%AE%AD%E6%97%A5%E6%8A%A5/%E5%89%8D%E7%AB%AF/20600%EF%BC%88%E6%9B%B9%E6%98%B1%EF%BC%89/08-09/)  

(17)要想在外部修改 form 的值，必须通过`setFieldsValue`方法来实现  

(18)要在项目当中增加新的模块，必须首先在 `Menu.yml` 中添加模块   

(19)querystring模块  
- 作用
	序列化：把对象转换为字节序列的过程称为对象的序列化。
	反序列化：把字节序列恢复为对象的过程称为对象的反序列化。

- parse这个方法是将一个字符串反序列化为一个对象
        
        const querystring = require("querystring")
        querystring.parse("name=whitemu&sex=man&sex=women")
        results:
            { name: 'whitemu', sex: [ 'man', 'women' ] }

        querystring.parse("name=whitemu#sex=man#sex=women","#",null,{maxKeys:2})
        results:
            { name: 'whitemu', sex: 'man' }

四个参数:    
* 参数1：需要反序列化的字符串  
* 参数2：分割str这个字符串的字符或字符串  
* 参数3：用于划分键和值的字符或字符串，默认值为"="  
* 参数4：对象可设置maxKeys和decodeURIComponent  

- stringify 将一个对象序列化成一个字符串
        
        querystring.stringify({name: 'whitemu', sex: [ 'man', 'women' ] });
            results:
                'name=whitemu&sex=man&sex=women'

        querystring.stringify({name: 'whitemu', sex: [ 'man', 'women' ] },"*","$");
            results:
                'name$whitemu*sex$man*sex$women'

对应序序列化对象，
拼接后的字符串连接符号，
key与value的连接件，

## 周末总结  
先说下自己情况，本周接触的都是公司的框架，使用下来觉得确实非常不错，对常见的模块进行封装，极大地提高开发效率。本周自己也在看源码，但总是觉得东西很多有点无从下手，老师曾提到过的国际化、多语言这些竟然也没有深入去看(实则是不知道何处下手去看，但今天看了其他人的博客好像知道了)。通过老师带着我们做Demo和choerodon-test倒是学到了不少，对choerodon-ui中的Table、Form组件的使用大致了解，也踩了一些坑。看源码，了解了一些细节问题，比如依赖类型、sh文件语法、常见的语法检查工具等。但总的来说，觉得自己进度很慢，没抓住重点(看了别人的日志，更有这种感觉)。   
今天看了别人的日志，发现大家遇到的问题、学习的东西确实还有一些差别。很庆幸看了他们的日志，让我了解到更多没有注意的东西，也让我突然发现有些东西我是没有记录的，一些东西比如数据接口等这些以后可能经常要用的东西当时知道了，就没把它记下来，我觉得这是非常不好的。还是应该把该记得笔记做好，这样才能方便以后查阅。  
