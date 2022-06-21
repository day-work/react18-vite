import React, { useState } from 'react'
import { Menu, Layout } from 'antd'
import type { MenuProps } from 'antd'
import { Route, useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

import routers from '@config/router'

import styles from './index.module.less'

const { Content, Sider, Footer } = Layout

type MenuItem = Required<MenuProps>['items'][number]


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5')
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8')
  ]),
  getItem('Files', '9', <FileOutlined />)
]

interface AlSiderProps {}

const AlSider: React.FC<AlSiderProps> = (props) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState<boolean>(false)


  const menuSelect = (pmrams: MenuInfo): void => {
    console.log(pmrams)
    navigate('/login')
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo}>Altlas</div>
      <Menu
        theme="dark"
        onSelect={menuSelect}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Sider>
  )
}

export default AlSider
