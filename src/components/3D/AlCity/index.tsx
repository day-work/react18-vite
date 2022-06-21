import React from 'react'
import { Layout } from 'antd'

import styles from './index.module.less'

const { Header } = Layout

interface AlCityProps {}

const AlCity: React.FC<AlCityProps> = (props) => {
    return <Header className={styles.al_headers} />
}

export default AlCity;
