import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'

import { ConfigProvider } from 'antd'

import Login from './../src/pages/user/pages/Login'
import Live from './../src/pages/dashboard/pages/Live'

import 'antd/dist/antd.css'
import LayoutApp from './layouts'
import './index.less'

interface AltlasAppTypes {}

const AltlasApp: React.FC<AltlasAppTypes> = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="app">
        <LayoutApp>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard/live" element={<Live />} />
          </Routes>
        </LayoutApp>
      </div>
    </ConfigProvider>
  )
}

export default AltlasApp
