export default [
  {id:1,label:'dashboard',name:'工作台',icon:"i carbon:airplay-filled"},
  {id:2,label:'memo',name:'备忘录',icon:"i carbon:airplay-filled"},
  {id:3,label:'developing',name:'开发中',icon:"i carbon:airplay-filled"},
  {id:4,label:"dashboardSub",name:"子工作台",icon:"i carbon:airplay-filled",children:[
    {id:41,label:"dashboardA",name:"工作台A"},
    {id:42,label:"dashboardB",name:"工作台B"},
  ]},
  {id:5,label:"user",name:"用户",icon:"i carbon:user-avatar-filled",children:[
    {id:51,label:"info",name:"资料"},
    {id:52,label:"password",name:"密码"},
  ]},
]