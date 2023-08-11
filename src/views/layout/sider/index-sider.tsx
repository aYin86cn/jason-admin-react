// import { useState } from 'react'
// import {Link} from 'react-router-dom'

// import styles from "./index-sider.module.less"
// import {routers} from "../../../router"
// console.log("routers",routers);

import {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
// import type { MenuProps } from 'antd';
import { Menu } from 'antd';

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }


// const navItems: MenuItem[] = [
//   getItem('Option 1', '1', iconDom("i carbon:accessibility-alt")),
//   getItem('Option 2', '2', iconDom("i carbon:accessibility-alt")),
//   getItem('Option 3', '3', iconDom("i carbon:accessibility-alt")),
//   getItem('Navigation One', 'sub1', iconDom("i carbon:accessibility-alt"), [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Option 7', '7'),
//     getItem('Option 8', '8'),
//   ]),
//   getItem('Navigation Two', 'sub2', iconDom("i carbon:accessibility-alt"), [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//   ]),
// ];

const iconDom=(iconStr:string): JSX.Element =>(
  <i className={iconStr}></i>
)

interface navMenu {
  key:string,
  icon?:JSX.Element,
  label:string,
  children?:navMenu[],
  type?:'group',
}

interface StoreMenu {
  id:number,
  label: string;
  name: string;
  icon?: string;
  children?:[];
}
const storedMenuJSON = sessionStorage.getItem('navMenu');
const storedMenu: StoreMenu[] = storedMenuJSON ? JSON.parse(storedMenuJSON) : [];

function processNestedRoutes(routes: StoreMenu[]): navMenu[] {
  return routes.map((menuItem) => {
    const {label, name, icon, children} = menuItem;
    let regroup: navMenu = {
      key: label,
      label: name,
      icon: icon?iconDom(icon):undefined,
      children:children ? [] : undefined,
    };
    if (children) {
      regroup.children = processNestedRoutes(children);
    }
    return regroup;
  });
}

const processedMenu: navMenu[] = processNestedRoutes(storedMenu);

console.log("processedMenu",processedMenu);



// const navClick = (item: OutputItem) => {
//   console.log(item);
// }
// const navSelect = (data:any) => {
//   console.log("navSelect",data);
// }



export default ()=>{
  // console.log("routers",routers);
  // routers.forEach((item) => {
  //   if (item.path === "/layout" && item.children) {
      
  //     item.children.forEach((child) => {
  //       const items:MenuItem[]=[]
  //       if (child.children) {
  //         child.children.forEach((sub) => {
  //           items.push( getItem( sub.path, sub.label, ) ); // 添加子项对象
  //         });
  //       }
  //       navItems.push(
  //         getItem(
  //           child.path, 
  //           child.label,
  //           child.icon !== undefined ? iconDom(child.icon) : undefined,
  //           items
  //         )
  //       );
  //       console.log("item1",item);
        
  //     });
  //   }
  // });
  const currentSelected=useLocation().pathname.replace("/","");

  const currentKeyPathStr=sessionStorage.getItem("keyPath")||"[]";
  const currentKeyPath=JSON.parse(currentKeyPathStr);


  const navigate = useNavigate();
  const navClick=(e: { keyPath: string[], key: string })=>{
    sessionStorage.setItem("keyPath",JSON.stringify(e.keyPath));
    navigate('/'+e.key);
    console.log("navClick",e);
  }
  console.log("currentSelected",currentSelected);
  
  const [openKeys,setOpenKeys]=useState<string[]>([]);
  const handleOpenChange=(e:string[])=>{
    console.log("handleOpenChange",e);
    setOpenKeys([e[e.length-1]]);
    console.log("openKeys",openKeys);
  }
  if(openKeys.length==0&&currentKeyPath.length>0){
    if(currentSelected==currentKeyPath[0]){
      setOpenKeys(currentKeyPath);
    }else{
      sessionStorage.removeItem("keyPath")
    }
    
  }
  
  return (
    <div >
      <Menu
        defaultSelectedKeys={[currentSelected]}
        defaultOpenKeys={['dashboard']}
        mode="inline"
        theme="dark"
        onOpenChange={handleOpenChange}
        items={processedMenu}
        openKeys={openKeys}
        onClick={navClick}
      />
    </div>
  );
};
  

