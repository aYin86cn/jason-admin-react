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

**注意现在首次进入是空白屏幕，20230811第三条描述的此bug产生的详细原因，因为动态路由未完善导致的。**

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

- 20230811
  - 动态路由写完后，又做了一下改善，首先把mock导航数据，存放到了sessionStorage中，然后侧边栏用这个数据来初始化导航，路由则拿这个数据来初始化路由，但是初始化的时候，同时把导航数据扁平化，这样方便做导航跳转。其实不做扁平化也行，但并不想路由的层级太深，否则需要不断嵌套一个layoutCommone组件。
  - **动态路由有一个问题，就是进入登录的时候，未获取到mock的导航数据，router已经初始化，所以目前的状况就是首次进来后，导航和路由都未初始化，需要刷新才能让router.tsx获取到导航数据并初始化。后续学习高阶组件后，再回过头处理这个问题。**
  - 学习和配置了redux的使用，太繁琐了，怀念vuex的便利，还有TS....习惯solo了，使用TS浑身不舒服，就和套了一层枷锁一样。
  - 导航配置完毕，包括导航的展开和激活状态
  - 备注一下后续要看的几个状态管理的库，1.zustand 2.jotai 3.mobx 4.recoil 5.dva
  - 界面比较丑陋，我UI设计入行的，这方面最拿手，也因此UI界面对于学习来说不重要，凑合看即可。
  - 明天继续！

- 20230812
  - 今天重新封装了axios，重写了api等接口ts
  - 新增了全局的ytpes interface文件
  - 登录新增了验证码功能，数据请求自mockjs
  - 深入学习redux，更加坚定要放弃redux，太繁琐了。
  - 根据其他视频教程做了一些案例。