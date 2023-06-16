
<div align="center">
<br/>

  <h1 align="center">
    Admin Plus
  </h1>

  <h4 align="center">
     开 箱 即 用 的 企 业 级 开 发 平 台 前 端 框 架
  </h4> 

  [预览](http://myproject-template.gitee.io/admin-plus)   
  
  <h5 align="center">
     【Admin角色】账号：admin，密码：123456【Test角色】账号：test，密码123456
  </h5> 

</div>

<div align="center">
  <img  width="92%" style="border-radius:10px;margin-top:20px;margin-bottom:20px;box-shadow: 2px 0 6px gray;" src="https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show2.png" />
</div>

### 🍃 开发文档

 [查看文档](https://gitee.com/myProject-template/admin-plus/blob/master/README.md)

### 🌈 项目概述 

* 基于vue3、vite4、pinia2、view UI Plus 集成的后台管理系统前端框架，开箱即用。
* 实现了动态路由，路由守卫，按钮权限，数据权限，以及相关的业务组件。
* 一个高颜值的、轻量级的、易扩展的后台管理系统！


### ☘ 更新日志

 [查看日志](https://gitee.com/myProject-template/admin-plus/commits/ba0e367f94eb4b1a3df23e3ec08921efb95f5523)

### 🍚 功能概览

- ✔ 动态路由: 实现动态获取路由及权限管理。
- ✔ 按钮权限: 实现根据不同角色获取不同的按钮权限。
- ✔ 数据权限: 同一接口，后台根据不同角色返回不同的数据列表。
- ✔ 数据表格: 导入高扩展性，高封装性的表格插件Vxe-table，可实现更多复杂功能的数据表格。
- ✔ 主题切换: 系统个性化主题、布局、护眼模式、暗黑模式。
- ✔ 全局组件: 实现复用性高的，易扩展的全局组件。
- ✔ 动态表单: 动态生成form表单，可配置的、易扩展的（开发中）。
- ✔ 动态表格: 动态实现表格页面及增删改查操作（开发中）。
- ✔ 多数据源: 适用于多种场景 纯粹多库 读写分离 一主多从 混合模式（开发中）。
- ✔ 限制流量:  使用 @RateLimit 限制接口访问频次。


### 🔨 项目结构

```
Admin Plus
│
├─public 公共资源
│
├─src 主业务
│  │
|  ├─api 网络请求 
|  |
|  ├─assets 静态资源
|  |
|  ├─components 组件
|  |
|  ├─icons Svg矢量图标
|  |
|  ├─layout 系统布局
|  |
|  ├─router 路由
|  |
|  ├─store Pinia仓库状态管理
|  |
|  ├─styles 公共css样式及系统主框架样式
|  |
|  ├─utils 系统工具、公共方法
|  |
|  ├─views 页面视图
|  |
|  ├─app.vue 应用根元素
|  |
|  ├─main.js 入口文件
|  |
|  ├─permission.js 路由守卫、系统权限
|  |
|  └─setting.js 系统配置文件
|
├─.env 系统环境配置
|  
├─index.html 页面项目的入口
|  
├─.gitignore git配置
|
├─.eslintrc.cjs eslint代码检查
|
├─package.json node包管理文件
|  
├─package-lock.json node包版本固定文件
|  
├─vite.config.js vite配置文件
|  
├─README.md 自述文件
|  
├─README.en.md 英文自述文件
│  
└─yarn.lock  yarn包版本固定文件

```
### 🔶 运行环境

Node支持

Node >= 17

浏览器支持

Chrome >=61

Firefox >=60

Safari >=11

Edge >=16

不支持ie(可自行兼容)



### ⚡ 快速启动

前端启动 - frontend

```

克隆项目

git clone https://gitee.com/myProject-template/admin-plus.git

切换环境

nvm install 18.15.0

nvm use 18.15.0

安装依赖

npm install

yarn add

启动项目

npm run start

npm run dev

预览项目

npm run preview

打包项目

npm run build:stage

npm run build:prod 

```

### 📖 帮助文档

👉前端文档：编写中

👉后台文档：编写中

👉接口文档：编写中

### 💬 相关文章

[Vue官网](https://cn.vuejs.org)

[Vite官网](https://cn.vitejs.dev/)

[Pinia](https://pinia.vuejs.org/zh/)

[View UI Plus](https://www.iviewui.com/)

[Vxe-table](https://vxetable.cn/#/table/start/install)

### 🍎 预览界面

| 预览                 |                界面 |
|---------------------|---------------------|
| ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show1.png "屏幕截图.png")  | ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show2.png "屏幕截图.png")  |
| ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show3.png "屏幕截图.png")  | ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show4.png "屏幕截图.png")  |
| ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show5.png "屏幕截图.png")  | ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show6.png "屏幕截图.png")  |
| ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show7.png "屏幕截图.png")  | ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show8.png "屏幕截图.png")  |
| ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show9.png "屏幕截图.png")  | ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show10.png "屏幕截图.png")  |
| ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show11.png "屏幕截图.png") | ![输入图片说明](https://mxd-admin.oss-cn-chengdu.aliyuncs.com/preview/show12.png "屏幕截图.png")

### 💐 特别鸣谢

- 👉 Vue —— 渐进式JavaScript 框架
- 👉 Vite —— 下一代前端开发与构建工具
- 👉 Pinia —— 新一代轻量级的vue状态管理库
- 👉 View UI Plus —— 一个漂亮的、组件丰富的、扩展性强的前端UI组件库。
- 👉 Vxe-table —— 高扩展性、高封装性、高性能的前端表格组件。
- 👉 若依 —— 一套全部开源的、优秀的快速开发平台，毫无保留给个人及企业免费使用。

### 🍻 贡献代码

<p style="padding:10px;"  width="90%">

1. 欢迎提交 [pull request](https://gitee.com/myProject-template/admin-plus/pulls)，注意对应提交对应 `master` 分支

2. 欢迎提交 [issue](https://gitee.com/myProject-template/admin-plus/issues)，请写清楚遇到问题的原因、开发环境、复显步骤。

</p>

感谢每一位贡献代码的朋友、感谢每一个为开源项目做贡献的程序猿。

如果对您有帮助，您可以点右上角 💘Star💘支持

