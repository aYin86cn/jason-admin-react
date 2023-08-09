// import { useState } from 'react'
import {Link} from 'react-router-dom'
import "./index-sider.less"
import {routers} from "../../../router"
import {useState} from "react";

import { Nav } from '@douyinfe/semi-ui';
import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';


function Sider() {
  const [router] = useState(routers)

  // this.state={count:0};//等于上面的写法

  return (
    <Nav
      bodyStyle={{ height: 320 }}
      items={[
          { itemKey: 'user', text: '用户管理', icon: "fa fa-file" },
          { itemKey: 'union', text: '活动管理' },
          {
              text: '任务平台',
              // icon: <IconSetting />,
              itemKey: 'job',
              items: ['任务管理', '用户任务查询'],
          },
      ]}
      onSelect={data => console.log('trigger onSelect: ', data)}
      onClick={data => console.log('trigger onClick: ', data)}
    />
    
  )
}

export default Sider
