
export default ()=>{
  //[propName:string] 表示任意类型的属性
  let a:{name:string,[propName:string]:any};
  a={name:"Jason",age:19,a:"a",b:"b"}

  //函数解构声明
  let b:(a:number,b:number)=>number;
  b=(a,b)=>{
    console.log(a+b);
    return a+b
  }
  // b(1,2);
  
  //数组 string[]
  let e:string[];
  e=['a','b','c']

  let f:number[];
  f=[1,2,3,4]

  let g:Array<number>//等于number[]
  g=[1,2,3,4]


  //元组
  let h:[string,string];
  h=["hello","world"] 
  // h=["hello"]  多了少了，都会报错，元组限制了数量

  //元组
  enum Gender{
   Male,
   Female, 
  }

  let i:{name:string,gender:Gender};
  i={
    name:"Jason",
    gender:Gender.Male
  }
  console.log("gender",i.gender===1,Gender.Male,Gender.Female);
  

  //类型别名
  type myType=1|2|3|4|5;
  let k:myType;
  let l:myType;
  k=3
  l=5

  class Person{
    static gender:string="Male";//静态属性 或 类属性
    readonly name:string="JasonClass";//只读属性
    age:number=12;//实例属性，需要通过对象的实例去访问
    sayHello(){
      console.log("hello!!")
    }
  }
  //实例化
  const per=new Person();
  // per.name="ayin" 如果属性前面有readonly则不可用修改
  per.sayHello()

  class Dog{
    constructor(){
      console.log("构造函数执行了");
      
    }
    bar(){

    }
  }

  return (
    <div>ts01
      {JSON.stringify(a)}
      <hr />
      {JSON.stringify(per)}实例属性
      <hr />
      {Person.gender}类属性
    </div>
  )
}