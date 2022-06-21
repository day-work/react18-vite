import React from 'react'
import { Layout, Menu, Dropdown, Badge, Avatar } from 'antd'
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import globalization from '@/assets/svg/globalization.svg'

import styles from './index.module.less'

const { Header } = Layout

interface AlHeaderProps {}

const AlHeader: React.FC<AlHeaderProps> = (props) => {
  const langMenu: React.ReactNode = (
    <Menu
      items={[
        {
          key: '1',
          label: '简体中文',
          icon: '🇨🇳 '
        },
        {
          key: '2',
          label: 'English',
          icon: '🇬🇧 '
        },
        {
          key: '3',
          label: 'Russia',
          icon: '🇷🇺 '
        }
      ]}
    />
  )

  const userMenu: React.ReactNode = (
    <Menu
      items={[
        {
          key: '1',
          label: '个人中心',
          icon: <UserOutlined />
        },
        {
          key: '2',
          label: '个人设置',
          icon: <SettingOutlined />
        },
        {
          key: '3',
          label: '退出登录',
          icon: <LogoutOutlined />
        }
      ]}
    />
  )

  return (
    <Header className={styles.al_headers}>
      <div className={styles.right_personal__center}>
        <Dropdown
          overlay={userMenu}
          overlayClassName="user-setting"
          placement="bottom"
        >
          <div>
            <strong>测试1</strong>
            <Badge count={1}>
              <Avatar icon={<UserOutlined />} />
            </Badge>
          </div>
        </Dropdown>
      </div>

      <div className={styles.right_global__zation}>
        <Dropdown
          overlay={langMenu}
          overlayClassName="lang-name"
          placement="bottom"
        >
          <img src={globalization} alt="error" />
        </Dropdown>
      </div>
    </Header>
  )
}

export default AlHeader
