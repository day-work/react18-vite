import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const AlFooter: React.FC<{}> = (props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      altlas @2022 Create by Front-end team
    </Footer>
  )
}

export default AlFooter
