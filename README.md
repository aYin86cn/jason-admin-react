# jason-admin-react

## This is a project under development!

This is an admin system based on react development, I developed this system in the process of learning react, so then various stages, may see this system is not the same. At the beginning of this system is even a state of unavailability.

It has a lot of my personal features. This repository is completely free, so please feel free to download and use it.

------
## 这是一个正在开发中的项目！

这是一个基于react开发的admin 系统，我在学习react的过程中，开发了此系统，所以再各个阶段，可能看到的这个系统并不一样。在初期这个系统甚至是一个不可用的状态。

有着很多我的个人特色，本仓库完全免费，请随意下载使用。


------
## 学习日志


- 20230809
  - 习惯用vue了，react写着真费劲，长期习惯了solo开发，没怎么用过TS，现在学React的同时用TS写代码，非常痛苦。
  - 用TS写完这个工程，就会把TS雪藏了，除非团队协作必须上TS，否则solo开发绝对不会用TS，完全就是给自己上枷锁。
  - 今天到此为止，明天要移除semi-ui改用antd。

- 20230810
  - 替换semi-ui为antd
  - 集成mock，为动态路由做准备，折腾好久没生效，发现是版本问题！
  - 完成简易登录页面
  - 完成路由守卫开发
  - 完成axios封装和调用
  - 心得：用习惯了vue2-3+elementUI，使用react+atd的时候感觉很多东西都比较繁琐。vue yyds! 尤其vue3的写法，和原生差不多，模板语法写起来比jsx、tsx要爽很多。
  - 晚上8:10分折腾了几个小时的动态路由终于写完了，自己想出来的一个方案，其实是根据之前vue的动态路由思路实现的。结果还可以。
  - 之前写vue3动态路由的时候，文件的动态导入受限，不支持多层目录嵌套式的动态导入。这次在react实现的时候，新建了一个文件预先导入了各个组件，然后在序列化路由的时候再把组件赋值给路由，无需像之前一样动态加载组件。后期写一下懒加载，应该就很完美了。回头把vue3工作台的动态路由也按照这个思路完善一下。