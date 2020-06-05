 ###########目的 
 1.脚手架的根本目的是个人感觉create-react-app虽然好，但是有些重。因为营销类工作中其实是会出现一两个页面的小项目的，所以自己搭建了个简单的react模板； 
 2.脚手架模板目前是单页应用，集成了redux/redux-thunk/react-router4/scss, 打包工具为webpack4（ 使用多进程编译，dll分包，row-loader资源内联,postcss）; 3.脚手架模板支持扩展，可以扩展成多页应用/ssr

###########开发环境

1.npm install 
2.npm run dev

###########生成环境

1.npm run dll 
2.npm run build 
2.node .\server\index.js(开启express服务器，模拟后端）

###########目录结构描述

├── Readme.md                   // help
├── server                      // 服务端
├── src                         // 源码
│   ├── ation                   // redux action 
│   ├── assets                  // 静态资源
│   ├── components              // 组件
│   ├── reducers                // redux reduce
│   ├── store                   // redux store
│   ├── templates               // html or cshtml 模板
│   ├── util                    // 工具函数
│   └── index.js                        // 入口文件                  
├── .babellrc                   // babel配置文件
├── packjson
├── webpack.dev.js              //开发环境webpack配置
├── webpack.dll.js              //第三方库分包配置
├── webpack.prod.js             //生产环境webpack配置