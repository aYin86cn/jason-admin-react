//数组的定义方式
let arr1:number[]=[1,2,3,4];
let arr2:string[]=["a","b","c"];
let arr3:Array<number>=[1,2,3,4];

// 数组中可能存在多个类型
let arr4:(string|number)[]=[1,'b']//无顺序
let arr5:[number,string]=[1,'b']//有顺序

let arr6:{id:number;name:string;}[]=[
  {id:1,name:"jason"},
  {id:2,name:"ayin"},
]

// 函数
const fn1=(a:number,b:number):number=>{
  return a+b
}

const fn2:(parasm1:number,params2:number)=>void=(a:number,b:number=1):void=>{//参数默认值
  console.log(a+b);
}

//interface
interface Ip1{
  name:string;
  age:number;
}
interface Ip2{
  change():void;
}

// implements
class Person implements Ip1,Ip2{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }
  change(){

  }
}

//泛型
const funcX = <T,>(arg: T): T => {
  return arg;
};

const result1 = funcX<number>(1);
const result2 = funcX<string>("a");


function funcy<T>(arg:T):T{
  return arg;
}

funcy<number>(1)
funcy<string>("a")


//interface 和泛型 联合使用

// 相当于T扩展了string的属性
function fun3 <T extends string>(arg:T):number{
  return arg.length;
}
fun3<string>("Hello")

function fun4 <T extends number[]>(arg:T):number{
  return arg.length;
}
fun4<number[]>([1,2,3,4])

function fun5 <T extends number[]|string>(arg:T):number{
  return arg.length;
}
fun5<string>("hello")
fun5<number[]>([1,2,3,4])
// fun5<string[]>(["a","b","c"])这样太繁琐，所以需要用interface+泛型来实现

interface Idata{ length:number; }
function fun6<T extends Idata> (arg:T):number{
  return arg.length;
}
fun6<string[]>(["a","b","c","d"])
fun6<number[]>([1,2,3,4])
fun6<string>("123abc")

//接口泛型

interface IPromise<T>{
  data:{};
  header:{};
  status:T;
}

let data:IPromise<string>={
  data:{},
  header:{},
  status:"200"
}
//泛型结合class使用
class Person1<T>{
  userName:T
  constructor(name:T){
    this.userName=name;
  }
}
let p1=new Person1<string>("jason");



export default ()=>{
  return (
    <div>TS高阶知识，需要打开ts03.tsx来查看</div>
  )
}