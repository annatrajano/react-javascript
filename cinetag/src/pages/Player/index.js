import Banner from "components/Banner"
import styles from "./Player.module.css"

import React from 'react'
import Title from "components/Title"
import NotFound from "pages/NotFound"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

export default function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
}, [])

  if (!video) {
    return <NotFound/>
}
  return (
    <>
    <Banner imagem="player" />
    <Title>
        <h1>
            Player
        </h1>
    </Title>
    <section className={styles.container}>
        <iframe
        width="100%"
        height="100%"
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </>
  )
}
