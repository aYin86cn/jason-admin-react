// import { useState } from 'react'
// import {Link} from 'react-router-dom'
import styles from "./index-sider.module.less"
import {routers} from "../../../router"
// import {useState} from "react";

import { Nav  } from '@douyinfe/semi-ui';
// import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';

const iconDom=(iconStr:string): JSX.Element =>(
  <i className={iconStr}></i>
)

interface OutputItem {
  itemKey: string;
  text: string;
  icon?: JSX.Element;
  items?: OutputItem[];
  // parent?: string;
}

const navClick = (item: OutputItem) => {
  console.log(item);
}
const navSelect = (data:any) => {
  console.log("navSelect",data);
}



export default ()=>{
  // const [router] = useState(routers)
  console.log("routers",routers);
  
 

  

  const outputArray: OutputItem[] = [];

  routers.forEach((item) => {
    if (item.path === "/layout" && item.children) {
      item.children.forEach((child) => {
        const newItem: OutputItem = { 
          itemKey: child.path, 
          text: child.label,
          icon: child.icon !== undefined ? iconDom(child.icon) : undefined,
          items:[] as OutputItem[]
        };
      
        if (child.children) {
          child.children.forEach((sub) => {
            newItem.items?.push({ 
              text: sub.label, 
              itemKey: sub.path ,
              // parent:child.path 
            }); // 添加子项对象
          });
        }
        outputArray.push(newItem);
      });
    }
  });


  console.log("outputArray",outputArray);
  return (
    <Nav
      className={styles.nav}
      bodyStyle={{ height: 320 }}
      items={outputArray}
      onSelect={navSelect}
      onClick={data => navClick(data as OutputItem)}
    />
    
  )
}

