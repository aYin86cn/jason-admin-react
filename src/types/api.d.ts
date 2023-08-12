//这个文件专门定义请求参数的类型和响应的类型

interface HttpCaptchaRes{
  code:number;
  data:string;
  msg:string;
  uuid:string;
}


interface HttpLoginRes {
  code: number;
  msg: string;
  data: Datum[];
}

interface Datum {
  id: number;
  label: string;
  name: string;
  icon: string;
  children?: Child[];
}

interface Child {
  id: number;
  label: string;
  name: string;
}


interface HttpResponse<T = any> {
  data: T;
  status: number;
  code:number;
}