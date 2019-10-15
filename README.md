## 工程简介：

	前端使用node，运行mock数据。初始化渲染页面

## 步骤
1. 安装node

2. 安装cnpm

3. 安装 cnpm i koa

4. npm i koa-bodyparser

5. npm i koa-router		

   > get请求方式：url: http://192.168.3.45:3001/api/action/a 



## 使用教程

1. 在action下新建文件夹，例如“菜单管理”。
2. 新建.js文件，存放mock数据
3. 在api.js里面引入外部刚建好的js文件
4. 在api.js最下面路由设置：router.use('/action', xxx.routes());
5. 在刚才建好的.js文件里，设置post请求路径为router.post("/xxx", function (ctx, next) {});