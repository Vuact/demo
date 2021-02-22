
如果想知道这个项目是如何一步一步搭建起来的，请阅读：
- [搭个简单的博客(上)](https://github.com/Vuact/Blog/blob/main/base/node/Express/%E6%90%AD%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%8D%9A%E5%AE%A2(%E4%B8%8A).md)
- [搭个简单的博客(中)](https://github.com/Vuact/Blog/blob/main/base/node/Express/%E6%90%AD%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%8D%9A%E5%AE%A2(%E4%B8%AD).md)
- [搭个简单的博客(下)](https://github.com/Vuact/Blog/blob/main/base/node/Express/%E6%90%AD%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%8D%9A%E5%AE%A2(%E4%B8%8B).md)

<br>

## 文章目录：

- #### 搭个简单的博客（上）
	- 准备工作
		- 目录结构
		- 安装依赖模块
		- nodemon(服务热启动) + cross-env
		- ESLint
		- EditorConfig
	- 配置文件
		- config-lite
	- 功能设计
		- 功能与路由设计
		- 会话（express-session）
		- 页面通知（connect-flash）
		- 权限控制
	- 页面设计
		- 组件
		- app.locals 和 res.locals
	- 连接数据库
		- 为什么使用 Mongolass
	- 注册
		- model: 用户模型设计
		- views: 注册页
		- 功能：注册与文件上传
- #### 搭个简单的博客（中）
	- 登出与登录
		- 登出
		- 登录
	- 文章
		- 文章模型设计
		- 发表文章
		- 主页与文章页
		- 编辑与删除文章
	- 留言
		- 留言模型设计
		- 显示留言
		- 发表与删除留言
	- 404页面
	- 错误页面
- #### 搭个简单的博客（下）
	- 日志
		- winston 和 express-winston
		- .gitignore
	- 测试
		- mocha 和 supertest
		- 测试覆盖率
	- 部署
