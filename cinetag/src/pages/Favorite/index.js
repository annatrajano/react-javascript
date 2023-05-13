import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorite.module.css";

import React from "react";
import Card from "components/Card";

export default function Favorite() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={styles.container}>
        <Card id="1" titulo="Gato" />
      </section>
    </>
  );
}
