import React from 'react'
import styles from './Menu.module.scss'

export default function Menu(props) {
    const data = props.data
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li lassName={styles.menu__item}>
                <img src={data.img} alt='' />
                <a href='/'>{data.ancor}</a>

            </li>
        </ul>
    </nav>
  )
}
