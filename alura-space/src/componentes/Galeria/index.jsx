import React, { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";

import styles from "./galeria.module.scss";
import fotos from "./fotos.json";

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((item) => item.tag))];
  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });
    setItens(novasFotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
      <Cards styles={styles} fotos={itens} />
    </section>
  );
}
