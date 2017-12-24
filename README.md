# 共享书签 Shared Bookmarks

![](./docs/screenshots.png)

## 简介

使用 React + React-Redux 进行构建的单页面应用

### 本地安装

```sh
git clone https://github.com/Monsoir/Shared-Bookmarks.git
cd Shared-Bookmarks

npm install
npm start
```
## 书签数据 JSON 格式

```json
{
    "title": "分类名称",
    "catelogs": [
        {
            "address": "书签地址",
            "name": "书签名字",
            "favicon": "书签网站的图标，选填，App 会通过网站规范进行获取",
            "remark": "对书签的备注，选填"
        },
        {
            "//": "..."
        }
    ],
    "categories": [
        {
            "title": "二级分类名称",
            "catelogs": [
                {
                    "//": "...",
                }
            ],
            "categories": []
        }
    ]
}
```

