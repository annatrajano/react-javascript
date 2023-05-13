import styles from "./Title.module.css"

import React from 'react'

export default function Title({children}) {
  return (
    <div className={styles.texto}>
        {children}
    </div>
  )
}
