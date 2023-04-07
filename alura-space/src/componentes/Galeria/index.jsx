import React from 'react'
import Tags from '../Tags'
import Cards from './Cards'

import styles from "./galeria.module.scss"
import fotos from "./fotos.json"



export default function Galeria() {
  return (
    <section className={styles.galeria} >
        <h2>
            Navegue pela galeria
        </h2>
        <Tags />
        <Cards  styles={styles} fotos={fotos}/>
        


    </section>
  )
}
