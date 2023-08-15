
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
    //public定义的属性，可以在任意位置修改
    public age:number=12;//实例属性，需要通过对象的实例去访问
    
    //private 私有属性，只能在类的内部进行访问，继承类中也无法访问
    // private age:number=12;    
    // protected 受保护的属性，只能在当前类和子类中使用
    getAge(){return this.age};
    setAge(age:number){this.age=age};

    get nameG(){return this.name};
    // set nameS(name:string){this.name=name};


    sayHello(){
      console.log("hello!!")
    }
    
  }
  //实例化
  const per=new Person();
  // per.name="ayin" 如果属性前面有readonly则不可用修改
  per.sayHello()
  console.log("per.nameG",per.nameG);//相当于执行了类中的get nameG这个方法
  // per.nameS="ayin"//相当于执行了set nameS

  //以abstract开头的为抽象类，无法实例化
  //抽象类中可以添加抽象方法
  abstract class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
      console.log("构造函数执行了",this);//this 代表实例化后的这个对象，如dog=new Dog();
      this.name=name;
      this.age=age;
    }
    //抽象方法----没有具体的方法
    //抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写。
    abstract bark():void;

    // bark(){
    //   console.log("动物叫！",this.name);
    // }

  }
  class Dog extends Animal{
    bark(){
      console.log("汪汪汪汪！",this.name);
    }
  }
  

  const dog=new Dog("小黑",3);
  const dog2=new Dog("小白",6);
  console.log("dog",dog);
  dog2.bark()


  class Cat extends Animal{
    gender:string;
    constructor(name:string,age:number,gender:string){
      super(name,age);//如果子类中有构造函数，那么必须调用父类中的super
      this.gender=gender;
    }
    bark(){
      // super.bark();//super表示当前类的父类
      console.log("喵喵喵喵喵！",this.name);
    }
    run(){
      console.log(`${this.name} run!`);
      
    }
  }
  const cat=new Cat("橘猫",3,"母");
  const cat2=new Cat("渐层",6,"公");
  console.log("cat",cat);
  cat2.bark()
  cat.run();



  class C{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name=name;
      this.age=age;
    }
  }
  class D{//这种写法等于上面的写法，语法糖
    constructor(public name:string,public age:number){}
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