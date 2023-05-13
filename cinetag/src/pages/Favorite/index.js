import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorite.module.css";

import React from "react";
import Card from "components/Card";
import { useFavoritoContext } from "contexts/Favoritos";

export default function Favorite() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={styles.container}>
{/*         {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })} */}
      </section>
    </>
  );
}
