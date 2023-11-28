# 原神，启动！

>宇宙安全免责声明：
>本站只是代理挂载展示，并无其他作用。
>转跳访问的网页和本站没有任何关联，也与《原神》或其母公司miHoYo没有任何关联，请自行甄别，本站不承担任何直接或间接的后果。
>本网站是一个纯粹的技术示例，旨在展示和分享我们的技术能力。
>网站的设计和内容受到《原神》的启发，并尽可能地复制了《原神》的登录界面。
>我们对此表示敬意，并强调这个项目不是官方的《原神》产品，也没有与《原神》或其母公司miHoYo有任何关联。
>我们没有，也无意从这个项目中获得任何经济利益。这个网站的所有内容仅供学习和研究目的，以便让更多的人了解和熟悉WebGL开发技术。、
>如果miHoYo或任何有关方面认为这个项目侵犯了他们的权益，请联系我们，我们会立即采取行动。

------

复刻修改自[gamemcu](https://github.com/gamemcu)所编写的[www-genshin](https://github.com/gamemcu/www-genshin)

本人技术渣，还请大佬们轻喷

修改了`Menu.tsx`、 `GameManager.ts`文件

`Menu.tsx`中添加了关于控制UI显示的部分，并添加了的自己的网页统计

`GameManager.ts`中修改了关于转跳网页的部分

以下是使用方法：

- 在网页后添加参数?wallpaper=1，可关闭所有UI当作壁纸使用（使用Lively Wallpaper或者Wallpaper Engine）
- 在网页后添加参数?start={所要启动的网站}（不含http或https协议头），可在点击后启动该网站

示例：

https://localhost:5173/?wallpaper=1



https://localhost:5173/?start=www.example.com



如果你想复刻，请去除`Menu.tsx`中两处`// 统计`中的代码

启动代码

```js
npm i
npm start
```

如果npm比较慢，可使用cnpm




以下是原项目README

# 原神启动

> 免责声明：
本网站是一个纯粹的技术示例，旨在展示和分享我们的技术能力。网站的设计和内容受到《原神》的启发，并尽可能地复制了《原神》的登录界面。我们对此表示敬意，并强调这个项目不是官方的《原神》产品，也没有与《原神》或其母公司miHoYo有任何关联。我们没有，也无意从这个项目中获得任何经济利益。这个网站的所有内容仅供学习和研究目的，以便让更多的人了解和熟悉webgl开发技术。
如果miHoYo或任何有关方面认为这个项目侵犯了他们的权益，请联系我们，我们会立即采取行动。

## 简介
视频介绍：[【超还原！three.js复刻原神启动，网页就能玩】](https://www.bilibili.com/video/BV1E8411v7xy/?share_source=copy_web&vd_source=a8feede4d26d2a3cfa4e68803fdd2c94)

《原神启动》是一个基于xviewer.js开发的在线网站，本仓库包含了此项目的所有源码。前端开发我们也在摸索学习，不规范的地方欢迎大家指正。由于本网站与《原神》比较接近，大家切勿将本源码用于不正当用途！

由于网站访问量比较大，免费的托管服务都不让用，我自己的服务器也因为被攻击暂时没有对外了，如果有云服务商愿意赞助将不胜感激。我们也会制作更多有趣的项目开源给大家。

启动代码

```js
npm i
npm start
```
如果npm比较慢，可使用cnpm

## xviewer.js是什么
xviewer.js是一个基于three.js的插件式渲染框架，它对three.js做了一层简洁优雅的封装，包含了大量实用的组件和插件，目标是让前端开发者能更简单地应用webgl技术。xviewer.js也会在近期开源，我们也在制作更多有趣的演示案例，欢迎大家关注我的b站账号。[【three.js实现水墨杭州迎亚运】](https://www.bilibili.com/video/BV1yG411Z7sw/?share_source=copy_web&vd_source=a8feede4d26d2a3cfa4e68803fdd2c94)也是基于xviewer.js开发的。

## three.js教程
制作教程是一件非常费时费力的事，所以我对所有愿意制作教程的博主给予敬意，以下是我比较推荐的内容

官网手册：[Three.js Fundamentals](https://threejs.org/manual/#en/fundamentals)

视频教程：[Three.js Journey](https://threejs-journey.com/)（b站有搬运）

shader教程：[The Book of Shaders by Patricio Gonzalez Vivo & Jen Lowe](https://thebookofshaders.com/?lan=ch)

## 交流群
暂无计划
