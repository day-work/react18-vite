import React from 'react'

import { Breadcrumb, Layout } from 'antd'

import AlSider from './components/AlSider'
import AlHeader from './components/AlHeader'
import AlFooter from './components/AlFooter'

import styles from './index.module.less'

const { Content } = Layout

interface LayoutAppTypes {
  children: React.ReactElement | React.ReactNode;
}

const LayoutApp: React.FC<LayoutAppTypes> = (props) => {

  const { children } = props;

  return (
    <div className={styles.layouts}>
      <Layout style={{ minHeight: '100vh' }}>
        <AlSider />

        <Layout className={styles.site_layout}>
          <AlHeader />
          <Content className={styles.al_content}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.al_main}>{children}</div>
          </Content>
          <AlFooter />
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutApp
