import React from 'react'

import styles from './styles.module.scss'

export default function ({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}