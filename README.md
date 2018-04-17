# react-chat-job
## 项目描述

## 运行

### 前端  `npm run start`
> http://localhost:5566

### 后端  `npm run server`
> http://localhost:9090

## 目录结构

## 问题总结
### package.json 配置
1. 代理  `"proxy": "http://localhost:9090"`
2. antd css 按需加载 和 装饰起 插件配置
```
    "plugins": [
          [
            "import",
            {
              "libraryName": "antd-mobile",
              "style": "css"
            }
          ],
          [
            "transform-decorators-legacy"
          ]
        ]
```