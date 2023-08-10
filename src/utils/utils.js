const $ra = {
  map: new WeakMap(),
  o(element, callback, duration) {
    let str = $rs(10);
    let dur = duration || 100;
    if (callback) {
      const observer = new ResizeObserver((entries, observer) => {
        $ti.s(str, () => {
          callback(entries, observer);
        },dur);
      });
      observer.observe(element);
      this.map.set(element, observer);
    }
  },
  d(element){
    const observer = this.map.get(element);
    if (observer) {
      observer.disconnect();
      this.map.delete(element);
    }
  }
};

const $ti = {
  data: new Map(),
  s(s, fn, ms, e) {
    // if (!$tCore.validate_entry()) { return; }
    this.c(s);
    this.data.set(s, setTimeout(fn, ms, e));
  },
  c(s) {
    const timer = this.data.get(s);
    if (timer) {
      clearTimeout(timer);
      this.data.delete(s);
    }
  }
};

const $ls={//storage
  s(key,value){
    if(typeof(value)!='string'){
      localStorage.setItem(key,JSON.stringify(value))
    }else{
      localStorage.setItem(key,value)
    }
  },
  g(key){
    // return JSON.parse(localStorage.getItem(key));
    let valStr=localStorage.getItem(key);
    if (/[\'\(\{]/.test(valStr)) {
      try {
        return JSON.parse(valStr);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    }else{
      return valStr;
    }
  },
  d(key){
    localStorage.removeItem(key);
  }
}

const $ss={//session
  s(key,items){
    if(typeof(value)!='string'){
      sessionStorage.setItem(key,JSON.stringify(items));
    }else{
      sessionStorage.setItem(key,items);
    }
  },
  g(key){
    return JSON.parse(sessionStorage.getItem(key) || "[]")
  },
  d(key){
    sessionStorage.removeItem(key);
  }
}


const $rd=function(op){//randomData
  //{ min:0, max:30000, length:20, group:2 }
  var arr=[]
  for(var i=0;i<op.group;i++){
    var arrsub=[]
    for(var j=0;j<op.length;j++){
      var num=Math.round(Math.random()*(op.max-op.min)+op.min);
      arrsub.push( num);
    }
    //arrsub.sort();
    arr.push(arrsub);
  }
  return arr;
}

const $rs=function(e) { 
  e = e || 6;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz",
  a = t.length,
  n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

const $rn=(mn,mx)=>{//randomString
  var Range = mx - mn;   
  var Rand = Math.random();   
  return (mn + Math.round(Rand * Range))
}


const  $evt={
  add:(el,eName,hd,uc=false)=>{
    el.addEventListener(eName,hd,uc);
  },
  remove:(el,eName,hd,uc=false)=>{
    el.removeEventListener(eName,hd,uc);
  },
}

const $dt=()=>{//device type
  let na=navigator.userAgent
  let dw=document.body.clientWidth,
      dh=document.body.clientHeight,
      pa=1024,
      pc0=1366,
      pc1=1920,
      pc4=3840,
      pc8=7680,
      dt=""
  if(dw>=pc8||dh>=pc8){ dt="pcXL"}
  else if(dw>=pc4||dh>=pc4){dt="pcLG"}
  else if(dw>=pc1||dh>=pc1){dt="pcMD"}
  else if((dw>=pc0||dh>=pc0)){dt="pcSM"}
  else if(!na.match("Mobile")){dt="pcMI"}
  else if((dw>=pa||dh>=pa)&&na.match("Mobile")){dt="pad"}
  else if(na.match("Mobile")){dt="mobile"}
  // console.log("na",na,dt);
  return dt
}


const utils = {$ti,$ls,$ss,$rd,$rs,$rn,$evt,$ra,$dt};
for(let i in utils){
  window[i]=utils[i];
}
