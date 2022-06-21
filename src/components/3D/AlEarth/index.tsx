import React from 'react'
import { Layout } from 'antd'

import styles from './index.module.less'

const { Header } = Layout

interface AlEarthProps {}

const AlEarth: React.FC<AlEarthProps> = (props) => {
    return <Header className={styles.al_headers} />
}

export default AlEarth;
