import Banner from "components/Banner";
import Title from "components/Title";
import videos from "json/db.json";
import Card from "components/Card";
import React from "react";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
