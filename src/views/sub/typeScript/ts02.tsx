type mytype={//不能重复声明
  name:string,
  age:number
}

const obj:mytype={
  name:"sss",
  age:11
}

interface myitf{//可以重复声明
  name:string;
  age:number;
}
interface myitf{
  gender:string;
  sayHello():void;
}

const obj2:myitf={
  name:"sss",
  age:11,
  gender:"male",
  sayHello:()=>{console.log("someting");}
}

//定义类时，可以使类去实现一个接口
//实现接口就是使类满足接口的需求
class MyClass implements myitf{
  name;
  age=11;
  gender="male";
  constructor(name:string){
    this.name=name
  }
  sayHello=()=>{console.log("someting");}
}

let newClass=new MyClass("jason")


//泛型  --  在定义函数或者类时，如果遇到类型不明确的情况可以使用泛型
function fn<K>(a:K):K{//这里的K就是泛型
  return a;
}
//可以直接调用具有泛型的函数
fn(1)

//指定了泛型的类型为string
fn<string>("hello");

//两个泛型参数
function fn2<K,T>(a:K,b:T):K{
  console.log(b);
  return a
}

fn2(123,"456");
fn2<number,string>(123,"456");

interface Inter{
  length:number;
}

//T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a:T):number{
  return a.length
}
fn3("123")
// fn3(123)  number无length所以告警。

class MyClass2<T>{
  name:T;
  constructor(name:T){
    this.name=name
  }
}
const mc2=new MyClass2("jason")
// const mc2=new MyClass2<string>("jason")


export default ()=>{
  return (
    <div>ts02
      <p>Interface</p>
      <div>{JSON.stringify(newClass)}</div>
    </div>
  )
}