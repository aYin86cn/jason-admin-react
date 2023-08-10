// import { useState } from 'react'
// import {Link} from 'react-router-dom'

import styles from "./index-sider.module.less"
import {routers} from "../../../router"
// console.log("routers",routers);

// import {useState} from "react";

import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const iconDom=(iconStr:string): JSX.Element =>(
  <i className={iconStr}></i>
)

const navItems: MenuItem[] = [
  // getItem('Option 1', '1', iconDom("i carbon:accessibility-alt")),
  // getItem('Option 2', '2', iconDom("i carbon:accessibility-alt")),
  // getItem('Option 3', '3', iconDom("i carbon:accessibility-alt")),

  // getItem('Navigation One', 'sub1', iconDom("i carbon:accessibility-alt"), [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),

  // getItem('Navigation Two', 'sub2', iconDom("i carbon:accessibility-alt"), [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),

  //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  // ]),
];






// const navClick = (item: OutputItem) => {
//   console.log(item);
// }
// const navSelect = (data:any) => {
//   console.log("navSelect",data);
// }



export default ()=>{
  console.log("routers",routers);
  routers.forEach((item) => {
    if (item.path === "/layout" && item.children) {
      
      item.children.forEach((child) => {
        const items:MenuItem[]=[]
        if (child.children) {
          child.children.forEach((sub) => {
            items.push( getItem( sub.path, sub.label, ) ); // 添加子项对象
          });
        }
        navItems.push(
          getItem(
            child.path, 
            child.label,
            child.icon !== undefined ? iconDom(child.icon) : undefined,
            items
          )
        );
        console.log("item1",item);
        
      });
    }
  });
  
  console.log("MenuItem",navItems);
  return (
    <div >
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={navItems}
      />
    </div>
  );
};
  

